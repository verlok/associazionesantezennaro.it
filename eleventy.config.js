const Image = require("@11ty/eleventy-img");
const path = require("path");

async function imageShortcode(src, alt, widths = [446], sizes = "223px", className = "") {
  // Resolve path from project root
  let originalPath = path.join(__dirname, "src", src);
  
  let metadata = await Image(originalPath, {
    widths: widths,
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./_site/img/",
    urlPath: "/img/",
    filenameFormat: function (id, src, width, format, options) {
      const extension = format;
      const name = path.basename(src, path.extname(src));
      return `${name}-${width}.${extension}`;
    }
  });

  let imageAttributes = {
    alt,
    sizes: sizes,
    loading: "lazy",
    decoding: "async",
  };
  
  if (className) {
    imageAttributes.class = className;
  }

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Passthrough copy for assets and redirects
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/_redirects");

  // Register the asynchronous image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Add custom collection for posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date);
  });

  // Shortcode to get current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
