import React from 'react';
import Layout from '../components/layout';
import Postcard from '../components/postcard';
import { postContainer } from './index.module.css';
import { graphql } from 'gatsby';

export default function MainPage({ data }){
  return (
    <Layout>
      <div>
        <div style={{width:'100%', height:'300px', display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', fontSize:'2rem', border:'2px solid var(--line-color)'}}>
          <div>매일매일 배운거 하나라도 정리해서</div>
          <div><strong>죽기 직전</strong>까지 배워서 채우기</div>
        </div>
        <div style={{width:'100%', marginTop:'50px'}}>
          <div style={{fontSize:'18px'}}>최신 포스트</div>
          <div className={postContainer}>
            {data.allMdx.nodes.map(item => (
                <Postcard key={item.id} title={item.frontmatter.title} description={item.frontmatter.description} date={item.frontmatter.date} tag={item.frontmatter.tag} slug={item.fields.slug} thumbnail={item.frontmatter.hero_image_url}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order:DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tag
        description
        hero_image_url {
          childImageSharp {
            gatsbyImageData(
              width: 300
            )
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
`