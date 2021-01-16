import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./InviteForm.module.scss";
import axiosInstance from "../../../service/axios";
const VERIFY_STATE = {
  VERIFIED: 1,
  INVALID: -1,
  NOT_VERIFIED: 0,
};

const InviteForm = ({ children }) => {
  let [coupon, setCoupon] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  const resetCouponState = (e) => {
    e.preventDefault();
    setVerifyState(VERIFY_STATE.NOT_VERIFIED);
  };
  const couponHandler = () => {
    axiosInstance
      .get(`/coupons/is-valid`, {
        params: {
          q: coupon,
        },
      })
      .then((req) => {
        if (req.status !== 200) throw new Error("Failed to verify Invite Coupon");
        return req.data;
      })
      .then((data) => {
        if (!data.hasOwnProperty("success") || !data.success)
          throw new Error("Failed to verify Invite Coupon");
        setVerifyState(VERIFY_STATE.VERIFIED);
      })
      .catch((err) => {
        setErrorMessage(`${err.message}`);
        setVerifyState(VERIFY_STATE.INVALID);
      });
  };

  let [verifyState, setVerifyState] = useState(VERIFY_STATE.NOT_VERIFIED);

  let notVerifiedForm = (
    <>
      <div
        // only inline style working, not class, fix @lakshya
        style={{
          display: "flex",
          justifyContent: "center",
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
          type="button"
          value="Verify Coupon"
          className="black-yellow"
          onClick={(e) => couponHandler()}
        />
      </div>
      <div className={styles.tooltip}>
        {" "}
        Get invite code?
        <span className={styles.tooltiptext}>
          We currently allow only invited restaurants to create Menu,
          <Link to="/contact">{` Contact `}</Link>
          our sales team here for the invite and pricing.
        </span>
      </div>
    </>
  );

  let inValidMessage = (
    <>
      <div className={styles.invalidMessage}>{errorMessage}</div>
      <button
        className={`hyperlink btn-link ${styles.tryAgainBtn}`}
        onClick={(e) => {
          resetCouponState(e);
        }}
      >
        Try again?
      </button>
    </>
  );

  let correctCoupon = (
    <>
      <div style={{ textAlign: "right" }}>{children}</div>
      <p className={styles.correctCoupon}>
        Invite Code {coupon} successfully applied. <i className="eos-icons">done</i>
      </p>
      <button
        className={`hyperlink btn-link ${styles.tryAgainBtn}`}
        onClick={(e) => {
          resetCouponState(e);
        }}
      >
        Change invite code?
      </button>
    </>
  );
  let output;
  switch (verifyState) {
    case VERIFY_STATE.INVALID:
      output = inValidMessage;
      break;
    case VERIFY_STATE.VERIFIED:
      output = correctCoupon;
      break;
    default:
      output = notVerifiedForm;
      break;
  }

  return <div>{output}</div>;
};

export default InviteForm;
