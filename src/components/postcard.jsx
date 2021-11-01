import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import NProgress from 'nprogress';
import { postcardContainer, postcardTop, postcardBottom } from './postcard.module.css';

export default function Postcard({title, description, date, tag, slug, thumbnail}) {
    const pathName = typeof window !== 'undefined'?window.location.pathname:'/';
    const thumbnailImage = getImage(thumbnail);
    return (
        <Link to={pathName==='/'?`post/${slug}`:`${slug}`} onClick={() => NProgress.start()}>
        <div className={postcardContainer}>
            <div className={postcardTop}>
                {thumbnail !== null?
                <GatsbyImage style={{width:'100%', height:'100%'}} image={thumbnailImage} alt="thumbnail-image"/>
                :
                <div style={{width:'100%', height:'100%', fontSize:'1.3rem', fontWeight:'600', display:'flex', justifyContent:'center', alignItems:'center'}}>{title}</div>
                }
            </div>
            <div className={postcardBottom}>
                <div style={{flex:1, fontSize:'1.2rem', fontWeight:500}}>{title}</div>
                <div style={{flex:3}}>{description}</div>
                <div style={{flex:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>{date}</div>
                    <div>{tag?.map((item, index) => (
                        <div key={index} style={{display:'inline-block', color:'mediumaquamarine', padding:'0 5px', margin:'0 2px', border:'1px solid mediumaquamarine', borderRadius:'7.5px'}}>
                            {item}
                        </div>
                    ))}</div>
                </div>
            </div>
        </div>
        </Link>
    )
}