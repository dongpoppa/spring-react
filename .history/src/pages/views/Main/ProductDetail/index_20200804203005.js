import React from "react";

const ProductDetail = (props) => {
  return (
    <div className="product">
      <div className="container">
        <div className="row">
          {/* Product Image */}
          <div className="col-lg-6">
            <img
              src={`${process.env.PUBLIC_URL}/static/img/games/${}`}
              height="480px"
              width="auto"
              alt=""
            />
          </div>
          {/* Product Info */}
          <div className="col-lg-6 product_col">
            <div className="product_info">
              <div className="product_name">{props.detailGame.name}</div>
              <div className="product_category">
                In{" "}
                {props.detailGame.categories.map((category, cateIndex) => (
                  <a key={cateIndex}>{category.value},</a>
                ))}
              </div>
              <div className="product_rating_container d-flex flex-row align-items-center justify-content-start">
                <div className="rating_r rating_r_4 product_rating">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="product_reviews">4.7 out of (3514)</div>
                <div className="product_reviews_link">
                  <a href="#">Reviews</a>
                </div>
              </div>
              <div className="product_price">
                ${props.detailGame.price}
              </div>

              <div className="product_text">
                <p>Limited: {props.detailGame.minPlayer} - {props.detailGame.maxPlayer} Player</p>
                <p>Best: {props.detailGame.bestPlayerQuantity} Player</p>
                <p>Time to play: {props.detailGame.timeToPlayFrom} - {props.detailGame.timeToPlayTo} mins</p>
                <p>Age limited: {props.detailGame.ageLimited}+</p>
                <p>Publisher: {props.detailGame.publisher}</p>
                <p>Variable quantity: {props.detailGame.quantity} set</p>
                <p>Rules: {props.detailGame.rules}</p>
          </div>
              <div className="product_buttons">
                <div className="text-right d-flex flex-row align-items-start justify-content-start">
                  <div className="product_button product_fav text-center d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/static/user/images/heart_2.svg`}
                          className="svg"
                          alt=""
                        />
                        <div>+</div>
                      </div>
                    </div>
                  </div>
                  <div className="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center">
                    <div>
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/static/user/images/cart.svg`}
                          className="svg"
                          alt=""
                        />
                        <div>+</div>
                      </div>
                    </div>
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

export default ProductDetail;
