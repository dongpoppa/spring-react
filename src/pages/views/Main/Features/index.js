import React from "react";

const Features = (props) => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          {/* Feature */}
          <div className="col-lg-4 feature_col">
            <div className="feature d-flex flex-row align-items-start justify-content-start">
              <div className="feature_left">
                <div className="feature_icon">
                  <img src={require('./../../../../static/user/images/icon_1.svg')} alt="" />
                </div>
              </div>
              <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                <div className="feature_title">Fast Secure Payments</div>
              </div>
            </div>
          </div>
          {/* Feature */}
          <div className="col-lg-4 feature_col">
            <div className="feature d-flex flex-row align-items-start justify-content-start">
              <div className="feature_left">
                <div className="feature_icon ml-auto mr-auto">
                  <img src={require('./../../../../static/user/images/icon_2.svg')} alt="" />
                </div>
              </div>
              <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                <div className="feature_title">Premium Products</div>
              </div>
            </div>
          </div>
          {/* Feature */}
          <div className="col-lg-4 feature_col">
            <div className="feature d-flex flex-row align-items-start justify-content-start">
              <div className="feature_left">
                <div className="feature_icon">
                  <img src={require('./../../../../static/user/images/icon_3.svg')} alt="" />
                </div>
              </div>
              <div className="feature_right d-flex flex-column align-items-start justify-content-center">
                <div className="feature_title">Free Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
