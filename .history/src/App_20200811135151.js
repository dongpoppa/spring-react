import React, { useState, useEffect } from "react";

import "./App.css";
import Routers from "./routers";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

import gameApi from "./api/gameApi";
import categoryApi from "./api/categoryApi";

function App() {
  const [getGames, setGames] = useState([]);
  const [getRemovedGames, setRemovedGames] = useState([]);
  const [getCategories, setCategories] = useState([]);
  const [getCartList, setCartList] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      /////////// Show
      try {
        //game
        const games = await (await gameApi.getAll()).data;
        setGames(games);
        //removed game
        const removedGames = await (await gameApi.getAllRemove()).data;
        setRemovedGames(removedGames);
        //categories
        const cates = [];
        await (await categoryApi.getAll()).data.map((cate) => {
          cates.push({
            label: cate.name + "🍇",
            value: cate.name,
            object: cate,
          });
        });
        setCategories(cates);
      } catch (error) {}
    };
    getProducts();
  }, []);
  const onAddHandle = (game) => {
    if (gameApi.create(game)) {
      setGames([...getGames, game]);
      notification("Insert", "Insert successfully!!", "success");
    } else {
      notification("Insert", "Insert Failed!!", "danger");
    }
  };
const onSaveOrUpdateCateHandle = (category) => {
    if (categoryApi.saveOrUpdate(category)) {
      if(cate)
      notification("Insert", "Insert successfully!!", "success");
    } else {
      notification("Insert", "Insert Failed!!", "danger");
    }
  };
  const onDeleteHandle = (id) => {
    if (gameApi.remove(id)) {
      setGames(getGames.filter((game) => game.id !== id));
      setRemovedGames([
        getGames.filter((game) => game.id === id)[0],
        ...getRemovedGames,
      ]);
    
      notification("Delete", "Delete successfully!!", "warning");
    } else {
      notification("Delete", "Delete Failed!!", "danger");
    }
  };
  const onDeleteCategoryHandle = (id) => {
    if (categoryApi.remove(id)) {
      setCategories(getCategories.filter((category) => category.object.id !== id));
      notification("Delete", "Delete successfully!!", "warning");
    } else {
      notification("Delete", "Delete Failed!!", "danger");
    }
  };
  const onRestoreRowHandle = (id) => {
    if (gameApi.restore(id)) {
      setRemovedGames(getRemovedGames.filter((game) => game.id !== id));
      setGames([
        getRemovedGames.filter((game) => game.id === id)[0],
        ...getGames,
      ]);
      notification("Restore", "Restore successfully!!", "success");
    } else {
      notification("Restore", "Restore Failed!!", "danger");
    }
  };
  const onUpdateGameHandle = (game) => {
    const index = getGames.findIndex((game1) => game1.id === game.id);
    getGames[index] = game;
    if (gameApi.update(game.id, game)) {
      setGames(getGames);
      notification("Update", "Update successfully!!", "success");
    } else {
      notification("Update", "Update Failed!!", "danger");
    }
  };
  const [getGamesByCategory, setGamesByCategory] = useState([]);
  const onGetGamesByCategory = async (id) => {
    const games = await  (await gameApi.getAllByCategory(id)).data;
    setGamesByCategory(games);
  }
  const notification = (title, message, type) => {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };
  return (
    <div className="App">
      <ReactNotification />
      <Routers
        games={getGames}
        removedGames={getRemovedGames}
        categories={getCategories}
        cartList={getCartList}
        gamesByCategory={getGamesByCategory}
        onAddGameHandle={onAddHandle}
        onDeleteRowHandle={onDeleteHandle}
        onUpdateGameHandle={onUpdateGameHandle}
        onRestoreRowHandle={onRestoreRowHandle}
        onGetGamesByCategory={onGetGamesByCategory}
        onDeleteCategoryHandle={onDeleteCategoryHandle}
        onSaveOrUpdateCateHandle={onSaveOrUpdateCateHandle}
      />
    </div>
  );
}
export default App;
