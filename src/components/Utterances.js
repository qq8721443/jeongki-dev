import React from "react";

export default function Utterances() {
  const comments = React.useRef();
  const [state, setState] = React.useState({
    status: "pending",
  });

  React.useEffect(() => {
    const $script = document.createElement("script");
    $script.onload = () => setState({ status: "success" });
    $script.onerror = () => setState({ status: "failed" });
    $script.async = true;
    $script.src = "https://utteranc.es/client.js";
    $script.setAttribute("repo", "qq8721443/jeongki-dev-comments");
    $script.setAttribute("issue-term", "title");
    $script.setAttribute("theme", "github-light");
    $script.setAttribute("crossorigin", "anonymous");
    comments.current.appendChild($script);
  }, []);

  return (
    <div className="comments-wrapper">
      {state.status === "failed" && <div>Error. Please try again.</div>}
      {state.status === "pending" && <div>Loading script...</div>}
      <div ref={comments} />
    </div>
  );
}
