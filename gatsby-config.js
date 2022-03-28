module.exports = {
  siteMetadata: {
    siteUrl: "https://jeongki.dev",
    title: "Jeongki Dev",
    description: "Jeongki의 개발 실력 향상을 위한 블로그입니다.",
    image: `${__dirname}/src/images/blog-thumbnail.jpg`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "contents",
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jeongki Dev",
        short_name: "JeongkiDev",
        start_url: "/",
        display: "standalone",
        icon: "src/images/favicon-16x16.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxwidth: 800,
              wrapperStyle: "width:400px; height:300px",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: `#189AD3`,
        showSpinner: false,
      },
    },
    "gatsby-remark-images",
    "gatsby-remark-reading-time",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "prism-react-renderer",
  ],
};
