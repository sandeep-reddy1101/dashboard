import React from "react";
import "./sidebar.css";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
    const userProfileImage = "http://localhost:3000/images/user-profile.avif";
  return (
    <div className="sidebar-container">
      <div>
      <div className="sidebar-header">
        <div className="sidebar-header-logo">Wallet</div>
        <div className="sidebar-header-user">
          <img
            src={userProfileImage}
            alt="user"
            className="sidebar-header-user-image"
          />
          <p className="sidebar-header-user-name">Sandeep</p>
          <p className="sidebar-header-user-profession">Full Stack developer</p>
        </div>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-content-items">
          <Link className="sidebar-content-menu-item" to={'/dashboard'}>
            {" "}
            <span className="sidebar-content-icon">
              <AccountCircleOutlinedIcon />
            </span>
            <span className="sidebar-content-menu-item-text">Dashboard</span>
          </Link>
          <Link className="sidebar-content-menu-item" to={'/dashboard/profile'}>
            {" "}
            <span className="sidebar-content-icon">
              <AccountBalanceWalletOutlinedIcon />
            </span>
            <span className="sidebar-content-menu-item-text">My Wallet</span>
          </Link>
          <Link className="sidebar-content-menu-item" to={'/dashboard/profile'}>
            {" "}
            <span className="sidebar-content-icon">
              <ReceiptOutlinedIcon />
            </span>
            <span className='sidebar-content-menu-item-text'>Transactions</span>
          </Link>
          <Link className="sidebar-content-menu-item" to={'/dashboard/profile'}>
            {" "}
            <span className="sidebar-content-icon" >
              <CurrencyBitcoinOutlinedIcon />
            </span>
            <span className='sidebar-content-menu-item-text'>Crypto</span>
          </Link>
          <Link className="sidebar-content-menu-item" to={'/dashboard/profile'}>
            {" "}
            <span className="sidebar-content-icon">
              <CurrencyExchangeOutlinedIcon />
            </span>
            <span className='sidebar-content-menu-item-text'>Exchange</span>
          </Link>
          <Link className="sidebar-content-menu-item" to={'/dashboard/settings'}>
            {" "}
            <span className="sidebar-content-icon">
              <SettingsOutlinedIcon />
            </span>
            <span className='sidebar-content-menu-item-text'>Settings</span>
          </Link>
        </div>
      </div>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-footer-content">Footer</div>
      </div>
    </div>
  );
}

export default Sidebar;
