import React from "react";
import { Link } from "gatsby";
import NProgress from "nprogress";
import {
  navigator,
  insideNav,
  logo,
  menu,
  listItem,
  naviItem,
  mainContent,
  footer,
  insideFooter,
} from "./layout.module.css";
import Toggle from "./toggle.jsx";
import Seo from "./SEO";

export default function Layout({ children }) {
  // React.useLayoutEffect(() => {
  //     const displayMode = localStorage.getItem('display_mode');
  //     if (displayMode === null){
  //         localStorage.setItem('display_mode', 'light');
  //     }
  //     document.documentElement.setAttribute('display-mode', localStorage.getItem('display_mode'));
  // })
  let websiteTheme;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }

  const [theme, setTheme] = React.useState(websiteTheme);

  React.useLayoutEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
      console.log("함수 실행");
    };

    NProgress.done();
  }, []);

  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Seo />
      <nav className={navigator}>
        <div className={insideNav}>
          <div className={naviItem}>
            <div className={logo}>
              <Link to="/" onClick={() => NProgress.start()}>
                Jeongki
                <span style={{ color: "#189ad3" }}>.dev</span>
              </Link>
            </div>
            <div className={menu}>
              <ul>
                <li className={listItem}>
                  <Link to="/info" onClick={() => NProgress.start()}>
                    me
                  </Link>
                </li>
                <li className={listItem}>
                  <Link to="/post" onClick={() => NProgress.start()}>
                    post
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={naviItem}>
            <Toggle theme={theme} changeFunc={ThemeToggle} />
          </div>
        </div>
      </nav>
      <main className={mainContent}>{children}</main>
      <footer className={footer}>
        <div className={insideFooter}>copyright 2021-2022. Jeongki.dev</div>
      </footer>
    </div>
  );
}
