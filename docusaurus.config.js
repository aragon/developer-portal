// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aragon Developer Portal',
  tagline: "Let's build cool sh*t together",
  url: 'https://devs.aragon.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/Aragon-logo-circle.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aragon', // Usually your GitHub org/user name.
  projectName: 'Aragon Developer Portal', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
          // {
          //   type: 'doc',
          //   docId: 'sdk/README',
          //   position: 'left',
          //   label: 'SDK',
          // },
          // {
          //   type: 'doc',
          //   docId: '/docs/osx',
          //   position: 'left',
          //   label: 'Core',
          // }
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      metadata: [
        {name: 'og:title', content: 'Aragon Developer Portal'},
        {name: 'og:type', content: 'documentation'},
        {name: 'og:url', content: 'https://devs.aragon.org'},
        {name: 'og:image', content: 'https://devs.aragon.org'},
        {
          name: 'og:description',
          content:
            'Building a custom DAO is now easier than ever. Learn everything you need to know about Aragon here'
        },
      ],

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://ethereum.stackexchange.com/search?q=aragon',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/Wpk36QRdMN',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AragonProject/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://blog.aragon.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aragon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aragon Association, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      announcementBar: {
        id: 'register_dao_global_hackathon',
        content:
          'Register for the <strong>DAO Global Hackathon <a target="_blank" rel="noopener noreferrer" href="https://daoglobalhackathon.hackerearth.com/">here</a></strong> ⚡️ and win from a prize pool of 140k+ USD!',
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
