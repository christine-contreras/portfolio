module.exports = {
  siteMetadata: {
    title: `Christine Contreras | Full Stack Web Developer`,
    description: `I am a full stack web developer specializing in eCommerce builds.`,
    author: `Christine Contreras`,
    siteUrl: `https://christine-contreras.com`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Montserrat`,
                variants: [`400`, `500`, `600`],
              },
              {
                family: `Karla`,
                variants: [`400`, `600`, `700`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christine Contreras Portfolio`,
        short_name: `Christine's Portfolio`,
        start_url: `/`,
        background_color: `#081c16`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
