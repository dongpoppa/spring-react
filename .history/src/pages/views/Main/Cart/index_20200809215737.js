import React from "react";
const Cart = (props) => {


  return (
    <div className="product">
    <div className="container">
      <h1>Your cart</h1>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {props.games.map((game,index) => {

    })}
  </tbody>
</table>
    </div> </div>
  );
};

export default Cart;
