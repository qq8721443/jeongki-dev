import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// import { useLocation } from '@reach/router';

export default function SEO() {
  // const {pathname} = useLocation(); post 인지 확인할때 쓸 수 있을수도 있음
  const data = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          description
          siteUrl
          title
          image
        }
      }
    }
  `);

  return (
    <Helmet title={data.site.siteMetadata.title}>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="url" content={data.site.siteMetadata.siteUrl} />
    </Helmet>
  );

  // pathname에 post가 포함되어 있으면 [포스트 제목|블로그 이름] 형식으로 타이틀 변경
}
