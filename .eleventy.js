const Twig = require('twig')

module.exports = function(eleventyConfig, userOptions = {}) {
  eleventyConfig.addTemplateFormats('twig')

  eleventyConfig.addExtension('twig', {
    outputFileExtension: 'html',

    init: async function () {
      Twig.cache(false)

      if (typeof userOptions.init === 'function') {
        await userOptions.init(Twig)
      }
    },

    compile: async function (inputContent, inputPath) {
      if (typeof userOptions.skipRenderCondition === 'function') {
        const shouldSkip = await userOptions.skipRenderCondition.apply(this, [
          inputContent,
          inputPath,
          this.config
        ])
        if (shouldSkip) {
          return
        }
      }

      const template = Twig.twig({
        data: inputContent,
        path: inputPath,
        ...(userOptions.twigOptions || {})
      })

      return async (data) => {
        const content = await template.renderAsync(data)
        return content
      }
    }
  })
}

/**
 * If there are problems with asynchronous rendering, then we can use synchronous
  const template = Twig.compile(inputContent, {
    filename: inputPath,
    settings: {
      'twig options': userOptions.twigOptions
    }
  })
  const content = template(data)
*/