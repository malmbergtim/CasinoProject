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
import NavbarLayout from "./Views/NavbarLayout";
import Casino from "./Views/Casino";
import Jackpots from "./Views/Jackpots";
import Newest from "./Views/Newest";
import PlayForFun from "./Views/PlayForFun";
import Hypernova from "./Views/GameFolder/Hypernova";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="games" element={<Games />}></Route>
            <Route path="casino" element={<Casino />}></Route>
            <Route path="jackpots" element={<Jackpots />}></Route>
            <Route path="newest" element={<Newest />}></Route>
            <Route path="playforfun" element={<PlayForFun />}></Route>
          </Route>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="register" element={<Register />}></Route>

            <Route path="login" element={<Login />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="account" element={<Account />}></Route>

            <Route path="hypernova" element={<Hypernova />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
