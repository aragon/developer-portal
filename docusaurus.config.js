// @ts-check
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
          id: 'default',
          path: 'docs/osx',
          routeBasePath: '/', // OSx docs as the main entry point
          sidebarPath: require.resolve('./sidebars/osxSidebar.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
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

  plugins: [
    // Governance UI Kit Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'governanceUiKit',
        path: 'docs/governanceUiKit',
        routeBasePath: 'governance-ui-kit',
        sidebarPath: require.resolve('./sidebars/governanceUiKitSidebar.js'),
        includeCurrentVersion: true,
      },
    ],
    // Governance App Template Documentation
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'governanceAppTemplate',
        path: 'docs/governanceAppTemplate',
        routeBasePath: 'governance-app-template',
        sidebarPath: require.resolve(
          './sidebars/governanceAppTemplateSidebar.js',
        ),
        includeCurrentVersion: true,
      },
    ],
    // Search Plugin
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here (default options are fine unless you have specific needs)
      },
    ],
    // Tailwind Plugin
    async function TailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
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
            sidebarId: 'osxSidebar',
            position: 'left',
            label: 'Aragon OSx',
          },
          {
            to: '/governance-ui-kit', // Link to Governance UI Kit documentation
            label: 'Governance UI Kit',
            position: 'left',
          },
          {
            to: '/governance-app-template', // Link to Governance App Template documentation
            label: 'Governance App Template',
            position: 'left',
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
          'Register to our developer newsletter and get the latest updates on DAO tooling <a target="_blank" rel="noopener noreferrer" href="https://aragondevelopers.substack.com/">here</a>!',
        backgroundColor: '#3164fa',
        textColor: '#fff',
        isCloseable: true,
      },
    }),
};

module.exports = config;
