import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import {Modal} from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const AllCategory = ({
  categories,
  deleteCategory,
  updateCategory,
  gamesByCategory,
}) => {
  //Delete handle
  const onDeleteHandle = (id, name) => {
    confirmAlert({
      title: "Delete " + name,
      message: "Are you really want to delete " + name +"? If you delete this category, this category will be remove from games. Can not rollback. Do you want to continues?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteCategory(id),
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

  //Update handle
  const setGameUpdate = (id) => {
    categories
      .filter((category) => category.object.id === id)
      .map((filteredCategory) => {
        updateCategory(filteredCategory);
      });
  };

  const setGamesByCategory = (id) => {
    gamesByCategory(id);
  }
  //datatable
  const datatable = {
    columns: [
      {
        label: "#",
        field: "index",
        sort: "able",
      },
      {
        label: "Name",
        field: "name",
        sort: "able",
      },
      {
        label: "Description",
        field: "description",
        sort: "able",
      },
      {
        label: "Games quantity",
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
    rows: categories.map((category, index) => ({
      index: <span key={index}>{++index}</span>,
      name: category.object.name,
      description: category.object.description,
      quantity: (
        <Link
          to={"/admin/games-by-category?name=" + category.object.name}
          onClick={() => setGamesByCategory(category.object.id)
          }
        >
          {category.object.games.length} games
        </Link>
      ),
      detail_update: (
        <Link
          className="btn btn-secondary"
          to={"/admin/update?name=" + category.object.name}
          onClick={() => setGameUpdate(category.object.id)}
        >
          <i className="fas fa-caret-down "></i>
        </Link>
      ),
      delete: (
        <div>
          <button
            className="btn btn-danger"
            onClick={() =>
              onDeleteHandle(category.object.id, category.object.name)
            }
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      ),
    })),
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h4 className="page-title">All category</h4>
            <div className="ml-auto text-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    All category
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
            <div className="card-header">
              <Link className="btn btn-primary" to={"/admin/category/insert"}>
                    Add new category
                  </Link>
              </div>
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

export default AllCategory;
