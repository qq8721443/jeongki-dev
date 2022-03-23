import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Layout from "./layout";
import "./postLayout.module.css";
import * as MDXDesign from "./markdown-react-component";
import CodeBlock from "./CodeBlock";
import { Helmet } from "react-helmet";

export default function DetailPage({ data }) {
  return (
    <Layout>
      <Helmet title={`${data.mdx.frontmatter.title} | Jeongki Dev`}></Helmet>
      <div>
        <header style={{ fontSize: "2rem", fontWeight: 400 }}>
          {data.mdx.frontmatter.title}
        </header>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "30px" }}
        >
          {data.mdx.frontmatter.tag.map((tag, i) => (
            <div
              key={i}
              style={{
                display: "inline-block",
                padding: "0 10px",
                marginRight: "5px",
                borderRadius: "10px",
                background: "var(--post-tag-back-color)",
                color: "rgba(255, 255, 255, 0.87)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>{data.mdx.frontmatter.date}</div>
          <div>{data.mdx.fields.readingTime.text}</div>
        </div>
      </div>
      <main
        style={{ marginTop: "50px", fontSize: "1.2rem", lineHeight: "2rem" }}
      >
        <MDXProvider
          components={{
            blockquote: MDXDesign.Blockquote,
            a: MDXDesign.A,
            code: CodeBlock,
            h2: MDXDesign.H2,
            h3: MDXDesign.H3,
            ol: MDXDesign.Ol,
            ul: MDXDesign.Ul,
            em: MDXDesign.Em,
            li: MDXDesign.Li,
          }}
        >
          <MDXRenderer frontmatter={data.mdx.frontmatter}>
            {data.mdx.body}
          </MDXRenderer>
        </MDXProvider>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
        readingTime {
          text
        }
      }
    }
  }
`;
