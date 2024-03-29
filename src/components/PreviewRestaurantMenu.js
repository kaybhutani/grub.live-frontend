import React, { useEffect, useState } from "react";
import themes from "../themes.json";

const PreviewRestaurantMenu = (props) => {
  const [restaurantDetails, setRestaruarntDetails] = useState(
    props.restaurantDetails
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState(themes.Light);
  useEffect(() => {
    if (restaurantDetails.menu.theme) {
      if (themes[restaurantDetails.menu.theme.themeName])
        setTheme(themes[restaurantDetails.menu.theme.themeName]);
      else {
        console.log("No theme name found. Reading theme info");
        setTheme(restaurantDetails.menu.theme);
      }
    }

    if (searchQuery === "") setRestaruarntDetails(props.restaurantDetails);
    else {
      // changing state obj to json
      const tempRestaurantDetails = JSON.parse(
        JSON.stringify(props.restaurantDetails)
      );

      const categories = [];

      tempRestaurantDetails.menu.categories.forEach((category) => {
        if (
          category.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase().trim())
        ) {
          categories.push(category);
        } else {
          const tempItems = [];
          for (let i = 0; i < category.items.length; i++) {
            if (
              category.items[i].itemName
                .toLowerCase()
                .includes(searchQuery.toLowerCase().trim())
            )
              tempItems.push(category.items[i]);
          }
          category.items = tempItems;
          if (tempItems.length > 0) {
            categories.push(category);
          }
        }
      });
      tempRestaurantDetails.menu.categories = categories;
      setRestaruarntDetails(tempRestaurantDetails);
    }
  }, [props.restaurantDetails, restaurantDetails, searchQuery]);

  // const searchDish = (e) => {

  // }

  return (
    <div
      className="shadow-box"
      style={{
        ...theme,

        // backgroundColor: theme.backgroundColor
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>
          {restaurantDetails.logo ? (
            <img
              src={restaurantDetails.logo}
              alt=""
              className="restaurant-logo"
            ></img>
          ) : (
            <i
              className="eos-icons"
              style={{ color: "red", fontSize: "1em", margin: "8px" }}
            >
              local_dining
            </i>
          )}
          {restaurantDetails.restaurantName}
        </h1>

        <h4>{restaurantDetails.bio}</h4>
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          name="search-restaurant"
          className="form-input"
          placeholder="Search Menu"
          onKeyUp={(e) => setSearchQuery(e.target.value)}
        ></input>
      </div>

      <br></br>
      <div>
        {restaurantDetails.menu.categories.map((element, key) => {
          return element.title !== "" ? (
            <div key={key}>
              <h2>{element.title}</h2>

              {element.items.length > 0 ? (
                <div>
                  {restaurantDetails.menu.categories[key].items.map(
                    (item, itemKey) => {
                      return (
                        <div className="menu-item" key={itemKey}>
                          <p className="item-name">{item.itemName}</p>
                          <p className="item-price">{item.itemPrice}</p>
                          {item.itemDescription ? (
                            <>
                              <br></br>
                              <i className="item-description">
                                {item.itemDescription}
                              </i>
                            </>
                          ) : (
                            <></>
                          )}
                          <br></br>
                          <br></br>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div key={key}></div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewRestaurantMenu;
