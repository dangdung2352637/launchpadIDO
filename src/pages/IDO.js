import React, { useState } from "react";
import CountdownTimer from "../components/countdow";
import Button from "react-bootstrap/Button";
import "./IDO.scss";
import imgsocial1 from "../image/imgsocial1.png";
import baoidoo from "../image/baoidoo.png";
import PieChart from "../components/PieChart";

export const IDO = () => {
  return (
    <div className="ido-one">
      <div className="ido">
        <div className="ido-detal">
          <img src={baoidoo}></img>
          <div className="ido-img">
            <img className="crx" src={imgsocial1}></img>
            <h2>NEP</h2>
          </div>
          <h3 className="text">
            Leopad is a multichain venture DAO and IDO launchpad with the
            mission to incubate, fund, and launch the DeFi of tomorrow ,We offer
            our community attractive opportunities to get in early with
            well-vetted projects on our platform, and offer our partners a new
            way to grow their community footprints.
          </h3>
        </div>
        <div className="ido-page">
          <div className="time-end">
            <CountdownTimer />
          </div>
          <h6 className="your-nep">YOUR NEP :</h6>
          <div className="Sale-Type">
            <h6>Sale Type</h6>
            <h6>Public</h6>
          </div>
          <div className="Current-Rate">
            <h6>Current Rate</h6>
            <h6>1 ETH = 10.000.000 NEP</h6>
          </div>
          <div className="Current-Listing">
            <h6>Listing </h6>
            <h6>1 ETH = 2.800.000 NEP</h6>
          </div>
          <div className="Current-Raised">
            <h6>Current Raised</h6>
            <h6>10.00 ETH (100%)</h6>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="chart-tokendetail">
          <div className="token-detail">
            <div className="token-detail-1">
              <h6>Address</h6>
              <h6>287345923</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>Name</h6>
              <h6>Leopad Coin</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>Symbol</h6>
              <h6>NEP</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>Total Supply</h6>
              <h6>1.000.000.000</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>Start time</h6>
              <h6>2024.08.06 13:00 (UTC)</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>End time</h6>
              <h6>2024.08.08 19:00 (UTC)</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>Listing Time</h6>
              <h6>2024.08.10 19:00 (UTC)</h6>
            </div>
            <hr color="white"></hr>
            <div className="token-detail-1">
              <h6>TGE</h6>
              <h6>100%</h6>
            </div>
          </div>
        </div>

        <div className="chart-ido" style={{ width: "500px", height: "500px" }}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};
