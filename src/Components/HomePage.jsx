import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import Section from "./Section";
import { Outlet } from "react-router-dom";
import Player from "./Player";
const HomePage = () => {
  return (
    <div className="flex w-full h-full ">
      <NavBar />

      <div className="relative w-[80%] md:min-w-[90%] flex h-full justify-between ">
        <Main />
        <Section />
        <Outlet />
        <Player />
      </div>
    </div>
  );
};

export default HomePage;
