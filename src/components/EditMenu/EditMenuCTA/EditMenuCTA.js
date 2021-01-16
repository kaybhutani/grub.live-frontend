import React, { useState } from "react";
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
  let [isDraft, setIsDraft] = useState(false);

  useEffect(() => {
    if (success && error != null) {
      alert("FONFF");
      if (isDraft) {
        alert("Menu saved in local");
        setTimeout(() => setIsDraft(false), 3000);
      } else {
        // router.push();
      }
    }
  }, [loading, error, isDraft]);

  let saveMenuHandler = () => {
    saveMenuToServer();
    setIsDraft(false);
  };

  let draftMenuHandler = () => {
    draftMenu();
    setIsDraft(true);
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
            {edit ? "Update Menu" : "Save Menu"}
          </button>
        </div>
      </div>
    </InviteForm>
  );
};

export default connect(mapStateToProps, mapDispatchFromProps)(EditMenuCTA);
