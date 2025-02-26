import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Settings from "./Components/Settings";
import ArtistInfo from "./Components/ArtistInfo";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}>
        <Route path="song" element={<ArtistInfo />}></Route>
      </Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
};

export default App;
