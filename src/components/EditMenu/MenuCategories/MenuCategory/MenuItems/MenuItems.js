import React from "react";
import MenuItem from "./MenuItem/MenuItem";
const MenuItems = ({ menuItems = [], updateMenuItemsHandler }) => {
  let updateMenuItem = (newMenuItem, key) => {
    let temp = [...menuItems];
    temp[key] = { ...newMenuItem };
    updateMenuItemsHandler(temp);
  };

  let deleteMenuItem = (key) => {
    let temp = [...menuItems];
    temp.splice(key, 1);
    updateMenuItemsHandler(temp);
  };

  let addMenuItemHandler = (item) => {
    if (!item.hasOwnProperty("itemName") || !item.hasOwnProperty("itemPrice"))
      return;
    let temp = [...menuItems];
    temp.push(item);
    updateMenuItemsHandler(temp);
  };

  return (
    <div>
      {menuItems.map((item, index) => (
        <MenuItem
          menuItem={item}
          key={index}
          index={index}
          updateMenuItemHandler={(newMenuItem) =>
            updateMenuItem(newMenuItem, index)
          }
          deleteMenuItemHandler={() => deleteMenuItem(index)}
        />
      ))}
      <div style={{ float: "right" }}>
        <button
          type="button"
          className="hyperlink btn-link"
          onClick={() =>
            addMenuItemHandler({
              itemPrice: "",
              itemName: "",
              itemDescription: "",
            })
          }
        >
          Add Item <i className="eos-icons">add_circle_outline</i>{" "}
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
