import React, { useState } from "react";
import { apiBaseUrl } from "../../config.json";
// import PreviewModal from './PreviewModal'
import { dummyRestaurantDetails } from "../../dummyData.json";

import InviteForm from "./InviteForm/InviteForm";
import MenuCategories from "./MenuCategories/MenuCategories";
import AddOffers from "./AddOffers/AddOffers";
import SocialLinks from "./SocialLinks/SocialLinks";
import MenuTheme from "./MenuTheme/MenuTheme";
import RestaurantDetails from "./RestaurantDetails/RestaurantDetails";
// import { set } from "react-ga";
const EditMenu = ({
  restaurantDetails,
  setRestaurantDetails,
  edit,
  menuId,
  hash,
}) => {
  const [saveDraft, setSaveDraft] = useState(false);
  const [submitState, setSubmitState] = useState(false);
  const menuChangeHandler = (keyStr, val) => {
    let updatedRestaurantDetails = { ...restaurantDetails };
    let keyArray = keyStr.split(".");
    let pointer = updatedRestaurantDetails;
    let i = 0;
    while (i < keyArray.length - 1) {
      if (!pointer.hasOwnProperty(keyArray[i])) {
        if (i === keyArray.length - 2) {
          break;
        } else {
          pointer[keyArray[i]] = {};
        }
      }
      pointer = pointer[keyArray[i]];
      i++;
    }
    pointer[keyArray[keyArray.length - 1]] = val;
    // updatedRestaurantDetails[key] = val;
    setRestaurantDetails(updatedRestaurantDetails);
  };

  const updateLogo = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      if (uploadedFile.size > 2000000) {
        alert("Please upload an image with size less than 2 mb.");
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(uploadedFile);
      reader.onloadend = () => {
        const temp = { ...restaurantDetails };
        temp.logo = reader.result;
        console.log(reader.result);
        setRestaurantDetails(temp);
      };
    }
  };
  const getGenerateBtnText = () => {
    if (submitState) {
      return edit ? "Updating..." : "Generating...";
    }
    return edit ? "Update Menu" : "Generate QR Menu";
  };

  const saveDraftFunction = (e) => {
    if (!saveDraft) {
      localStorage.setItem(
        "restaurantDetails",
        JSON.stringify(restaurantDetails)
      );
      setSaveDraft(true);
      setTimeout(() => {
        setSaveDraft(false);
      }, 3000);
    }
  };

  const submitMenu = (e) => {
    if (!submitState) {
      setSubmitState(true);
      if (!restaurantDetails.emailId || !restaurantDetails.restaurantName) {
        setSubmitState(false);
        window.alert("Restaurant name and Email Id cannot be blank");
        return;
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurantDetails),
      };

      const apiEndPoint = edit
        ? `${apiBaseUrl}/edit/submit/${menuId}/${hash}`
        : `${apiBaseUrl}/submit`;

      fetch(apiEndPoint, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setSubmitState(false);
          console.log(data);
          if (!data.success) {
            let errMessage =
              data.message || `Some problem occrred while creating menu`;
            window.alert(errMessage);
            return;
          }
          localStorage.removeItem("restaurantDetails");
          const redirectLocation = edit
            ? `/#/qr/edit/${data.id}`
            : `/#/qr/${data.id}`;
          window.location = redirectLocation;
        })
        .catch((err) => {
          console.log(err);
          alert(`Some error occurred`);
          setSubmitState(false);
        });
    }
  };

  return (
    <div className="edit-menu">
      <h2>
        Edit Menu <i className="eos-icons">edit</i>
      </h2>
      <p>Please enter the following details to create your Digital QR Menu.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        {localStorage.getItem("restaurantDetails") ? (
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
      </div>

      <form>
        <div className="shadow-box">
          <RestaurantDetails
            updateLogo={updateLogo}
            edit={edit}
            restaurantDetails={restaurantDetails}
            menuChangeHandler={menuChangeHandler}
          />
          <SocialLinks
            defaultSocialLinks={restaurantDetails.social}
            menuChangeHandler={menuChangeHandler}
          />
          <div>
            <AddOffers
              offers={restaurantDetails.offers}
              setOffers={(offers) => menuChangeHandler("offers", offers)}
            />
          </div>
        </div>

        <MenuTheme
          updateMenuThemeHandler={(key, val) =>
            menuChangeHandler(`menu.${key}`, val)
          }
        />

        <MenuCategories
          menuCategories={restaurantDetails.menu.categories}
          updateMenuCategoriesHandler={(newMenuCategories) =>
            menuChangeHandler("menu.categories", newMenuCategories)
          }
        />

        <div>
          <div
            style={{ float: "right", display: "flex", flexDirection: "column" }}
          >
            <button
              type="button"
              onClick={(e) => saveDraftFunction(e)}
              className="black-yellow"
            >
              {saveDraft ? (
                <div>
                  Saved <i className="eos-icons">done</i>
                </div>
              ) : (
                `Save Draft`
              )}
            </button>
            {/**
             * TODO: Make Add Coupon component
             */}
            {!edit ? (
              <InviteForm
                restaurantDetails={restaurantDetails}
                setRestaurantDetails={setRestaurantDetails}
              >
                <button
                  type="button"
                  onClick={(e) => submitMenu(e)}
                  className="black-yellow"
                >
                  {getGenerateBtnText()}
                </button>
              </InviteForm>
            ) : (
              <button
                type="button"
                onClick={(e) => submitMenu(e)}
                className="black-yellow"
              >
                {getGenerateBtnText()}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditMenu;
