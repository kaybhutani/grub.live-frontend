import React from "react";
// import styles from "./MenuDetails.module.scss";
import themes from "../../../themes.json";
import fonts from "../../../fonts.json";
const MenuTheme = ({ defaultTheme, updateMenuThemeHandler }) => {
  return (
    <div className="shadow-box">
      <div style={{ display: "inline-block" }}>
        <p>Theme</p>
        <select
          onChange={(e) => updateMenuThemeHandler("theme", themes[e.target.value])}
          name="themes"
        >
          {Object.keys(themes).map((theme, idx) => {
            return (
              <option className="form-input" key={idx}>
                {theme}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ display: "inline-block", marginLeft: "48px" }}>
        <p>Font</p>
        <select
          onChange={(e) => updateMenuThemeHandler("theme.fontFamily", e.target.value)}
          name="fonts"
        >
          {Object.keys(fonts).map((font, idx) => {
            return (
              <option className="form-input" key={idx} value={Object.values(fonts)[idx]}>
                {font}
              </option>
            );
          })}
        </select>
      </div>
      <br></br>
      <div style={{ display: "inline-block" }}>
        <p>Font Color</p>
        <input
          onChange={(e) => updateMenuThemeHandler("theme.color", e.target.value)}
          type="color"
        ></input>
      </div>
      <div style={{ display: "inline-block", marginLeft: "48px" }}>
        <p>Background Color</p>
        <input
          onChange={(e) => updateMenuThemeHandler("theme.backgroundColor", e.target.value)}
          type="color"
        ></input>
      </div>
    </div>
  );
};

export default MenuTheme;
