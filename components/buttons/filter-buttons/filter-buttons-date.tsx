import React, { KeyboardEvent, useEffect } from "react";
import ButtonFilter from "../button-filter";
import { useDashboardContext } from "../../../store/global";
import { ButtonsProp } from "../../../utils/types";
import AssetEye from "../../assets/asset-eye";
import styles from "../styles/filter-buttons-date.module.css";
import {
  filterListButtons,
  normalizeFilterDates,
} from "../../../utils/functions";

const FilterButtonsDate = () => {
  const { updateSelectedDate } = useDashboardContext();
  const [isFocused, setFocused] = React.useState<string | null>(null);

  useEffect(() => {
    const initializeFocus = () => {
      setFocused("HOY");
      updateSelectedDate(normalizeFilterDates("HOY"));
    };
    initializeFocus();
  }, []);

  const handleClick = (btt: ButtonsProp) => {
    setFocused(btt.title);
    updateSelectedDate(normalizeFilterDates(btt.title));
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLDivElement>,
    btt: ButtonsProp
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(btt);
    }
  };

  return (
    <>
      <div className={styles.filterContainer}>
        {filterListButtons.map((btt: ButtonsProp, index: number) => (
          <ButtonFilter
            key={index}
            title={btt.title}
            onClick={() => handleClick(btt)}
            isFocused={isFocused === btt.title}
            onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
              handleKeyPress(event, btt)
            }
            tabIndex={0}
          />
        ))}
      </div>
      <div className={styles.verDetallesContainer}>
        <AssetEye />
        <p className={styles.textVerDetalles}>Ver detalles</p>
      </div>
    </>
  );
};

export default FilterButtonsDate;
