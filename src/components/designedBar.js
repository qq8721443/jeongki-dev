import React from 'react';

export default function DesignedBar({width, fraction, color}) {
    return (
        <div style={{position:'relative', width:width, height:'20px', borderRadius:'15px', backgroundColor:'gray', overflow:'hidden'}}>
            <div style={{left:0, width:`${fraction}%`, height:'100%', backgroundColor:color}}></div>
        </div>
    )
}