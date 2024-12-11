const fs = require('fs');
const path = require('path');

// Directory to scan
const baseDir = 'build/site';

// Output file
const redirectsFile = '_redirects';

// Function to recursively get HTML files and generate redirects
const generateRedirects = (dir, basePathToRemove) => {
  let redirects = [];

  const filesAndDirs = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of filesAndDirs) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // If it's a directory, recursively process it
      redirects = redirects.concat(generateRedirects(fullPath, basePathToRemove));
    } else if (item.isFile() && fullPath.endsWith('.html')) {
      // If it's an HTML file, generate the redirect line
      const relativePath = fullPath.replace(basePathToRemove + path.sep, ''); // Remove the base path
      const withoutHtml = relativePath.slice(0, -5); // Remove '.html'
      redirects.push(`/${withoutHtml} /${relativePath} 200`);
    }
  }

  return redirects;
};

// Generate redirects
const redirects = generateRedirects(baseDir, baseDir);

// Write to the _redirects file
fs.writeFileSync(`${baseDir}/_redirects`, redirects.join('\n'), 'utf8');

console.log(`Redirects file '${redirectsFile}' has been generated.`);