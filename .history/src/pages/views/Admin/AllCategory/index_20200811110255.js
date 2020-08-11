import React, {useState} from "react";
import { MDBDataTableV5 } from "mdbreact";
import { Link } from "react-router-dom";
import {Modal, Button} from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useForm } from "react-hook-form";
import MultiSelect from "react-multi-select-component";
const AllCategory = ({
  games,
  categories,
  deleteCategory,
  updateCategory,
  gamesByCategory,
}) => {
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const { register, handleSubmit, errors } = useForm();
  const [selected, setSelected] = useState([]);
  const options = games.map(game => {
    {
      label: game.name,
      
    }
  });
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
        <button
          className="btn btn-secondary"
          onClick={handleShowAdd}
        >
          <i className="fas fa-caret-down "></i>
        </button>
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

  const onSubmitAddHandle = (data) => {
    console.log(data);
    handleCloseAdd();

  };

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
              <button className="btn btn-primary"  onClick={handleShowAdd}>
                    Add new category
                  </button>
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
      <>
      <Modal
        show={showAdd}
        onHide={handleCloseAdd}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form        method="post"
                onSubmit={handleSubmit(onSubmitAddHandle)}>
          <div className="form-group row">
                    <i className="mdi mdi-24px mdi-gamepad-variant" />
                    <div className="col-md">
                      <input
                        ref={register({
                          required: true,
                          pattern: { value: /\w+/ },
                        })}
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="game's name"
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.name && <span>This field is required</span>}
                      </small>
                    </div>
                  </div>
              
          <div className="form-group row">
                    <i className="mdi mdi-24px mdi-script" />
                    <div className="col-md">
                      <textarea
                        className="form-control"
                        rows={10}
                        name="description"
                        placeholder="description"
                        ref={register({
                          required: true,
                          pattern: { value: /\w+/ },
                        })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.description && <span>This field is required</span>}
                      </small>
                    </div>
                  </div>
                  <Button variant="primary" type="submit">Create</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
    <>
      <Modal
        show={showUpdate}
        onHide={handleCloseUpdate}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  
      
  );
};

export default AllCategory;
