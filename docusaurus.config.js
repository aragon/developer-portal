// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github,
  darkCodeTheme = themes.dracula;
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aragon Developer Portal',
  tagline: "Let's build amazing things together",
  url: 'https://devs.aragon.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  favicon: 'img/Aragon-logo-circle.png',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          includeCurrentVersion: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: '1.4.0-alpha',
            },
          },
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/markdown.css'),
          ],
        },
        gtag: {
          trackingID: 'G-MEJG7Q2SPG',
          anonymizeIP: true,
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Aragon',
          src: 'img/logo-light.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'osxSidebar',
            label: 'Overview',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'advancedSidebar',
            label: 'Advanced',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'guidesSidebar',
            label: 'Guides',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'supportSidebar',
            label: 'Support',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      metadata: [
        {name: 'og:title', content: 'Aragon Developer Portal'},
        {name: 'og:type', content: 'documentation'},
        {name: 'og:url', content: 'https://devs.aragon.org'},
        {
          name: 'og:image',
          content: '/img/Aragon_OSx_Thumbnail.png',
        },
        {
          name: 'og:description',
          content:
            'Aragon OSx enhances security and flexibility by isolating governance logic into modular plugins, making governance contracts safer and faster to customize.',
        },
      ],
      footer: {
        // Costom footer is used (see: /theme/Footers)
        style: 'dark',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity', 'json', 'bash'],
      },
      announcementBar: {
        id: 'register_to_dev_newsletter',
        content:
          'Register to our developer newsletter and get the latest updates on DAO tooling <a target="_blank" rel="noopener noreferrer" href="https://aragondevelopers.substack.com/">here</a></strong>!',
        backgroundColor: '#3164fa',
        textColor: '#fff',
        isCloseable: true,
      },
    }),

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
      },
    ],
    [
      '@graphql-markdown/docusaurus',
      {
        schema: `./static/subgraph/schema-introspection-partial.json`,
        rootPath: './versioned_docs/version-1.3.0',
        baseURL: 'osx/subgraph/reference-guide',
        homepage: './static/subgraph/index.md',
        linkRoot: '/docs',
        loaders: {
          JsonFileLoader: {
            module: '@graphql-tools/json-file-loader',
            options: {
              rootTypes: {
                query: '',
                subscription: '',
                mutation: '',
              },
            },
          },
        },
        printTypeOptions: {
          useApiGroup: false,
        },
      },
    ],
    async function TailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
