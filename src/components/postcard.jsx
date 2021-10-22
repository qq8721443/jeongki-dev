import React from 'react';
import { postcardContainer, postcardTop, postcardBottom } from './postcard.module.css';

export default function Postcard() {
    return (
        <div className={postcardContainer}>
            <div className={postcardTop}></div>
            <div className={postcardBottom}>
                <div style={{flex:1}}>title</div>
                <div style={{flex:3}}>content</div>
                <div style={{flex:1, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>date</div>
                    <div>tags</div>
                </div>
            </div>
        </div>
    )
}