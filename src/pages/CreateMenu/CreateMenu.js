import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EditMenu from "../../components/EditMenu/EditMenu";
import PreviewMenu from "../../components/PreviewMenu";
import loadingIcon from "../../assets/images/three_dots_loading.svg";
import { apiBaseUrl } from "../../config.json";
import ReactGA from "react-ga";
ReactGA.initialize("G-0BPQRCHTXK");

const CreateMenu = (props) => {
  const sampleRestaurantDetails = {
    emailId: "",
    restaurantName: "",
    logo: "",
    bio: "",
    offers: [],
    social: {},
    customizedMenu: false,
    menu: {
      categories: [],
      theme: {},
    },
  };

  const [restaurantDetails, setRestaurantDetails] = useState(
    sampleRestaurantDetails
  );
  const [dataFetched, setDataFetched] = useState(false);
  const [editDataCorrect, setEditDataCorrect] = useState(false);
  const edit = props.edit || false;
  let { menuId, hash } = useParams();

  if (edit && !dataFetched) {
    fetch(`${apiBaseUrl}/view?q=${menuId}`)
      .then((response) => response.json())
      .then((data) => {
        setDataFetched(true);
        if (data.success) {
          setRestaurantDetails(data.data);
          setEditDataCorrect(true);
        }
      });
  }

  const getCreateMenuComponent = () => {
    if (edit) {
      if (dataFetched) {
        if (!editDataCorrect) {
          return <h2>Invalid Edit link</h2>;
        }
      } else {
        return (
          <div className="loading-div">
            <img alt="" className="loading-icon" src={loadingIcon} />
          </div>
        );
      }
    }
    return (
      <div>
        <div className="center-align">
          {edit ? (
            <>
              <h1>Update Menu</h1>
              <p>
                Any changes made here will be updated in your old menu only. You
                can add, delete or update the categories, items and price. The
                Restaurant name, logo and email ID cannot be changed for now.
                You don't have to worry for new QR code , the link and QR
                remains same.
              </p>
              <br></br>
            </>
          ) : (
            <>
              <h1>Create Menu</h1>
              <p style={{ fontSize: "1.2em" }}>
                Creating menu is simple. Just enter your restaurant name, upload
                Logo and Email ID for future changes.<br></br>That's it. Now you
                can start adding the Dishes by creating a new category and
                adding items to it.
              </p>
            </>
          )}

          <br></br>
        </div>
        <EditMenu
          restaurantDetails={restaurantDetails}
          setRestaurantDetails={setRestaurantDetails}
          edit={edit}
          menuId={menuId}
          hash={hash}
          customizedMenu={true}
        />
        <PreviewMenu
          restaurantDetails={restaurantDetails}
          customizedMenu={true}
        />
      </div>
    );
  };
  return <div className="container">{getCreateMenuComponent()}</div>;
};

export default CreateMenu;
