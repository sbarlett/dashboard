import React from "react";
import ButtonFilter from "../button-filter";
import { ButtonsProp } from "../../../utils/types";
import { list7DiasButton } from "../../../utils/functions";
import { useDashboardContext } from "../../../store/global";

const FilterButtons7D = () => {
  const { selectedDate, selectedGrafic, updateSelectedDay } =
    useDashboardContext();
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );

  const handleClick = (btt: ButtonsProp) => {
    setFocusedButton(btt.title);
    updateSelectedDay(btt.title);
  };

  return (
    <>
      {selectedDate === "7D" && selectedGrafic !== "Pulso" && (
        <>
          {list7DiasButton.map((btt: ButtonsProp, index) => (
            <ButtonFilter
              key={index}
              title={btt.title}
              onClick={() => handleClick(btt)}
              isFocused={isFocusedButton === btt.title}
            />
          ))}
        </>
      )}
    </>
  );
};

export default FilterButtons7D;
