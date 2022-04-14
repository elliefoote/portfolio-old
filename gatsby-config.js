module.exports = {
  siteMetadata: {
    title: `Ellie Foote | Software Engineer`,
    siteUrl: `https://www.elliefoote.com`,
    description: "I'm a software engineer based in Barcelona with experience building web sites and apps using ReactJS, NodeJS and more."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ellie Foote",
        short_name: "Ellie Foote",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  
    `gatsby-plugin-preact`, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    `gatsby-plugin-react-helmet`,
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};