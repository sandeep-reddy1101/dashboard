import React, { useEffect, useState } from "react";
import "./dashboard.css";

import Sidebar from "../../components/sidebar/Sidebar";

import ThemeToggle from "../../components/theme-toggle/Theme-toggle";
import SidebarToggle from "../../components/sidebar-toggle/Sidebar-toggle";

import { Outlet } from "react-router-dom";

function Dashboard() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSidebarToggleButton, setShowSidebarToggleButton] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const dashboardContainerClass = darkMode
    ? "dashboard-container dark-theme-dashboard"
    : "dashboard-container light-theme-dashboard";

  const dashboadLeftSideContainer = showSidebar
    ? "dashboard-left-side-container"
    : "dashboard-left-side-container display-sidebar";

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Hide the sidebar if the screen width is below a certain threshold
    if (screenWidth < 768) {
      setShowSidebar(false);
      setShowSidebarToggleButton(true);
    } else {
      setShowSidebar(true);
      setShowSidebarToggleButton(false);
    }
  }, [screenWidth]);

  return (
    <div className={dashboardContainerClass}>
      <div className={dashboadLeftSideContainer}>
        <Sidebar />
      </div>
      <div className="dashboard-right-side-container">
        <div className="dashboard-header-nav">
          <div>
            <SidebarToggle
              showSidebarToggleButton={showSidebarToggleButton}
              showSidebar={showSidebar}
              toggleSidebar={toggleSidebar}
            />
          </div>

          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
