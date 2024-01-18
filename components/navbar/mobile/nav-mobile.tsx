import React from "react";
import Toolbar from "./toolbar";
import Drawer from "./drawer";
import styles from "./styles/nav-mobile.module.css";

const NavMobile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(false);
  };
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className={styles.mobileWrapper}>
      <Toolbar openDrawerHandler={openDrawer} />
      <Drawer left={isDrawerOpen} toggleDrawerHandler={toggleDrawer} />
    </div>
  );
};

export default NavMobile;
