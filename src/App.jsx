import React from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Settings from "./Components/Settings";
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}>
        <Route path="setting" element={<Settings />}></Route>
      </Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
};

export default App;
