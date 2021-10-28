import React from 'react';
import {toggleContainer, circle} from './toggle.module.css';

export default function Toggle() {
    const [display, setDisplay] = React.useState(localStorage.getItem('display_mode') || 'light');
    
    const handleToggleButton = () => {
        if (typeof window !== undefined){
            const display_mode = localStorage.getItem('display_mode');
            if (display_mode === 'light'){
                localStorage.setItem('display_mode', 'dark');
                document.documentElement.setAttribute('display-mode', 'dark');
                setDisplay('dark');
            } else if (display_mode === 'dark'){
                localStorage.setItem('display_mode', 'light');
                document.documentElement.setAttribute('display-mode', 'light');
                setDisplay('light');
            }
        }
    }

    return (
        <div className={toggleContainer} onClick={handleToggleButton} style={display === 'light'?{backgroundColor:'mediumaquamarine'}:{backgroundColor:'#FFE699'}}>
            <div className={circle} style={display === 'light'?{transform:'translateX(0)'}:{transform:'translateX(50px)', backgroundColor:'#0A1931'}}>
                {display === 'light'?
                '☀️':'🌙'}
            </div>
        </div>
    )
}