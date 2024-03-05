// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  osxSidebar: [{type: 'autogenerated', dirName: 'osx'}],
  sdkSidebar: [{type: 'autogenerated', dirName: 'sdk'}],
  ...require('./docs/subgraph/sidebar-schema.js'),
};

module.exports = sidebars;
