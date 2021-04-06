const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
    "@storybook/addon-essentials",
    '@storybook/addon-notes',
    {
      name: '@storybook/preset-scss', options: {
        cssLoaderOptions: {
          modules: true,
        }
      }
    },
    '@storybook/vue'
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      "~/": path.resolve(__dirname, "node_modules/"),
      "@/": path.resolve(__dirname, "/"),
    }

    return config;
  }
}