import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/vsDark";

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            fontSize: "1.1rem",
            borderRadius: "10px",
            margin: "10px 0px",
            overflowX: "auto",
            fontFamily: "Source Code Pro",
          }}
        >
          {tokens.map((line, i) =>
            i !== tokens.length - 1 ? (
              <div key={i} {...getLineProps({ line, key: i })}>
                {i + 1}
                {"  "}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ) : null
          )}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
