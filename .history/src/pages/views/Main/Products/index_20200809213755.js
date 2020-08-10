import React from "react";
import { Link } from "react-router-dom";
const Products = (props) => {
  //Update handle
  const setGameDetail = (id) => {
    props.games
      .filter((game) => game.id === id)
      .map((filteredGame) => {
        props.detailGame(filteredGame);
      });
  };
  const addToCart = 

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section_title text-center">
              Popular on Little Closet
            </div>
          </div>
        </div>
        <div className="row page_nav_row">
          <div className="col">
            <div className="page_nav">
              <ul className="d-flex flex-row align-items-start justify-content-center">
                <li className="active">
                  <a href="category.html">Women</a>
                </li>
                <li>
                  <a href="category.html">Men</a>
                </li>
                <li>
                  <a href="category.html">Kids</a>
                </li>
                <li>
                  <a href="category.html">Home Deco</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row products_row">
          {/* Product */}
          {props.games.map((game, index) => (
            <div className="col-xl-4 col-md-6" key={index}>
              <div className="product">
                <div className="product_content">
                  <Link
                    to={"/detail?name=" + game.name}
                    onClick={() => setGameDetail(game.id)}
                  >
                    <div className="product_image">
                      <img
                        src={game.image}
                        height="180px"
                        width="auto"
                        alt=""
                      />
                    </div>
                  </Link>
                  <div className="product_info d-flex flex-row align-items-start justify-content-start">
                    <div>
                      <div>
                        <div className="product_name">
                          <Link
                            to={"/detail?name=" + game.name}
                            onClick={() => setGameDetail(game.id)}
                          >
                            {game.name}
                          </Link>
                        </div>
                        <div className="product_category">
                          In{" "}
                          {game.categories.map((category, cateIndex) => (
                            <a key={cateIndex}>{category.name},</a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="rating_r rating_r_4 home_item_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="product_price text-right">
                        {game.quantity === 0 ? "SOLD OUT" : "$" + game.price}
                      </div>
                          <small>{game.quantity} left</small>
                    </div>
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
                            <a href="#">
                              <img
                                src={`${process.env.PUBLIC_URL}/static/user/images/cart.svg`}
                                className="svg"
                                alt=""
                                onClick={addToCart}
                              /> 
                            </a>
                            <div>+</div>
                          </div>
                        </div>
                      </div>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row load_more_row">
          <div className="col">
            <div className="button load_more ml-auto mr-auto">
              <a href="#">load more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
