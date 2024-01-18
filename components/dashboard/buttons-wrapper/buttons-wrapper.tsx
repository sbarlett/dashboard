import React from "react";
import { Container } from "@mui/material";
import FilterButtons7D from "@/components/buttons/filter-buttons/filter-buttons-7d";
import FilterButtonsClient from "@/components/buttons/filter-buttons/filter-buttons-client";
import FilterButtonsDate from "@/components/buttons/filter-buttons/filter-buttons-date";
import styles from "../styles/dashboard.module.css";
import useIsMobile from "@/hooks/useMobile";
import { listButtonsSideBar } from "@/utils/functions";
import SideBarButtons from "@/components/buttons/sidebar/sidebar-buttons";
import { useDashboardContext } from "@/store/global";
import ButtonsDataMobile from "@/components/buttons/filter-buttons/filter-buttons-mobile";
import { ButtonsProp } from "@/utils/types";

const ButtonsWrapper = () => {
  const { updateSelectedGrafic } = useDashboardContext();
  const isMobile = useIsMobile();
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );
  const handleClick = (btt: ButtonsProp) => {
    setFocusedButton(btt.title);
    updateSelectedGrafic(btt.title);
  };

  return (
    <>
      {!isMobile ? (
        <>
          <Container className={styles.filterDateContainer}>
            <FilterButtonsDate />
          </Container>
          <Container className={styles.filterButtons7DContainer}>
            <FilterButtons7D />
          </Container>
          <Container className={styles.filterClientContainer}>
            <FilterButtonsClient />
          </Container>
        </>
      ) : (
        <>
          <div className={styles.sidebarButtonContainer}>
            <div className={styles.buttonContainer}>
              {listButtonsSideBar.map((btt: ButtonsProp, index: number) => (
                <SideBarButtons
                  key={index}
                  text={btt.title}
                  onClick={() => handleClick(btt)}
                  isFocus={isFocusedButton === btt.title}
                />
              ))}
            </div>
            <ButtonsDataMobile />
          </div>
        </>
      )}
    </>
  );
};

export default ButtonsWrapper;
