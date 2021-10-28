const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const slugify = require('./src/utils/slugify');

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === 'Mdx') {
        const slug = slugify.slugify(node.frontmatter.title);
        console.log(slug);
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
}

exports.createPages = async ({graphql, actions, reporter}) => {
    const { createPage } = actions;

    const result = await graphql(`
    query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              id
            }
          }
        }
      }
    `)

    if (result.error){
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    const posts = result.data.allMdx.edges;

    posts.forEach(({node}, index) => {
        createPage({
            path: `post/${node.fields.slug}`,
            component: path.resolve(`./src/components/postLayout.js`),
            context: {id: node.id},
        })
    })
}