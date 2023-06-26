import React from "react";
import "./sidebar-toggle.css";

import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

function SidebarToggle({
  showSidebar,
  showSidebarToggleButton,
  toggleSidebar,
}) {
  return (
    <div
      className={
        showSidebarToggleButton
          ? "sidebar-buttons"
          : "sidebar-buttons display-sidebar-buttons"
      }
      onClick={toggleSidebar}
    >
      <div className={showSidebar ? "display-sidebar-button-icon" : ""}>
        <DehazeOutlinedIcon />
      </div>
      <div className={showSidebar ? "sidebar-cross-button" : "display-sidebar-button-icon"}>
        <CloseOutlinedIcon />
      </div>
    </div>
  );
}

export default SidebarToggle;
