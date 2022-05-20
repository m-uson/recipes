import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Create, Home, Recipe, Search } from "./pages";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/create" element={<Create />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
