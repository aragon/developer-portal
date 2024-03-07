// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  
  favicon: 'img/Aragon-logo-circle.png',

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
      },
      metadata: [
        {name: 'og:title', content: 'Aragon Developer Portal'},
        {name: 'og:type', content: 'documentation'},
        {name: 'og:url', content: 'https://devs.aragon.org'},
        {
          name: 'og:image',
          content:
            'https://res.cloudinary.com/duvrxe0m9/image/upload/v1684963446/Frame_47_3_fufumh.png',
        },
        {
          name: 'og:description',
          content:
            'Building a custom DAO is now easier than ever. Learn everything you need to know about the Aragon stack here',
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
        additionalLanguages: ['solidity', 'json', 'bash'],
      },
      announcementBar: {
        id: 'register_to_dev_newsletter',
        content:
          'Register to our developer newsletter and get the latest updates on DAO tooling <a target="_blank" rel="noopener noreferrer" href="https://aragonproject.typeform.com/to/LngekEhU">here</a></strong>!',
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
