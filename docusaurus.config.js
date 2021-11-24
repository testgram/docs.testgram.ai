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
    algolia: {
      apiKey: 'd21e560a9a1d7e7d9e67f91ce6b70c51',
      indexName: 'testgram',
    },
    gtag: {
      // You can also use your "G-" Measurement ID here.
      trackingID: 'GTM-5T6DH5S',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    colorMode: {
      defaultMode: 'light',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '\u{263E}',

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{2600}',
      },
    },
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
          href: 'https://run.testgram.ai',
          label: 'Get Started',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/palenight'),
    },
    footer: {
      style: 'light',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     // {
        //     //   label: 'Tutorial',
        //     //   to: '/docs/intro',
        //     // },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Slack',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/testgram',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/testgramai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home',
              href: 'https://testgram.ai',
            },
            // {
            //   label: 'Blog',
            //   href: 'https://blog.testgram.ai',
            // },
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
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
