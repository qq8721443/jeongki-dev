import React from "react";
export function Blockquote({ children }) {
  return (
    <blockquote
      style={{
        padding: "15px",
        margin: "15px",
        borderLeft: "7px solid #808080",
      }}
    >
      {children}
    </blockquote>
  );
}

export function A(props) {
  return (
    <a {...props} style={{ fontWeight: "500", color: "#189AD3" }}>
      {props.children}
    </a>
  );
}

export function H2(props) {
  return (
    <h2 {...props} style={{ fontWeight: "500", margin: "20px 0px" }}>
      {props.children}
    </h2>
  );
}

export function H3(props) {
  return (
    <h3 {...props} style={{ fontWeight: "400", margin: "20px 0" }}>
      {props.children}
    </h3>
  );
}

export function Ol(props) {
  return (
    <ol {...props} style={{ margin: "0px 20px", padding: "10px" }}>
      {props.children}
    </ol>
  );
}

export function Ul(props) {
  return (
    <ul {...props} style={{ margin: "0px 20px", padding: "10px" }}>
      {props.children}
    </ul>
  );
}
