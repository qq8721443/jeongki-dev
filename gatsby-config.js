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
    "gatsby-remark-images",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: `#189AD3`,
        showSpinner: false,
      },
    },
    "gatsby-remark-reading-time",
    "prism-react-renderer",
  ],
};
