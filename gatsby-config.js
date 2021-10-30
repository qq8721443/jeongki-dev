module.exports = {
  siteMetadata: {
    siteUrl: "https://jeongki.dev",
    title: "Jeongki Dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:'contents',
        path:`${__dirname}/src/contents`
      },
    },
    {
      resolve:"gatsby-plugin-mdx",
      options:{
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-highlight-code"
          }
        ]
      }
    },
    {
      resolve:"gatsby-plugin-nprogress",
      options:{
        color: `mediumaquamarine`,
        showSpinner: false,
      }
    },
    "gatsby-remark-reading-time",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
};
