export default {
  siteMetadata: {
    title: `Site Title`,
    description: `Site Description`,
    author: `@klase`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-codegen",
      options: {},
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "prismic-repo-name", // (REQUIRED, replace with your own)
        // accessToken: "##########", // (optional API access token)
        path: "/preview", // (optional preview path. Default: /preview)
        previews: true, // (optional, activated Previews. Default: false)
        pages: [
          {
            // (optional, builds pages dynamically)
            type: "Artist", // TypeName from prismic
            match: "/artists/:uid", // Pages will be generated under this pattern
            path: "/artist", // Placeholder page for unpublished documents
            component: require.resolve(`${__dirname}/src/templates/artist.tsx`),
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
