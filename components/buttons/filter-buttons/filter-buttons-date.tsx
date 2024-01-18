import React from "react";
import { filterListButtons, normalizeFilterDates } from "@/utils/functions";
import ButtonFilter from "../button-filter";
import { useDashboardContext } from "@/store/global";
import EyeIcon from "@/components/icons/eyeIcon";
import styles from "../styles/filter-buttons-date.module.css";
import { ButtonsProp } from "@/utils/types";

const FilterButtonsDate = () => {
  const { updateSelectedDate } = useDashboardContext();
  const [isFocused, setFocused] = React.useState<string | null>(null);

  const handleClick = (btt) => {
    setFocused(btt.title);
    updateSelectedDate(normalizeFilterDates(btt.title));
  };

  React.useEffect(() => {
    const initializeFocus = () => {
      setFocused("HOY");
      updateSelectedDate(normalizeFilterDates("HOY"));
    };
    initializeFocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.filterContainer}>
        {filterListButtons.map((btt: ButtonsProp, index: number) => (
          <ButtonFilter
            key={index}
            title={btt.title}
            onClick={() => handleClick(btt)}
            isFocused={isFocused === btt.title}
          />
        ))}
      </div>
      <div className={styles.verDetallesContainer}>
        <EyeIcon />
        <p className={styles.textVerDetalles}>Ver detalles</p>
      </div>
    </>
  );
};

export default FilterButtonsDate;