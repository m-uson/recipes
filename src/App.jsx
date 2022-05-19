import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Create, Home, Recipe, Search } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
