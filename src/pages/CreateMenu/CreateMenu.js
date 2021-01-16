import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import EditMenu from "../../components/EditMenu/EditMenu";
import PreviewMenu from "../../components/PreviewMenu";
import loadingIcon from "../../assets/images/three_dots_loading.svg";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import { fetchMenu } from "../../reducers/EditMenu.reducers";
import MenuHeader from "../../components/MenuHeader";

const mapStateFromProps = (state) => {
  return {
    loading: state.menu.loading,
    error: state.menu.error,
  };
};

const mapDispatchFromProps = (dispatch) => {
  return {
    fetchMenu: (menuId, hash) => dispatch(fetchMenu({ menuId: menuId, hash: hash })),
  };
};

ReactGA.initialize("G-0BPQRCHTXK");

const CreateMenu = ({ edit, loading, error, setMetaData, fetchMenu }) => {
  let { menuId, hash } = useParams();
  useEffect(() => {
    let setUpMenu = async () => {
      if (edit) {
        await fetchMenu(menuId, hash);
      }
    };
    setUpMenu();
  }, [edit, hash, menuId, setMetaData, fetchMenu]);

  if (loading) {
    return (
      <div className="loading-div">
        <img alt="" className="loading-icon" src={loadingIcon} />
      </div>
    );
  }

  if (error) {
    if (edit) {
      return <h2>Invalid Edit link</h2>;
    } else {
      return <h2>Failed to open new menu</h2>;
    }
  }

  return (
    <div>
      <div className="center-align">
        <MenuHeader />
      </div>
      <EditMenu />
      {/* <PreviewMenu /> */}
    </div>
  );
};

export default connect(mapStateFromProps, mapDispatchFromProps)(CreateMenu);
