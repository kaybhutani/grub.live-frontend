import React, { useState } from "react";
// import PreviewModal from './PreviewModal'
import { dummyRestaurantDetails } from "../../dummyData.json";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../service/axios";
import InviteForm from "./InviteForm/InviteForm";
import MenuCategories from "./MenuCategories/MenuCategories";
import AddOffers from "./AddOffers/AddOffers";
import SocialLinks from "./SocialLinks/SocialLinks";
import MenuTheme from "./MenuTheme/MenuTheme";
import RestaurantDetails from "./RestaurantDetails/RestaurantDetails";
import EditMenuCTA from "./EditMenuCTA/EditMenuCTA";
// import { set } from "react-ga";

const EditMenu = () => {
  // const updateLogo = (e) => {
  //   const uploadedFile = e.target.files[0];
  //   if (uploadedFile) {
  //     if (uploadedFile.size > 2000000) {
  //       alert("Please upload an image with size less than 2 mb.");
  //       return;
  //     }

  //     const reader = new FileReader();
  //     reader.readAsDataURL(uploadedFile);
  //     reader.onloadend = () => {
  //       const temp = { ...restaurantDetails };
  //       temp.logo = reader.result;
  //       console.log(reader.result);
  //       setRestaurantDetails(temp);
  //     };
  //   }
  // };

  // const submitMenu = (e) => {
  //   if (!submitState) {
  //     setSubmitState(true)
  //     try {
  //       if(!restaurantDetails.emailId || !restaurantDetails.restaurantName) {
  //         throw new Error("Restaurant Details cannot be empty!")
  //       }
  //       const apiEndPoint = edit ? `/edit/submit/${menuId}/${hash}` : `/submit`;

  //       axiosInstance.post(apiEndPoint,JSON.stringify(restaurantDetails))
  //         .then(req => {
  //           if(req.status!==200) throw new Error("Failed to save menu")
  //           return req.data
  //         })
  //         .then((data) => {
  //           setSubmitState(false)
  //           if(!data.success) throw new Error("Failed to save menu")
  //           localStorage.removeItem("restaurantDetails");
  //           const redirectLocation = edit? `/#/qr/edit/${data.id}`: `/#/qr/${data.id}`;
  //           history.push(redirectLocation)
  //         })
  //     }catch(err) {
  //       console.error(err.message)
  //       alert(err.message)
  //     }
  //   }

  // };

  return (
    <div className="edit-menu">
      <h2>
        Edit Menu <i className="eos-icons">edit</i>
      </h2>
      <p>Please enter the following details to create your Digital QR Menu.</p>

      {/* <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      > */}
      {/* {localStorage.getItem("restaurantDetails") ? (
          <button
            onClick={() =>
              setRestaurantDetails({
                ...JSON.parse(localStorage.getItem("restaurantDetails")),
              })
            }
            style={{ color: "#007cbf" }}
            className="hyperlink btn-link"
          >
            Load saved <i className="eos-icons">system_update_alt</i>
          </button>
        ) : null}
        {!restaurantDetails.restaurantName ? (
          <button
            onClick={() =>
              setRestaurantDetails({
                ...dummyRestaurantDetails,
              })
            }
            style={{ color: "#007cbf" }}
            className="hyperlink btn-link"
          >
            Fill sample data <i className="eos-icons">keyboard</i>
          </button>
        ) : null}
      </div> */}

      <form>
        <div className="shadow-box">
          <RestaurantDetails />
          <SocialLinks />
          <AddOffers />
        </div>

        <MenuTheme />
        <MenuCategories />
        <EditMenuCTA />
      </form>
    </div>
  );
};

export default EditMenu;
