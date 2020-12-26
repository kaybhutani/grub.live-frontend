import React, { useState } from "react";
import { Link } from "react-router-dom";
import {apiBaseUrl} from '../../config.json'
import styles from "./InviteForm.module.scss";
const VERIFY_STATE = {
  VERIFIED: 1,
  INVALID: -1,
  NOT_VERIFIED: 0,
};

const InviteForm = ({ children, restaurantDetails, setRestaurantDetails }) => {
  let [coupon, setCoupon] = useState("");
  let [errorMessage, setErrorMessage] = useState("")
  const resetCouponState = (e) => {
    e.preventDefault();
    setVerifyState(VERIFY_STATE.NOT_VERIFIED)
  }
  const couponHandler = () => {
    fetch(`${apiBaseUrl}/coupons/is-valid?q=${coupon}`)
    .then((response) => response.json())
    .then(data => {
      if(data && data.success) {
        setVerifyState(VERIFY_STATE.VERIFIED)
        setRestaurantDetails({...restaurantDetails, couponId: coupon})
      }
      else {
        setErrorMessage(data?data.message:"Could not verify Invite Code")
        setVerifyState(VERIFY_STATE.INVALID)
        setRestaurantDetails({...restaurantDetails, couponId: ""})
      }
    }).catch((err) => {
      setErrorMessage(`${err}`)
      setRestaurantDetails({...restaurantDetails, couponId: ""})
      setVerifyState(VERIFY_STATE.INVALID)

    })
  }

  let [verifyState, setVerifyState] = useState(VERIFY_STATE.NOT_VERIFIED);

  let notVerifiedForm = (
    <>
    <div
    // only inline style working, not class, fix @lakshya
      style={{
        display: 'flex',
        justifyContent: 'center'
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
    <div class={styles.tooltip}> Get invite code?
      <span class={styles.tooltiptext}>
        We currently allow only invited restaurants to create Menu, 
        <Link to='/contact'>
          {` Contact `}
        </Link>
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
      onClick={(e) => {resetCouponState(e)}} 
    >
    Try again?
    </button>
    </>
  );

  let correctCoupon = (
    <>
    <div style={{textAlign: "right"}}>{children}</div>
    <p className={styles.correctCoupon}>Invite Code {coupon} successfully applied. <i className='eos-icons'>done</i></p>
    <button
      className={`hyperlink btn-link ${styles.tryAgainBtn}`}
      onClick={(e) => {resetCouponState(e)}} 
    >
    Change invite code?
    </button>
    </>
  )
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
