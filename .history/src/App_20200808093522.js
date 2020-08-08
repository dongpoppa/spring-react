import React, { useState, useEffect } from "react";
import "./App.css";
import Routers from "./routers";
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
// import DataFake from "./dataFake";
// import categories from "./categoriesFake";
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
    setGames([...getGames, game]);
    gameApi.create(game);
    store.addNotification({
      title: "Wonderful!",
      message: "Insert cusscessfully!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  };
  const onDeleteHandle = (id) => {
    gameApi.remove(id);
    setGames(getGames.filter((game) => game.id !== id));
  };
  const onUpdateGameHandle = (game) => {
    const index = getGames.findIndex((game1) => game1.id === game.id);
    getGames[index] = game;
    gameApi.update(game.id, game);
    setGames(getGames);
  };
  return (
    <div className="App">
      <ReactNotification />
      <Routers
        games={getGames}
        categories={getCategories}
        onAddGameHandle={onAddHandle}
        onDeleteRowHandle={onDeleteHandle}
        onUpdateGameHandle={onUpdateGameHandle}
      />
    </div>
  );
}
export default App;