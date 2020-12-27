import React from "react";
// import styles from "./MenuCategory.module.scss";
import MenuItems from "./MenuItems/MenuItems";
const MenuCategory = ({
  menuCategory,
  index,
  updateMenuCategoryHandler,
  deleteMenuCategoryHandler,
}) => {
  let updateMenuCategory = (key, val) => {
    let temp = { ...menuCategory };
    temp[key] = val;
    updateMenuCategoryHandler(temp);
  };

  return (
    <div className="shadow-box">
      <i
        onClick={() => deleteMenuCategoryHandler(index)}
        style={{ float: "right" }}
        className="eos-icons delete-icon"
      >
        close
      </i>
      <p>Title</p>
      <input
        required={true}
        value={menuCategory.title || ""}
        className="form-input"
        placeholder="Example: Chinese food"
        onChange={(e) => updateMenuCategory("title", e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <MenuItems
        menuItems={menuCategory.items}
        updateMenuItemsHandler={(newMenuItems) =>
          updateMenuCategory("items", newMenuItems)
        }
      />
    </div>
  );
};

export default MenuCategory;
