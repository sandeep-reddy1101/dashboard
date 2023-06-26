import React from "react";
import "./dashboard-home.css";

function DashboardHome() {
  return (
    <>
    <div className="row row-one-tiles">
      <div className="col-xs-12 col-lg-4 mb-2">
        <div className="row-one-tile-one"></div>
      </div>
      <div className="col-xs-12 col-lg-4 mb-2">
        <div className="row-one-tile-two"></div>
      </div>
      <div className="col-xs-12 col-lg-4 mb-2">
        <div className="row-one-tile-three"></div>
      </div>
    </div>
    <div className="row row-two-tiles">
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
      <div className="col-xs-6 col-sm-4 col-lg-2 mb-2">
        <div className="row-two-tile-item"></div>
      </div>
    </div>
    <div className="row row-three-tiles">
      <div className="col-xs-12 col-lg-6 mb-2">
        <div className="row-three-tile-one"></div>
      </div>
      <div className="col-xs-12 col-lg-6 mb-2">
        <div className="row-three-tile-two"></div>
      </div>
    </div>
    </>
  );
}

export default DashboardHome;
