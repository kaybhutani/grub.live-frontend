import React from "react";
import styles from "./NavBar.module.scss";
import PageHeader from "antd/lib/page-header";
import GrubLogo from "../../Assets/images/grub.live-logo.svg";
import { useHistory } from "react-router-dom";
const NavBar: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <PageHeader
        className={styles.navbar}
        title={<img src={GrubLogo} className={styles.logo} />}
        onBack={() => null}
        backIcon={history.location.pathname !== "/" ? true : false}
        ghost={false}
      />
    </>
  );
};

export default React.memo(NavBar);
