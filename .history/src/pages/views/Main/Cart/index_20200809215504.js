import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import {Link} from "react-router-dom";
const Cart = (props) => {


  return (
    <div className="product">
    <div className="container">
      <h1>Your cart</h1>
       <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    pagingTop
                    searchTop
                    searchBottom={false}
                  />
    </div> </div>
  );
};

export default Cart;
