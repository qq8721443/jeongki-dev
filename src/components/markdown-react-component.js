import React from 'react';
export function Blockquote({ children }) {
    return (
        <blockquote style={{paddingLeft:'15px', borderLeft:'7px solid #808080'}}>
            {children}
        </blockquote>
    )
}

export function A(props) {
    return (
        <a {...props} style={{fontWeight:'500', color:'mediumaquamarine'}}>
            {props.children}
        </a>
    )
}