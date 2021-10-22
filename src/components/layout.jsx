import React from 'react';
import { Link } from 'gatsby';
import { navigator, insideNav, logo, menu, listItem, naviItem, mainContent, footer, insideFooter } from './layout.module.css';
import Toggle from './toggle.jsx';

export default function Layout({ children }){
    React.useLayoutEffect(() => {
        const displayMode = localStorage.getItem('display_mode');
        if (displayMode === null){
            localStorage.setItem('display_mode', 'light');
        }
        document.documentElement.setAttribute('display-mode', localStorage.getItem('display_mode'));
    }, [])
    return (
        <div>
            <nav className={navigator}>
                <div className={insideNav}>
                    <div className={naviItem}>
                        <div className={logo} >
                            <Link to='/'>
                            Jeongki
                            <span style={{color:'mediumaquamarine'}}>.dev</span>
                            </Link>
                        </div>
                        <div className={menu}>
                            <ul>
                                <li className={listItem}>
                                    <Link to='/info'>
                                    me
                                    </Link>
                                </li>
                                <li className={listItem}>
                                    <Link to='/post'>
                                    post
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={naviItem}>
                            <Toggle/>
                    </div>
                </div>
            </nav>
            <main className={mainContent}>
                {children}
            </main>
            <footer className={footer}>
                <div className={insideFooter}>copyright 2021. Jeongki.dev</div>
            </footer>
        </div>
    )
}