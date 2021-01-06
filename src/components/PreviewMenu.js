import React from "react";
import PreviewRestaurantMenu from "./PreviewRestaurantMenu";
import PreviewMenuWrapper from "./preview-menu/PreviewMenuWrapper"
const PreviewMenu = (props) => {
  const restaurantDetails = props.restaurantDetails;

  return (
    <div className="preview-menu">
      <h2>
        Preview Menu <i className="eos-icons">slideshow</i>
      </h2>
      <p>Once done, click on Generate QR Menu to create your Digital Menu.</p>
      <br></br>
      {/* <PreviewRestaurantMenu
        restaurantDetails={restaurantDetails}
        customizedMenu={true}
      /> */}
      <div style={{
        position: "relative",
        maxHeight: 800,
        overflowY: "scroll"
      }}> 
        <PreviewMenuWrapper style={{position: "absolute"}} restaurantDetails={restaurantDetails} />
      </div>
    </div>
  );
};

export default PreviewMenu;
