module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };
  