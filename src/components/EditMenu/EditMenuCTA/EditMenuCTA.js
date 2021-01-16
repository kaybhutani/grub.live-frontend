import React, { useState, useEffect } from "react";
// import styles from "./EditMenuCTA.module.scss";
import { connect } from "react-redux";
import { setMenu, draftMenu } from "../../../reducers/EditMenu.reducers";
import InviteForm from "../InviteForm/InviteForm";
import { useHistory } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    isEdit: state.menu.edit,
    loading: state.menu.loading,
    error: state.menu.error,
  };
};

let mapDispatchFromProps = (dispatch) => {
  return {
    saveMenuToServer: () => dispatch(setMenu()),
    saveMenuToLocal: () => dispatch(draftMenu()),
  };
};

const EditMenuCTA = ({ saveMenuToLocal, saveMenuToServer, isEdit, loading, error }) => {
  let router = useHistory();
  let [submitForm, setSubmitForm] = useState(0);

  useEffect(() => {
    if (!loading && error != null && submitForm != 0) {
      alert("FONFF");
      if (submitForm == -1) {
        alert("Menu saved in local");
        setTimeout(() => setSubmitForm(0), 3000);
      } else {
        // router.push();
      }
    }
  }, [loading, error, submitForm]);

  let saveMenuHandler = () => {
    saveMenuToServer();
    setSubmitForm(1);
  };

  let draftMenuHandler = () => {
    saveMenuToLocal();
    setSubmitForm(-1);
  };

  return (
    <InviteForm>
      <div>
        <div style={{ float: "right", display: "flex", flexDirection: "column" }}>
          <button
            type="button"
            disabled={loading}
            onClick={() => draftMenuHandler()}
            className="black-yellow"
          >
            Save Draft
          </button>
          <button
            type="button"
            disabled={loading}
            onClick={() => saveMenuHandler()}
            className="black-yellow"
          >
            {isEdit ? "Update Menu" : "Save Menu"}
          </button>
        </div>
      </div>
    </InviteForm>
  );
};

export default connect(mapStateToProps, mapDispatchFromProps)(EditMenuCTA);
