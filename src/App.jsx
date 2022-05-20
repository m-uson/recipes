import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ThemeContext, ThemeContextValue } from "./context/ThemeContext";
import { Create, Home, Recipe, Search } from "./pages";

const App = () => {
  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
