module.exports = {
  layout: 'main.twig',

  eleventyComputed: {
    permalink: function (data) {
      const { fileSlug } = data.page
      return `/articles/${fileSlug}/`
    }
  }
}