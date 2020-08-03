import React from "react";

const Boxes = (props) => {
  return (
    <div className="boxes">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="boxes_container d-flex flex-row align-items-start justify-content-between flex-wrap">
              {/* Box */}
              <div className="box">
                <div
                  className="background_image"
                  style={{ backgroundImage: "url(../../../../static/user/images/box_1.jpg)" }}
                />
                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                  <div className="box_left">
                    <div className="box_image">
                      <a href="category.html">
                        <div
                          className="background_image"
                          style={{
                            backgroundImage: "url(../../../../static/user/images/box_1_img.jpg)",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="box_right text-center">
                    <div className="box_title">Trendsetter Collection</div>
                  </div>
                </div>
              </div>
              {/* Box */}
              <div className="box">
                <div
                  className="background_image"
                  style={{ backgroundImage: "url(../../../../static/user/images/box_2.jpg)" }}
                />
                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                  <div className="box_left">
                    <div className="box_image">
                      <a href="category.html">
                        <div
                          className="background_image"
                          style={{
                            backgroundImage: "url(../../../../static/user/images/box_2_img.jpg)",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="box_right text-center">
                    <div className="box_title">Popular Choice</div>
                  </div>
                </div>
              </div>
              {/* Box */}
              <div className="box">
                <div
                  className="background_image"
                  style={{ backgroundImage: "url(../../../../static/user/images/box_3.jpg)" }}
                />
                <div className="box_content d-flex flex-row align-items-center justify-content-start">
                  <div className="box_left">
                    <div className="box_image">
                      <a href="category.html">
                        <div
                          className="background_image"
                          style={{
                            backgroundImage: "url(../../../../static/user/images/box_3_img.jpg)",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="box_right text-center">
                    <div className="box_title">Popular Choice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
