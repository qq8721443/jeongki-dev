import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Postcard from '../components/postcard';
import { postContainer } from './index.module.css';

export default function MainPage(){
  return (
    <Layout>
      <div>
        <div style={{width:'100%', height:'300px', backgroundColor:'var(--container-color1)'}}>main intro</div>
        <div style={{width:'100%', marginTop:'50px'}}>
          <div style={{fontSize:'18px'}}>최신 포스트</div>
          <div className={postContainer}>
            <Postcard />
            <Postcard />
            <Postcard />
            <Postcard />
          </div>
        </div>
      </div>
    </Layout>
  )
}