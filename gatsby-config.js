module.exports = {
  siteMetadata: {
    siteUrl: "https://jeongki.dev",
    title: "Jeongki Dev",
    description:"Jeongki의 개발 실력 향상을 위한 블로그입니다."
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name:"Jeongki Dev",
        short_name:"JeongkiDev",
        start_url:'/',
        display:'standalone',
        icon: "src/images/favicon-16x16.png"
      }
    },
    "gatsby-plugin-mdx",
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    "prism-react-renderer"
  ],
};
