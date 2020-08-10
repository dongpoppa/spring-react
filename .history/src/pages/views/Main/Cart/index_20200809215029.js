import React from "react";
import { MDBDataTableV5 } from "mdbreact";

const Cart = (props) => {

   //datatable
   const datatable = {
    columns: [
      {
        label: "#",
        field: "index",
        sort: "able",
      },
      {
        label: "Image",
        field: "image",
      },
      {
        label: "Name",
        field: "name",
        sort: "able",
      },
      {
        label: "Price",
        field: "price",
        sort: "able",
      },
      {
        label: "Quantity",
        field: "quantity",
        sort: "able",
      },
      {
        label: "",
        field: "detail_update",
      },
      {
        label: "",
        field: "delete",
      },
    ],
    rows: games.map((game, index) => ({
      index: <span key={index}>{++index}</span>,
      image: <img src={game.image} width="auto" height="100px" />,
      name: game.name,
      price: game.price + " $",
      quantity: game.quantity + " set",
      detail_update: (
        <Link
          className="btn btn-secondary"
          to={"/admin/update?name=" + game.name}
          onClick={() => setGameUpdate(game.id)}
        >
          <i className="fas fa-caret-down "></i>
        </Link>
      ),
      delete: (
        <div>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteHandle(game.id, game.name)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ),
    })),
  };
  
  return (
    <div>
     
    </div>
  );
};

export default Cart;
