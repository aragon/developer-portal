const fs = require('fs');
const path = require('path');

// Directory to scan
const baseDir = 'build/site';

// Vercel's `trailingSlash` option compiles to rules that only ever inspect the LAST path
// segment. One of them strips the trailing slash from any URL whose final segment ends in
// `.<word>` (^/((?:[^/]+/)*[^/]+\.\w+)/$), because it assumes such a segment is a filename.
// Component version roots like /osx-contracts/1.x/ match, so they are served as
// /osx-contracts/1.x and the browser resolves every page-relative URL against
// /osx-contracts/ instead — dropping one directory and 404ing.
//
// Antora emits page-relative URLs, so the fix is to make the URLs on exactly those pages
// root-absolute. This regex mirrors Vercel's, so the set of files we touch is precisely the
// set it serves without a trailing slash — including any future page (not just a version
// root) whose directory name happens to carry a dot.
const dottedDirRegex = /\.\w+$/;

// Attributes carrying a URL in Antora's output. Longest first so `srcset` is not shadowed.
const urlAttributes = ['srcset', 'src', 'href', 'data-site-root-path', 'data-stylesheet'];

// Only whitespace-preceded attributes, so `data-href` is not mistaken for `href`.
const attributeRegex = new RegExp(`(?<=\\s)(${urlAttributes.join('|')})="([^"]*)"`, 'g');

// A URL we must leave alone: already root-absolute, a bare fragment, or carrying a scheme.
const isAlreadyResolved = (url) =>
  url === '' || url.startsWith('/') || url.startsWith('#') || /^[a-z][a-z0-9+.-]*:/i.test(url);

// Resolve a page-relative URL against the directory the page is served from.
const toRootAbsolute = (url, baseUrlPath) => {
  if (isAlreadyResolved(url)) return url;

  // Keep any ?query / #fragment out of the path arithmetic, then put it back.
  const suffixIndex = url.search(/[?#]/);
  const urlPath = suffixIndex === -1 ? url : url.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : url.slice(suffixIndex);
  if (urlPath === '') return url;

  // path.posix.resolve normalises '..' correctly, and clamps at the root like a browser.
  const resolved = path.posix.resolve(baseUrlPath, urlPath);

  // resolve() drops a trailing slash. Put it back, otherwise a directory link would earn a
  // needless extra redirect hop (Vercel would 308 it back to the slashed form on every click).
  const trailingSlash = urlPath.endsWith('/') && !resolved.endsWith('/') ? '/' : '';

  return resolved + trailingSlash + suffix;
};

// data-site-root-path is not a URL, it is a PREFIX the search UI concatenates onto already
// site-root-absolute hrefs: `documentHitLink.href = siteRootPath + doc.url`, where doc.url looks
// like "/osx-contracts/1.x/core/". Resolving the usual way would yield "/", and "/" + "/foo/"
// gives "//foo/" — which a browser reads as protocol-relative (host "foo"), breaking every
// search result on the page. Once the page is root-absolute the correct prefix is the empty
// string, which search-ui.js already handles via `config.siteRootPath || ''`.
const toRootPathPrefix = (value, baseUrlPath) => {
  const resolved = toRootAbsolute(value, baseUrlPath);
  return resolved === '/' ? '' : resolved;
};

// srcset is a comma-separated list of "<url> [descriptor]" entries.
const rewriteSrcset = (value, baseUrlPath) =>
  value
    .split(',')
    .map((entry) => {
      const trimmed = entry.trim();
      if (!trimmed) return entry;
      const [url, ...descriptor] = trimmed.split(/\s+/);
      return [toRootAbsolute(url, baseUrlPath), ...descriptor].join(' ');
    })
    .join(', ');

// Function to recursively collect index.html files sitting in a dot-suffixed directory
const findDottedRootPages = (dir) => {
  let pages = [];

  const filesAndDirs = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of filesAndDirs) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      pages = pages.concat(findDottedRootPages(fullPath));
    } else if (item.name === 'index.html' && dottedDirRegex.test(path.basename(dir))) {
      pages.push(fullPath);
    }
  }

  return pages;
};

// Rewrite one page in place, returning how many URLs changed
const absolutizePage = (file) => {
  const relativeDir = path.relative(baseDir, path.dirname(file));
  const baseUrlPath = `/${relativeDir.split(path.sep).join('/')}/`;
  const html = fs.readFileSync(file, 'utf8');

  let rewritten = 0;
  const updated = html.replace(attributeRegex, (match, attribute, value) => {
    let resolved;
    if (attribute === 'srcset') {
      resolved = rewriteSrcset(value, baseUrlPath);
    } else if (attribute === 'data-site-root-path') {
      resolved = toRootPathPrefix(value, baseUrlPath);
    } else {
      resolved = toRootAbsolute(value, baseUrlPath);
    }

    if (resolved === value) return match;
    rewritten += 1;
    return `${attribute}="${resolved}"`;
  });

  if (rewritten) fs.writeFileSync(file, updated, 'utf8');

  return rewritten;
};

if (!fs.existsSync(baseDir)) {
  console.error(`Cannot absolutize URLs: '${baseDir}' does not exist. Run Antora first.`);
  process.exit(1);
}

const pages = findDottedRootPages(baseDir);

let totalRewritten = 0;
for (const page of pages) {
  const rewritten = absolutizePage(page);
  totalRewritten += rewritten;
  console.log(`  ${path.relative(baseDir, page)}: ${rewritten} URL(s)`);
}

console.log(
  `Absolutized ${totalRewritten} relative URL(s) across ${pages.length} dot-suffixed root page(s).`
);
