import React from "react";
import { ProvideFirebase } from "./firebase/useFirebase";
import { Router } from "@reach/router";
import MainPage from "./posts/MainPage";
import HomePage from "./posts/HomePage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "./App.css";
import "antd/dist/antd.css";
import PasswordChange from "./auth/PasswordChange";
import UpdatePasswpord from "./auth/UpdatePassword";
import CreateCard from "./auth/CreateCard";
import Context from "./firebase/Context";



function App() {
  const [cards, setCards] = React.useState([])

  const addNewCard = (card) => {
    setCards(cards.concat(card));
    console.log(cards)
  };

  const contextValue = { cards, addNewCard };

  
  return (
    <ProvideFirebase>
      <Context.Provider value = {contextValue}>
      <Router>
      <HomePage path = "/ss"/>
      <MainPage path="/" />
      <CreateCard path = "/createCard"/>
        <Login path="/login" />
        <Register path="/register" />
        <PasswordChange path="/passwordchange" />
        <UpdatePasswpord path = "/updatepassword"/>
      </Router>
      </Context.Provider>
    </ProvideFirebase>
  );
}

export default App;
