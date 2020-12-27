import React from "react";
// import styles from "./AddOffers.module.scss";

const AddOfferInput = ({ defaultValue, valueHandler, index }) => {
  let changeHandler = (newValue) => {
    valueHandler(newValue, index);
  };

  return (
    <input
      autoFocus={index === 0 ? true : false}
      type="text"
      onChange={(e) => changeHandler(e.target.value)}
      value={defaultValue}
      className="form-input"
      style={{ marginBottom: 10 }}
      placeholder="Offer"
    />
  );
};

const AddOffers = ({offers =[], setOffers}) => {

  let updateOfferHandler = (newValue, key) => {
    let temp = [...offers];
    if (temp.length === 0) {
      setOffers([newValue]);
      return;
    }
    temp[key] = newValue;
    setOffers(temp);
  };


  let addNewOffer = () => {
    let temp = [...offers];
    temp.push("");
    setOffers(temp);
  };

  let deleteOffer = (key) => {
    let temp = [...offers];
    temp.splice(key, 1);
    setOffers(temp);
  };


  let offersList =
    offers.length > 0 ? (
      offers.map((offer, index) => (
        <div key={index}>
          <AddOfferInput
            defaultValue={offer}
            valueHandler={updateOfferHandler}
            index={index}
          />
          <button
            type="button"
            style={{
              backgroundColor: "transparent",
              border: 0,
              cursor: "pointer",
            }}
            onClick={() => deleteOffer(index)}
          >
            <i className="eos-icons">delete_outline</i>
          </button>
        </div>
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
        <i className="eos-icons">add_circle_outline</i>
      </button>
    </div>
  );
};

export default AddOffers;
