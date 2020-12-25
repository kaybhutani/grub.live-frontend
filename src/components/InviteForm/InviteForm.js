import React, { useState } from "react";
import {apiBaseUrl} from '../../config.json'
import styles from "./InviteForm.module.scss";
const VERIFY_STATE = {
  VERIFIED: 1,
  INVALID: -1,
  NOT_VERIFIED: 0,
};

const InviteForm = ({ children }) => {
  let [coupon, setCoupon] = useState("");

  const resetCouponState = (e) => {
    e.preventDefault();
    setVerifyState(VERIFY_STATE.NOT_VERIFIED)
  }
  const couponHandler = () => {
    setVerifyState(VERIFY_STATE.INVALID)
  }

  let [verifyState, setVerifyState] = useState(VERIFY_STATE.NOT_VERIFIED);

  let notVerifiedForm = (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
      }}
    >
      <input
        className="form-input"
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="Invite Code"
      />
      <input
        style={{ margin: 0, marginLeft: 10 }}
        type="submit"
        value="Verify Coupon"
        className="black-yellow"
        onClick={() => couponHandler()}
      />
    </form>
  );

  let inValidMessage = (
    <>
    <div className={styles.invalidMessage}>Sorry, Invalid Invite Code.</div>
    <button
      className={`hyperlink btn-link ${styles.tryAgainBtn}`}
      onClick={(e) => {resetCouponState(e)}} 
    >
    Try again?
    </button>
    </>
  );

  let output;

  switch (verifyState) {
    case VERIFY_STATE.INVALID:
      output = inValidMessage;
      break;  
    case VERIFY_STATE.VERIFIED:
      output = children;
      break;
    default:
      output = notVerifiedForm;
      break;
  }

  return <div>{output}</div>;
};

export default InviteForm;
