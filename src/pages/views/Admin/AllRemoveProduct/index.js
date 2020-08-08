import React from "react";
import { MDBDataTableV5 } from "mdbreact";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const AllRemovedProduct = ({ games, restoreRow }) => {
  const restoreHandle = (id, name) => {
    confirmAlert({
      title: "Restore " + name,
      message: "Are you really want to restore " + name,
      buttons: [
        {
          label: "Yes",
          onClick: () => restoreRow(id),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypressEscape: () => {},
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
        field: "restore",
      },
    ],
    rows: games.map((game, index) => ({
      index: <span key={index}>{++index}</span>,
      image: <img src={game.image} width="auto" height="100px" />,
      name: game.name,
      price: game.price + " $",
      quantity: game.quantity + " set",
      restore: (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => restoreHandle(game.id, game.name)}
          >
            <i className="fa fa-refresh"></i>
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
            <h4 className="page-title">All deleted game</h4>
            <div className="ml-auto text-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All deleted game
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
                    entries={5}
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

export default AllRemovedProduct;
