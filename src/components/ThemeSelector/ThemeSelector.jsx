import React from "react";
import useTheme from "../../hooks/useTheme";
import "./themeSelector.css";

import modeIcon from "../../assets/mode.svg";

const themeColors = ["#58249c", "red", "orange", "#009", "#2F2"];

const ThemeSelector = () => {
  const { changeColor, changeMode, mode } = useTheme();

  const handleChangeMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={handleChangeMode}
          src={modeIcon}
          alt="light and dark mode"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors?.map((color) => {
          return (
            <div
              onClick={() => changeColor(color)}
              key={color}
              style={{ background: color }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThemeSelector;
