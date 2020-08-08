import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LayoutMain from "../pages/layouts/LayoutMain";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
//Admin
import Dashboard from "../pages/views/Admin/Dashboard";
import InsertProduct from "../pages/views/Admin/InsertProduct";
import AllProduct from "../pages/views/Admin/AllProduct";
import UpdateProduct from "../pages/views/Admin/UpdateProduct";

//view
import Home from "../pages/views/Main/Home";
import Products from "../pages/views/Main/Products";
import Boxes from "../pages/views/Main/Boxes";
import Features from "../pages/views/Main/Features";
import ProductDetail from "../pages/views/Main/ProductDetail";


const Routers = ({
  games,
  removedGames,
  categories,
  onDeleteRowHandle,
  onAddGameHandle, 
  onUpdateGameHandle,

}) => {
  const onAddHandle = (game) => {
    onAddGameHandle(game);
  };
  const deleteRowHandle = (id) => {
    onDeleteRowHandle(id);
  };

  const [getUpdateGame, setUpdateGame] = useState();
  const updateGame = (game) => {
    setUpdateGame(game);
  };
  const onUpdateGame = (game) => {
    onUpdateGameHandle(game);
  };

  const [getDetailGame, setDetailGame] = useState();
  const detailGame = (game) => {
    setDetailGame(game);
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/admin"></Redirect>
        </Route>
        <Route path="/admin/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard />
              </Route>
              <Route path="/admin/insert">
                <InsertProduct
                  games={games}
                  onAdd={onAddHandle}
                  categories={categories}
                />
              </Route>
              <Route path="/admin/allgame">
                <AllProduct
                  games={games}
                  deleteRow={deleteRowHandle}
                  updateGame={updateGame}
                />
              </Route>
              <Route path="/admin/update">
                <UpdateProduct
                  games={games}
                  categories={categories}
                  gameUpdate={getUpdateGame}
                  onUpdateGame={onUpdateGame}
                />
              </Route>
            </Switch>
          </LayoutAdmin>
        </Route>
        <Route>
          <LayoutMain>
            <Switch>
              <Route path="/home" exact>
                {/* <Home /> */}
                <Products games={games} detailGame={detailGame}/>
                <Boxes />
                <Features />
              </Route>
              <Route path="/detail" exact>
                <ProductDetail detailGame={getDetailGame}/>
              </Route>
            </Switch>
          </LayoutMain>
        </Route>
      </Switch>
    </Router>
  );
};

Routers.propTypes = {};

export default Routers;
