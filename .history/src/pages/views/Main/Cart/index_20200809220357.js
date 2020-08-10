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
            {props.games.map((game, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>
                  <img src={game.image}   height="80px"
                        width="auto"  alt="" />
                </td>
                <td>{game.name}</td>
                <td><input name="" id="" class="btn btn-primary" type="button" value="" defaultValue></td>
                <td>{game.price}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default Cart;
