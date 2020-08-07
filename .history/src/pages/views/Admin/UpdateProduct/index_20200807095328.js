import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import { useForm } from "react-hook-form";
import { storage } from "./../../../../firebase";

const UpdateProduct = (props) => {
  const options = props.categories;
  const cates = [];
  props.gameUpdate.categories.map((cate) => {
    cates.push({ label: cate.name + "🍇", value: cate.name, object: cate });
  });
  const [selected, setSelected] = useState(cates);
  const { register, handleSubmit, errors } = useForm();
  const [getImageUrl, setImageUrl] = useState(props.gameUpdate.image);
  const [getImage, setImage] = useState(null);

  const onSubmitHandle = (data) => {

    const uploadTask = storage
      .ref(`games_image/${getImage.name}`)
      .put(getImage)
      .then(() => {
        uploadTask.getDownloadURL().then((url) => {
          setImageUrl()
        })
      })
  
      const defaultValue = {
        id: props.gameUpdate.id,
        categories: selected.map((item) => item.object),
        image: getImageUrl === null ? props.gameUpdate.image : getImageUrl,
      };
      const newGame = Object.assign(data, defaultValue);
      props.onUpdateGame(newGame);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className="page-breadcrumb">
        <div className="row">
          <div className="col-12 d-flex no-block align-items-center">
            <h3 className="page-title">Update game</h3>
            <div className="ml-auto text-right">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Library
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-7">
            <div className="card">
              <form
                className="form-horizontal"
                encType="multipart/form-data"
                method="post"
                onSubmit={handleSubmit(onSubmitHandle)}
              >
                <div className="card-body">
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
                        defaultValue={props.gameUpdate.name}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.name && <span>This field is required</span>}
                      </small>
                    </div>

                    <i className="mdi mdi-24px mdi-garage" />
                    <div className="col-md">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Publisher"
                        name="publisher"
                        defaultValue={props.gameUpdate.publisher}
                        ref={register({
                          required: true,
                          pattern: { value: /\w+/ },
                        })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.publisher && (
                          <span>This field is required</span>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-account-switch" />
                    <div className="col-md">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="min"
                        name="minPlayer"
                        defaultValue={props.gameUpdate.minPlayer}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.minPlayer &&
                          errors.minPlayer.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.minPlayer &&
                          errors.minPlayer.type === "min" && <span>Min 0</span>}
                        {errors.minPlayer &&
                          errors.minPlayer.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Player
                    </b>
                    <i
                      className="mdi mdi-24px mdi-chevron-right"
                      style={{ color: "darkgrey" }}
                    />
                     
                    <div className="col-md">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="max"
                        name="maxPlayer"
                        defaultValue={props.gameUpdate.maxPlayer}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.maxPlayer &&
                          errors.maxPlayer.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.maxPlayer &&
                          errors.maxPlayer.type === "min" && <span>Min 0</span>}
                        {errors.maxPlayer &&
                          errors.maxPlayer.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Player
                    </b>{" "}
                    &ensp;&ensp;&ensp;&ensp;&ensp;
                    <i className="mdi mdi-24px mdi-account-star" />
                    <div className="col-md">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="best quantity"
                        name="bestPlayerQuantity"
                        defaultValue={props.gameUpdate.bestPlayerQuantity}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.bestPlayerQuantity &&
                          errors.bestPlayerQuantity.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.bestPlayerQuantity &&
                          errors.bestPlayerQuantity.type === "min" && (
                            <span>Min 0</span>
                          )}
                        {errors.bestPlayerQuantity &&
                          errors.bestPlayerQuantity.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Player
                    </b>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-timer-sand" />
                    <div className="col-md">
                      <input
                        className="form-control"
                        placeholder="from"
                        type="number"
                        name="timeToPlayFrom"
                        defaultValue={props.gameUpdate.timeToPlayFrom}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.timeToPlayFrom &&
                          errors.timeToPlayFrom.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.timeToPlayFrom &&
                          errors.timeToPlayFrom.type === "min" && (
                            <span>Min 0</span>
                          )}
                        {errors.timeToPlayFrom &&
                          errors.timeToPlayFrom.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Mins&nbsp;&nbsp;
                    </b>
                    <i
                      className="mdi mdi-24px mdi-chevron-right"
                      style={{ color: "darkgrey" }}
                    />
                     
                    <div className="col-md">
                      <input
                        className="form-control"
                        type="number"
                        name="timeToPlayTo"
                        placeholder="to"
                        defaultValue={props.gameUpdate.timeToPlayTo}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.timeToPlayTo &&
                          errors.timeToPlayTo.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.timeToPlayTo &&
                          errors.timeToPlayTo.type === "min" && (
                            <span>Min 0</span>
                          )}
                        {errors.timeToPlayTo &&
                          errors.timeToPlayTo.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Mins
                    </b>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                    <i className="mdi mdi-24px mdi-baby" />
                    <div className="col-md">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="age limited"
                        name="ageLimited"
                        defaultValue={props.gameUpdate.ageLimited}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.ageLimited &&
                          errors.ageLimited.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.ageLimited &&
                          errors.ageLimited.type === "min" && (
                            <span>Min 0</span>
                          )}
                        {errors.ageLimited &&
                          errors.ageLimited.type === "step" && (
                            <span>Can not be decimal</span>
                          )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      Above
                    </b>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-tag-multiple" />
                    <div className="col-md">
                      <MultiSelect
                        className="select2 form-control m-t-15"
                        options={options}
                        value={selected}
                        onChange={setSelected}
                        labelledBy={"Select"}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-script" />
                    <div className="col-md">
                      <textarea
                        className="form-control"
                        rows={10}
                        name="rules"
                        placeholder="rules"
                        defaultValue={props.gameUpdate.rules}
                        ref={register({
                          required: true,
                          pattern: { value: /\w+/ },
                        })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.rules && <span>This field is required</span>}
                      </small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-buffer" />
                    <div className="col-sm">
                      <input
                        className="form-control"
                        type="number"
                        name="quantity"
                        placeholder="quantity"
                        defaultValue={props.gameUpdate.quantity}
                        ref={register({ required: true, min: 0, step: 1 })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.quantity &&
                          errors.quantity.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.quantity && errors.quantity.type === "min" && (
                          <span>Min 0</span>
                        )}
                        {errors.quantity && errors.quantity.type === "step" && (
                          <span>Can not be decimal</span>
                        )}
                      </small>
                    </div>
                    <i className="mdi mdi-24px mdi-cash-multiple" />
                    <div className="col-sm">
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        placeholder="price"
                        defaultValue={props.gameUpdate.price}
                        ref={register({ required: true, min: 0, step: "any" })}
                      />
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.quantity &&
                          errors.quantity.type === "required" && (
                            <span>This field is required</span>
                          )}
                        {errors.quantity && errors.quantity.type === "min" && (
                          <span>Min 0</span>
                        )}
                      </small>
                    </div>
                    <b
                      className="d-flex align-items-center"
                      style={{ color: "darkgrey" }}
                    >
                      $
                    </b>
                  </div>
                  <div className="form-group row">
                    <i className="mdi mdi-24px mdi-image" />
                    <div className="col-md">
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          name="img"
                          accept="image/*"
                          onChange={handleChange}
                          ref={register({ required: true })}
                        />
                        <label className="custom-file-label">
                          {getImage === null ? "Choose file..." : getImage.name}
                        </label>
                      </div>
                      <small id="nameHelp" className="form-text text-danger">
                        {errors.img && errors.img.type === "required" && (
                          <span>This field is required</span>
                        )}
                      </small>
                    </div>
                  </div>
                  <div className="border-top">
                    <div className="card-body d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary ">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
