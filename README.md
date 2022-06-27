# Eleventy Plugin for Twig

This plugin adds support for [Twig.js](https://github.com/twigjs/twig.js) template engine.

## Installation

```
npm install @web-alchemy/eleventy-plugin-twig 
```

## Using

```javascript
const TwigPlugin = require('@web-alchemy/eleventy-plugin-twig')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(TwigPlugin, {
    // here you can extend Twig (add your own filter, functions, tags, etc.).
    // https://github.com/twigjs/twig.js/wiki/Extending-twig.js
    // https://github.com/twigjs/twig.js/wiki/Extending-twig.js-With-Custom-Tags
    init: async function (Twig) {
      Twig.cache(false)
    },

    twigOptions: {
      strictVariables: true,
      autoescape: true,
      allowInlineIncludes: true,
      // https://github.com/twigjs/twig.js/wiki#namespaces
      namespaces: {
        includes: 'src/_includes',
        layouts: 'src/_layouts',
      }
    },
    
    // here you can set a condition for skipping the template rendering
    skipRenderCondition: async function (inputContent, inputPath, config) {
      return false // function should return `true` for skipping
    },
  })
}
```

## References
- [Twig.js](https://github.com/twigjs/twig.js/)
- [Twig template language reference](https://twig.symfony.com/)
- [Another implementation of Eleventy Plugin for Twig](https://github.com/factorial-io/eleventy-plugin-twig)