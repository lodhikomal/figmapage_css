import React from "react";
import "../style/pricingStyle.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-list">
        <div>
          <h3 className="pricing-heading"> A Price To Suit Everyone</h3>
          <p className="pricing-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <h2 className="pricing-heading2">$40</h2>
          <p className="pricing-para2">UI Design Kit</p>
        </div>
        <div className="pricing-list3">
          <p className="para-text">See One Price Simple</p>
          <button className="pricing-button">Purchase Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
