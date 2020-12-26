import React, { useEffect, useState } from "react";
import styles from "./AddOffers.module.scss";

const AddOfferInput = ({ defaultValue, valueHandler, index }) => {
  let [inputVal, setInputVal] = useState(defaultValue || "");

  let changeHandler = (newValue) => {
    setInputVal(newValue);
    valueHandler(newValue, index);
  };

  return (
    <input
      type="text"
      onChange={(e) => changeHandler(e.target.value)}
      value={inputVal}
      className="form-input"
      style={{ marginBottom: 10 }}
      placeholder="Offer"
    />
  );
};

const AddOffers = (props) => {
  let [offers, setOffers] = useState(props.offers || []);

  let updateOfferHandler = (newValue, key) => {
    let temp = [...offers];
    if (temp.length == 0) {
      setOffers([newValue]);
      return;
    }
    temp[key] = newValue;
    setOffers(temp);
  };

  useEffect(() => {
    props.offersHandler(offers);
  }, [offers]);

  let addNewOffer = () => {
    let temp = [...offers];
    temp.push("");
    setOffers(temp);
  };

  let offersList =
    offers.length > 0 ? (
      offers.map((offer, index) => (
        <AddOfferInput
          defaultValue={offer}
          valueHandler={updateOfferHandler}
          index={index}
          key={index}
        />
      ))
    ) : (
      <AddOfferInput
        defaultValue={""}
        valueHandler={updateOfferHandler}
        index={0}
      />
    );

  return (
    <div>
      {offersList}{" "}
      <button
        onClick={addNewOffer}
        type="button"
        style={{ backgroundColor: "transparent", border: 0, cursor: "pointer" }}
      >
        <i class="eos-icons">add_circle_outline</i>
      </button>
    </div>
  );
};

export default AddOffers;
