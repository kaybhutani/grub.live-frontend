import React from "react";
// import styles from "./MenuItem.module.scss";
const MenuItem = ({
  menuItem,
  deleteMenuItemHandler,
  updateMenuItemHandler,
  index,
}) => {
  let updateMenuItem = (key, val) => {
    let temp = { ...menuItem };
    temp[key] = val;
    updateMenuItemHandler(temp);
  };

  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <p>Item Name</p>
        <input
          required={true}
          onChange={(e) => updateMenuItem("itemName", e.target.value)}
          value={menuItem.itemName || ""}
          className="form-input"
          placeholder="Eg: French Fries"
        ></input>
      </div>
      <div style={{ display: "inline-block" }}>
        <p>Price</p>
        <input
          required={true}
          // onKeyDown={(e) => handleKeyDown(e, categoryKey)}
          onChange={(e) => updateMenuItem("itemPrice", e.target.value)}
          value={menuItem.itemPrice || ""}
          className="form-input"
          placeholder="Eg: Half: $4.99 , Full: $9.99"
        ></input>
      </div>
      <i onClick={deleteMenuItemHandler} className="eos-icons delete-icon">
        delete
      </i>
      {/* <p>Item Description (If any)</p>
      <textarea
        // onChange={(e) => itemOnChange("description", e, categoryKey, itemKey)}
        // onKeyDown={(e) => handleKeyDown(e, categoryKey)}
        style={{ maxWidth: "330px" }}
        defaultValue={
          restaurantDetails.menu.categories[categoryKey].items[itemKey]
            .itemDescription
        }
        className="form-input"
        placeholder="Contains onion, chillies, etc."
      ></textarea> */}
    </div>
  );
};

export default MenuItem;
