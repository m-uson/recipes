import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, ThemeSelector } from "./components";
import useTheme from "./hooks/useTheme";
import { Create, Home, Recipe, Search } from "./pages";

const App = () => {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
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
