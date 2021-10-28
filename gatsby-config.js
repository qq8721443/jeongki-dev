module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
    "gatsby-plugin-mdx"
  ],
};
