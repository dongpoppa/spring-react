import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useHistory } from 'react-router-dom';

  let history = useHistory();
const AllProduct = ({ games, deleteRow, updateGame }) => {
  //Delete handle
  const onDeleteHandle = (id, name) => {
    confirmAlert({
      title: 'Delete '+ name,
      message: 'Are you really want to delete ' + name,
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteRow(id)
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypressEscape: () => {}
    });
  };

  //Update handle
  const setGameUpdate = (id) => {
    games.filter(game => game.id === id).map(filteredGame => {
      updateGame(filteredGame);
    });
  };

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
        image: (
          <img
            src={game.image}
            width="auto"
            height="100px"
          />
        ),
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
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h4 className="page-title">All game</h4>
            <div className="ml-auto text-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All game
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={25}
                    pagesAmount={4}
                    data={datatable}
                    pagingTop
                    searchTop
                    searchBottom={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
