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
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td><img src={game.image} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/></td>
    <td>{game.name}</td>
    <td>{game.quantity}</td>
    <td>{game.price}</td>
      <td><button></button></td>
    </tr>
    })}
  </tbody>
</table>
    </div> </div>
  );
};

export default Cart;
