import React from 'react';
import Layout from '../../components/layout';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {postContainer, topContainer, topLeft, topRight} from './index.module.css';
import Postcard from '../../components/postcard';

export default function Page1() {
    const data = useStaticQuery(graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order:DESC}) {
          nodes {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              tag
              description
            }
            id
            fields {
                slug
            }
          }
        }
      }
    `)
    return (
        <Layout>
            <div className={topContainer}>
                <div className={topLeft}>
                    글 목록
                </div>
                <div className={topRight}>
                    <input style={{height:'100%', outline:'none', border:'1px solid #808080', borderRadius:'5px', boxSizing:'border-box', paddingLeft:'10px', marginRight:'10px'}} type="text" placeholder="검색"/>
                    <input style={{width:'40px', height:'100%', border:'none', cursor:'pointer', backgroundColor:'var(--button-color)', borderRadius:'5px', color:'#fff', textAlign:'center'}} type="button" value="🔍" />
                </div>
            </div>
            <div className={postContainer}>
            {data.allMdx.nodes.map(item => (
              <Postcard key={item.id} title={item.frontmatter.title} description={item.frontmatter.description} date={item.frontmatter.date} tag={item.frontmatter.tag} slug={item.fields.slug}/> // title, description, date, tag 필요
            ))}
            </div>
        </Layout>
    )
}