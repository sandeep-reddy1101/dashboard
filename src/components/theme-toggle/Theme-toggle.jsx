import React from 'react';
import "./theme-toggle.css";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';

function ThemeToggle({darkMode, toggleTheme}) {
  return (
    <div onClick={toggleTheme} className="theme-icons">
            <div className={darkMode ? "" : "display-theme-button-icon"}>
              <WbIncandescentIcon style={{color : "yellow"}}/>
            </div>
            <div className={darkMode ? "display-theme-button-icon" : ""}>
              <DarkModeIcon style={{color : "black"}}/>
            </div>
          </div>
  )
}

export default ThemeToggle