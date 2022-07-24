// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThingsPanel test', //首页顶部的文字
  tagline: 'Dinosaurs are cool test', //首页说明的文字
  // Docusaurus Tutorial - 5min ⏱️ 这个修改 需要在 src\pages\index.tsx 文件夹里面 
  url: 'http://docs.thingspanel.io', //网址url
  baseUrl: '/', //域名目录
  onBrokenLinks: 'throw', //无效连接检测信息
  onBrokenMarkdownLinks: 'warn',//Docusaurus 在检测到无效 Markdown 链接时的行为。
  favicon: 'img/favicon.ico',  //首页icon
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en', //默认语言 
    locales: ['en', 'fr', 'zh-Hans'],//翻译语言  需要配合crowdin后台配置
  },
  // 主题配置文件
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // 页面配置文件
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ThingsPanel test', //导航title显示
        logo: {
          alt: 'ThingsPanel', //图片alt
          src: 'img/dark.svg', //图片src
          srcDark: 'img/logo.svg', //黑暗模式下的
        },
        items: [
          {
            type: 'doc',//菜单 docs模式
            docId: 'intro', //菜单id 跳转菜单使用
            position: 'left',//位置
            label: 'Docs', //名称
          },
          //同上
          { to: '/blog', label: 'Blog', position: 'left' },

          {
            type: 'docsVersionDropdown',//版本配置 可自动生成 
            position: 'right',//位置 右边
            dropdownItemsAfter: [//也可以自己跳转 v2 v3是自动生成的  v1是跳转外部连接
              { to: 'http://docs.thingspanel.io', label: 'v1', target: '_blank' },
            ],
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
          },
          // 语言模块 
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'icon-link language navbar__item',
          },
          // github显示
          {
            href: 'https://github.com/ThingsPanel',
            label: 'GitHub',
            position: 'right',
          },

        ],

      },
      footer: {
        style: 'dark',//颜色模块  
        links: [
          {
            title: 'Docs', //底部第一个菜单 
            // 第一个菜单对应的菜单项
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community', //底部第二个菜单
            // 第二个菜单对应的菜单项
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',//底部第三个菜单
            // 第三个菜单对应的菜单项
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        // 版权信息  ${new Date().getFullYear()}  当前日期
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      // 主题
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
