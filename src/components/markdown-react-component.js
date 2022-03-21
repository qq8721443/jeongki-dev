import React from "react";
export function Blockquote({ children }) {
  return (
    <blockquote
      style={{
        padding: "15px",
        margin: "15px",
        borderLeft: "3px solid #808080",
        color: "#909090",
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
    <h2
      {...props}
      style={{ fontWeight: "500", margin: "50px 0px", color: "#606060" }}
    >
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

export function Em(props) {
  return (
    <em
      {...props}
      style={{
        all: "unset",
        width: "100%",
        height: "100%",
        backgroundColor: "#dedede",
        fontSize: "1rem",
        padding: "5px",
        borderRadius: "5px",
      }}
    ></em>
  );
}
