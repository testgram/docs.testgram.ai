/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
      "intro",
      {
        type: 'category',
        label: '⭐ Getting Started',
        items: [
            'getting-started/install',
            // 'getting-started/demo-world'
        ],
      },
      {
          type: 'category',
          label: '⛏ The Basics',
          items: [
              'core/concepts',
              'core/architecture'
          ],
      },
      {
          type: 'category',
          label: '🗺 World',
          items: [
              'world/world',
              'world/data',
              'world/privacy',
          ],
      },
      {
          type: 'category',
          label: '🧍‍♀️Players',
          items: [
              'player/player',
              'player/goals',
              // 'player/rules'
          ],
      },
      // {
      //     type: 'category',
      //     label: '🚩Events',
      //     items: [
      //         'event/event',
      //     ],
      // }
    ],
    marketSidebar: [
        "market",
        "market/jserror",
        "market/unhandledrejection",
        "market/consoleerror",
        "market/text_overflow",
        "market/broken_link"
    ]
};
