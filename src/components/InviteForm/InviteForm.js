import React, { useState } from "react";
import styles from "./InviteForm.module.scss";
const VERIFY_STATE = {
  VERIFIED: 1,
  INVALID: -1,
  NOT_VERIFIED: 0,
};

const InviteForm = ({ children }) => {
  let [coupon, setCoupon] = useState("");

  /**
   * TODO: Wire up backend with form!
   * @kartikay
   */

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
      />
    </form>
  );

  let inValidMessage = (
    <div className={styles.invalidMessage}>Sorry, Invalid Invite Code.</div>
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
