import React from "react";
import { Grid } from "@mui/material";
import { useDashboardContext } from "../../../store/global";
import { ButtonsProp } from "../../../utils/types";
import FilterButtonsDate from "../../buttons/filter-buttons/filter-buttons-date";
import FilterButtons7D from "../../buttons/filter-buttons/filter-buttons-7d";
import FilterButtonsClient from "../../buttons/filter-buttons/filter-buttons-client";
import { listButtonsSideBar } from "../../../utils/functions";
import SideBarButtons from "../../buttons/sidebar/sidebar-buttons";
import ButtonsDataMobile from "../../buttons/filter-buttons/filter-buttons-mobile";
import styles from "../styles/dashboard.module.css";
import useIsMobile from "../../../hooks/useMobile";

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
          <Grid item className={styles.filterDateContainer}>
            <FilterButtonsDate />
          </Grid>
          <Grid item className={styles.filterButtons7DContainer}>
            <FilterButtons7D />
          </Grid>
          <Grid item className={styles.filterClientContainer}>
            <FilterButtonsClient />
          </Grid>
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
