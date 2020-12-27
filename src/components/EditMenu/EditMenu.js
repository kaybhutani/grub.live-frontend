import React, { useState } from "react";
import { apiBaseUrl } from "../../config.json";
// import PreviewModal from './PreviewModal'
import { dummyRestaurantDetails } from "../../dummyData.json";
import themes from "../../themes.json";
import fonts from "../../fonts.json";
import InviteForm from "./InviteForm/InviteForm";
import MenuCategories from "./MenuCategories/MenuCategories";
import AddOffers from "./AddOffers/AddOffers";
import SocialLinks from "./SocialLinks/SocialLinks";
// import { set } from "react-ga";
const EditMenu = ({
  restaurantDetails,
  setRestaurantDetails,
  edit,
  menuId,
  hash,
}) => {
  const customizedMenu = restaurantDetails.customizedMenu;
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

  // const updateTitle = (e, key) => {
  //   const temp = { ...restaurantDetails };
  //   temp.menu.categories[key].title = e.target.value;
  //   setRestaurantDetails(temp);
  // };

  // const addItem = (categoryKey) => {
  //   const temp = { ...restaurantDetails };
  //   temp.menu.categories[categoryKey].items.push({
  //     itemName: "",
  //     itemPrice: "",
  //   });
  //   setRestaurantDetails(temp);
  // };

  // const deleteItem = (categoryKey, itemKey) => {
  //   const temp = { ...restaurantDetails };
  //   temp.menu.categories[categoryKey].items.splice(itemKey, 1);
  //   setRestaurantDetails(temp);
  // };

  // const itemOnChange = (itemType, e, categoryKey, itemKey) => {
  //   const temp = { ...restaurantDetails };
  //   if (itemType === "name")
  //     temp.menu.categories[categoryKey].items[itemKey].itemName =
  //       e.target.value;
  //   else if (itemType === "price")
  //     temp.menu.categories[categoryKey].items[itemKey].itemPrice =
  //       e.target.value;
  //   else
  //     temp.menu.categories[categoryKey].items[itemKey].itemDescription =
  //       e.target.value;
  //   setRestaurantDetails(temp);
  // };

  // const addCategory = () => {
  //   const temp = { ...restaurantDetails };
  //   temp.menu.categories.push({
  //     title: "",
  //     type: "text",
  //     items: [],
  //   });
  //   setRestaurantDetails(temp);
  // };

  // const deleteCategory = (categoryKey) => {
  //   const temp = { ...restaurantDetails };
  //   temp.menu.categories.splice(categoryKey, 1);
  //   setRestaurantDetails(temp);
  // };

  // const handleKeyDown = (e, categoryKey) => {
  //   if (e.keyCode === 13) {
  //     e.preventDefault();
  //     addItem(categoryKey);
  //   }
  // };

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
      {/* {
        previewModal ? <PreviewModal restaurantDetails={restaurantDetails} togglePreviewModal={togglePreviewModal}/>
        :<></>
        
      } */}

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
                customizedMenu: customizedMenu,
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
                customizedMenu: customizedMenu,
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
          <p>Name of Restaurant</p>
          <input
            disabled={edit}
            name="restaurantName"
            required={true}
            className="form-input"
            placeholder="Example: Moti Mahal Deluxe"
            onChange={(e) =>
              menuChangeHandler("restaurantName", e.target.value)
            }
            defaultValue={restaurantDetails.restaurantName}
          ></input>
          {customizedMenu ? (
            <>
              <p>Bio</p>
              <textarea
                placeholder="Example: The Best Fast Food restaurant in New Delhi. Contact us at +91 9999999999 or visit A-21, North campus"
                onChange={(e) => menuChangeHandler("bio", e.target.value)}
                className="form-input"
                disabled={edit}
                defaultValue={restaurantDetails.bio}
              ></textarea>
            </>
          ) : null}
          <p>Logo (if any)</p>
          <input
            disabled={edit}
            type="file"
            accept="image/*"
            onChange={(e) => updateLogo(e)}
          ></input>
          <p>Email ID (You can use this to edit Menu later)</p>
          <input
            disabled={edit}
            type="email"
            required={true}
            className="form-input"
            placeholder="Example: johndoe@gmail.com"
            onChange={(e) => menuChangeHandler("emailId", e.target.value)}
            defaultValue={restaurantDetails.emailId}
          ></input>

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

        {customizedMenu ? (
          <div className="shadow-box">
            <div style={{ display: "inline-block" }}>
              <p>Theme</p>
              <select
                onChange={(e) =>
                  menuChangeHandler("menu.theme", themes[e.target.value])
                }
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
                onChange={(e) =>
                  menuChangeHandler("menu.theme.fontFamily", e.target.value)
                }
                name="fonts"
              >
                {Object.keys(fonts).map((font, idx) => {
                  return (
                    <option
                      className="form-input"
                      key={idx}
                      value={Object.values(fonts)[idx]}
                    >
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
                onChange={(e) =>
                  menuChangeHandler("menu.theme.color", e.target.value)
                }
                type="color"
              ></input>
            </div>
            <div style={{ display: "inline-block", marginLeft: "48px" }}>
              <p>Background Color</p>
              <input
                onChange={(e) =>
                  menuChangeHandler(
                    "menu.theme.backgroundColor",
                    e.target.value
                  )
                }
                type="color"
              ></input>
            </div>
          </div>
        ) : (
          <></>
        )}

        <MenuCategories
          menuCategories={restaurantDetails.menu.categories}
          updateMenuCategoriesHandler={(newMenuCategories) =>
            menuChangeHandler("menu.categories", newMenuCategories)
          }
        />

        <div>
          {/* <div style={{float: "right"}}>
          <button type='button' onClick={() => togglePreviewModal()} className='hyperlink btn-link preview-btn' >Preview <i className='eos-icons'>visibility</i> </button>
        </div> */}
          {/* <div style={{ float: "right" }}>
            <button
              type="button"
              className="hyperlink btn-link"
              onClick={() => addCategory()}
            >
              Add Category <i className="eos-icons">add_circle_outline</i>{" "}
            </button>
          </div>
          <br></br>
          <br></br> */}
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
