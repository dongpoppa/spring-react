import React, { useState, useEffect } from "react";
import "./App.css";
import Routers from "./routers";
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
          cates.push({ label: cate.name + "🍇", value: cate.name });
        });
        setCategories(cates);
      } catch (error) {}
    };
    getProducts();
  }, []);
  const onAddHandle = (game) => {
    setGames([...getGames, game]);
    alert("Add game successfully!");
  };
  const onDeleteHandle = (id) => {
    gameApi.update(game.id,game);
    setGames(getGames.filter((game) => game.id !== id));
  };
  const onUpdateGameHandle = (game) => {
    const index = getGames.findIndex((game1) => game1.id === game.id);
    getGames[index] = game;
    gameApi.update(game.id,game);
    setGames(getGames);
  };
  return (
    <div className="App">
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
