import React from "react";
import MenuNavBar from "../navbar/navbar";
import useIsMobile from "@/hooks/useMobile";
import NavMobile from "../navbar/mobile/nav-mobile";
import styles from "./styles/layout.module.css";

function WrapperContainer({ children }: { children: any }) {
  const isMobile = useIsMobile();

  return (
    <div className={styles.fullContainer}>
      <div className={isMobile ? styles.layoutContainer: null}>
        {isMobile ? <NavMobile /> : <MenuNavBar />}
        {children}
      </div>
    </div>
  );
}

export default WrapperContainer;
