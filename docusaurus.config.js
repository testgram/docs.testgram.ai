/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Testgram Docs',
  tagline: 'Test on.',
  url: 'https://docs.testgram.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'testgram', // Usually your GitHub org/user name.
  projectName: 'docs.testgram.ai', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Testgram',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg', // Default to `logo.src`.
        href: 'https://docs.testgram.ai/', // Default to `siteConfig.baseUrl`.
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          href: 'https://app.testgram.ai',
          label: 'Get Started',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            // {
            //   label: 'Tutorial',
            //   to: '/docs/intro',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Slack',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Testgram, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
