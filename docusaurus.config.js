// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CMS 操作ガイド',
  tagline: 'ウェブサイト運用担当者向けのガイドライン',
  favicon: 'img/favicon.ico',

  url: 'https://example.com',
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // organizationName: 'facebook',
  // projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'CMS 操作ガイド',
        logo: {
          alt: 'Pace Layering',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Guides',
            position: 'left',
          },
          {
            to:'/blog',
            label: 'Blog',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'CMS 操作ガイド',
            items: [
              {
                label: 'Guides',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'リンク集',
            items: [
              {
                label: 'CMS 管理画面',
                href: 'https://example.com/',
              },
              {
                label: 'Pace Layering 企業サイト',
                href: 'https://example.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pace Layering, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
