import React from 'react'

const Cart = props => {
    return (
        <div>
            <div>
  {/*================Home Banner Area =================*/}
  {/* breadcrumb start*/}
  <section className="breadcrumb breadcrumb_bg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="breadcrumb_iner">
            <div className="breadcrumb_iner_item">
              <h2>Cart Products</h2>
              <p>Home <span>-</span>Cart Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* breadcrumb start*/}
  {/*================Cart Area =================*/}
  <section className="cart_area padding_top">
    <div className="container">
      <div className="cart_inner">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/single-product/cart-1.jpg" alt="" />
                    </div>
                    <div className="media-body">
                      <p>Minimalistic shop for multipurpose use</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>$360.00</h5>
                </td>
                <td>
                  <div className="product_count">
                    <span className="input-number-decrement"> <i className="ti-angle-down" /></span>
                    <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                    <span className="input-number-increment"> <i className="ti-angle-up" /></span>
                  </div>
                </td>
                <td>
                  <h5>$720.00</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/single-product/cart-1.jpg" alt="" />
                    </div>
                    <div className="media-body">
                      <p>Minimalistic shop for multipurpose use</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>$360.00</h5>
                </td>
                <td>
                  <div className="product_count">
                    {/* <input type="text" value="1" min="0" max="10" title="Quantity:"
                class="input-text qty input-number" />
              <button
                class="increase input-number-increment items-count" type="button">
                <i class="ti-angle-up"></i>
              </button>
              <button
                class="reduced input-number-decrement items-count" type="button">
                <i class="ti-angle-down"></i>
              </button> */}
                    <span className="input-number-decrement"> <i className="ti-angle-down" /></span>
                    <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                    <span className="input-number-increment"> <i className="ti-angle-up" /></span>
                  </div>
                </td>
                <td>
                  <h5>$720.00</h5>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="media">
                    <div className="d-flex">
                      <img src="img/product/single-product/cart-1.jpg" alt="" />
                    </div>
                    <div className="media-body">
                      <p>Minimalistic shop for multipurpose use</p>
                    </div>
                  </div>
                </td>
                <td>
                  <h5>$360.00</h5>
                </td>
                <td>
                  <div className="product_count">
                    <span className="input-number-decrement"> <i className="ti-angle-down" /></span>
                    <input className="input-number" type="text" defaultValue={1} min={0} max={10} />
                    <span className="input-number-increment"> <i className="ti-angle-up" /></span>
                  </div>
                </td>
                <td>
                  <h5>$720.00</h5>
                </td>
              </tr>
              <tr className="bottom_button">
                <td>
                  <a className="btn_1" href="#">Update Cart</a>
                </td>
                <td />
                <td />
                <td>
                  <div className="cupon_text float-right">
                    <a className="btn_1" href="#">Close Coupon</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td />
                <td />
                <td>
                  <h5>Subtotal</h5>
                </td>
                <td>
                  <h5>$2160.00</h5>
                </td>
              </tr>
              <tr className="shipping_area">
                <td />
                <td />
                <td>
                  <h5>Shipping</h5>
                </td>
                <td>
                  <div className="shipping_box">
                    <ul className="list">
                      <li>
                        <a href="#">Flat Rate: $5.00</a>
                      </li>
                      <li>
                        <a href="#">Free Shipping</a>
                      </li>
                      <li>
                        <a href="#">Flat Rate: $10.00</a>
                      </li>
                      <li className="active">
                        <a href="#">Local Delivery: $2.00</a>
                      </li>
                    </ul>
                    <h6>
                      Calculate Shipping
                      <i className="fa fa-caret-down" aria-hidden="true" />
                    </h6>
                    <select className="shipping_select">
                      <option value={1}>Bangladesh</option>
                      <option value={2}>India</option>
                      <option value={4}>Pakistan</option>
                    </select>
                    <select className="shipping_select section_bg">
                      <option value={1}>Select a State</option>
                      <option value={2}>Select a State</option>
                      <option value={4}>Select a State</option>
                    </select>
                    <input type="text" placeholder="Postcode/Zipcode" />
                    <a className="btn_1" href="#">Update Details</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="checkout_btn_inner float-right">
            <a className="btn_1" href="#">Continue Shopping</a>
            <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
          </div>
        </div>
      </div>
    </div></section>
  {/*================End Cart Area =================*/}
</div>

        </div>
    )
}

export default Cart
