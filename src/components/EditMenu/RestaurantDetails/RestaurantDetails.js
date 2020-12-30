import React from "react";
// import styles from "./RestaurantDetails.module.scss";
const RestaurantDetails = ({
  restaurantDetails,
  menuChangeHandler,
  edit,
  updateLogo,
}) => {
  return (
    <div>
      <p>Name of Restaurant</p>
      <input
        disabled={edit}
        name="restaurantName"
        required={true}
        className="form-input"
        placeholder="Example: Moti Mahal Deluxe"
        onChange={(e) => menuChangeHandler("restaurantName", e.target.value)}
        defaultValue={restaurantDetails.restaurantName}
      ></input>
      <p>Bio</p>
      <textarea
        placeholder="Example: The Best Fast Food restaurant in New Delhi. Contact us at +91 9999999999 or visit A-21, North campus"
        onChange={(e) => menuChangeHandler("bio", e.target.value)}
        className="form-input"
        disabled={edit}
        defaultValue={restaurantDetails.bio}
      ></textarea>

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
    </div>
  );
};

export default RestaurantDetails;
