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
import SearchPage from "./auth/SearchPage";




function App() {

  
  return (
    <ProvideFirebase>
      <Router>
      <HomePage path = "/s"/>
      <MainPage path="/" />
      <SearchPage path = "/sss"/>
      <CreateCard path = "/createCard"/>
        <Login path="/login" />
        <Register path="/register" />
        <PasswordChange path="/passwordchange" />
        <UpdatePasswpord path = "/updatepassword"/>
      </Router>
    </ProvideFirebase>
  );
}

export default App;
