import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Layout from './layout';
import './postLayout.module.css';
import { Blockquote, A } from './markdown-react-component';
import CodeBlock from './CodeBlock';
import { Helmet } from 'react-helmet';

export default function DetailPage({data}){
    return (
        <Layout>
            <Helmet title={`${data.mdx.frontmatter.title} | Jeongki Dev`}>

            </Helmet>
            <div>
                <header style={{fontSize:'2rem', fontWeight:600}}>{data.mdx.frontmatter.title}</header>
                <div style={{display:'flex', alignItems:'center', marginTop:'30px'}}>
                    {data.mdx.frontmatter.tag.map((tag, i) => (
                        <div key={i} style={{display:'inline-block', padding:'0 5px', marginRight:'5px', border:'2px solid mediumaquamarine', borderRadius:'10px'}}>
                            {tag}
                        </div>
                    ))}
                </div>
                <div style={{display:'flex', marginTop:'30px', justifyContent:'space-between', alignItems:'center'}}>
                    <div>{data.mdx.frontmatter.date}</div>
                    <div>{data.mdx.fields.readingTime.text}</div>
                </div>
            </div>
            <main style={{marginTop:'50px'}}>
                <MDXProvider components={{
                    blockquote:Blockquote,
                    a: A,
                    code: CodeBlock
                    }}>
                    <MDXRenderer frontmatter={data.mdx.frontmatter}>
                        {data.mdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </main>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        description
        tag
        title
      }
      id
      body
      fields {
          slug
          readingTime{
              text
          }
      }
    }
  }
`