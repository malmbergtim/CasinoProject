import React from "react";
import styled from "styled-components";
import "./App.css";
import { BigText } from "./components/bigText";
import Layout from "./Views/Layout";
import Card from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Games from "./Views/Games";
import Register from "./Views/Register";
import Login from "./Views/Login";
import About from "./Views/About";
import Account from "./Views/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="games" element={<Games />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="account" element={<Account />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
