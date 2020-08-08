import React, { useState, useEffect } from "react";

import "./App.css";
import Routers from "./routers";

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

import gameApi from "./api/gameApi";
import categoryApi from "./api/categoryApi";



function App() {
  const [getGames, setGames] = useState([]);
  const [getCategories, setCategories] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      /////////// Show
      try {
        //game
        const games = await (await gameApi.getAll()).data;
        setGames(games);
        //categories
        const cates = [];
        await (await categoryApi.getAll()).data.map((cate) => {
          cates.push({ label: cate.name + "🍇", value: cate.name, object:cate });
        });
        setCategories(cates);
      } catch (error) {}
    };
    getProducts();
  }, []);
  const onAddHandle = (game) => {
   if(gameApi.create(game)){
    setGames([...getGames, game]);
    store.addNotification({
      title: "Insert",
      message: "Insert successfully!!",
      type: "success",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
   }
  };
  const onDeleteHandle = (id) => {
    if(gameApi.remove(id)){
      setGames(getGames.filter((game) => game.id !== id));
    store.addNotification({
      title: "Delete",
      message: "Delete successfully!!",
      type: "danger",
      insert: "bottom",
      container: "bottom-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
    }
    
  };
  const [getGameUpdate,setGameUpdate] = useState([]);
const onGetGameByIdHandle = async (gameId) => {
  const game = await (await gameApi.getById(gameId)).data;
  setGameUpdate(game);
  setTimeout(1000);
  console.log(getGameUpdate)
}

  const onUpdateGameHandle = (game) => {
    const index = getGames.findIndex((game1) => game1.id === game.id);
    getGames[index] = game;
    if(gameApi.update(game.id, game)){
      setGames(getGames);
      store.addNotification({
        title: "Update",
        message: "Update successfully!!",
        type: "success",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  };
  return (
    <div className="App">
      <ReactNotification />
      <Routers
        games={getGames}
        categories={getCategories}
        onAddGameHandle={onAddHandle}
        onDeleteRowHandle={onDeleteHandle}
        getGameById={getGameUpdate}
        onUpdateGameHandle={onUpdateGameHandle}
        onGetGameByIdHandle={onGetGameByIdHandle}
      />
    </div>
  );
}
export default App;
