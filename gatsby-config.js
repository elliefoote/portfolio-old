module.exports = {
  siteMetadata: {
    title: `Ellie Foote | Software Engineer`,
    siteUrl: `https://www.elliefoote.com`
  },
  plugins: [`gatsby-plugin-preact`, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};