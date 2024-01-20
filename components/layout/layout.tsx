import React from "react";
import useIsMobile from "@/hooks/useMobile";
import NavMobile from "../navbar/mobile/nav-mobile";
import DesktopNavBar from "../navbar/desktop/desktop-navbar";
import styles from "./styles/layout.module.css";

function WrapperContainer({ children }: { children: any }) {
  const isMobile = useIsMobile();

  return (
    <div className={styles.fullContainer}>
      <div className={isMobile ? styles.layoutContainer: null}>
        {isMobile ? <NavMobile /> : <DesktopNavBar/>}
        {children}
      </div>
    </div>
  );
}

export default WrapperContainer;
