const TwigPlugin = require('../.eleventy.js')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(TwigPlugin, {
    init: async function (Twig) {
      Twig.cache(false)
    },

    twigOptions: {
      strictVariables: true,
      autoescape: true,
      allowInlineIncludes: true,
      namespaces: {
        includes: 'src/_includes',
        layouts: 'src/_layouts',
      }
    }
  })

  return {
    dir: {
      input: 'src',
      layouts: '_layouts'
    }
  }
}