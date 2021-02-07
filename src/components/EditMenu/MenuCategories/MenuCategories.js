import React from "react";
// import styles from "./MenuCategories.module.scss";
import MenuCategory from "./MenuCategory/MenuCategory";
import Collapse from 'antd/lib/collapse'
const {Panel} = Collapse
const MenuCategories = ({
  menuCategories = [],
  updateMenuCategoriesHandler,
}) => {
  let updateMenuCategoryHandler = (key, value) => {
    let temp = [...menuCategories];
    temp[key] = { ...value };
    updateMenuCategoriesHandler(temp);
  };

  let addMenuCategoryHandler = () => {
    let temp = [...menuCategories];
    temp.push({
      title: "",
      items: [
        { itemName: "", itemPrice: "", itemDescription: "" },
        { itemName: "", itemPrice: "", itemDescription: "" },
      ],
    });
    updateMenuCategoriesHandler(temp);
  };

  let deleteMenuCategoryHandler = (key) => {
    let temp = [...menuCategories];
    temp.splice(key, 1);
    updateMenuCategoriesHandler(temp);
  };

  let output = menuCategories.map((menuCategory, index) => {
    return (
      <Panel header={menuCategory.title || "New Menu Category"}>
        <MenuCategory
        menuCategory={menuCategory}
        index={index}
        key={index}
        deleteMenuCategoryHandler={deleteMenuCategoryHandler}
        updateMenuCategoryHandler={(newMenuCategory) =>
          updateMenuCategoryHandler(index, newMenuCategory)
        }
      />
      </Panel>
    );
  });
  return (
    <>   
      <h3><b>Menu Categories</b></h3>
      <Collapse  defaultActiveKey={['1']} >
      {output}
      </Collapse>
      {/* Add button laga dena */}
      <button
        type="button"
        onClick={() => addMenuCategoryHandler()}
        style={{ backgroundColor: "transparent", border: 0, cursor: "pointer" , marginTop:20}}
      >
        Add Category <i className="eos-icons">add_circle_outline</i>{" "}
      </button>
    </>
  );
};

export default MenuCategories;
