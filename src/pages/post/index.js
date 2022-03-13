import React from "react";
import Layout from "../../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import {
  postContainer,
  topContainer,
  topLeft,
  topRight,
  input,
} from "./index.module.css";
import Postcard from "../../components/postcard";
import { AiOutlineSearch } from "react-icons/ai";

export default function Page1() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tag
            description
            hero_image_url {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className={topContainer}>
        <div className={topLeft}>글 목록</div>
        <div className={topRight}>
          <AiOutlineSearch size={25} />
          <input className={input} type="text" placeholder="검색" />
        </div>
      </div>
      <div className={postContainer}>
        {data.allMdx.nodes.map((item) => (
          <Postcard
            key={item.id}
            title={item.frontmatter.title}
            description={item.frontmatter.description}
            date={item.frontmatter.date}
            tag={item.frontmatter.tag}
            slug={item.fields.slug}
            thumbnail={item.frontmatter.hero_image_url}
          /> // title, description, date, tag 필요
        ))}
      </div>
    </Layout>
  );
}
