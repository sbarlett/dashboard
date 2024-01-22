import React, { KeyboardEvent, useEffect } from "react";
import ButtonFilter from "../button-filter";
import { listButtonClient1, listButtonClient2 } from "../../../utils/functions";
import { useDashboardContext } from "../../../store/global";
import { ButtonItem } from "../../../utils/types";
import { eventGTM } from "../../gtm/functions/gtm-function";

import styles from "../styles/filter-buttons-client.module.css";

const FilterButtonsClient = () => {
  const { updateSelectedClient } = useDashboardContext();
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );

  useEffect(() => {
    const initializeFocus = () => {
      setFocusedButton("Clientes");
      updateSelectedClient("Clientes");
    };
    initializeFocus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (btt: ButtonItem) => {
    if (btt.button1) {
      setFocusedButton(btt.button1);
      updateSelectedClient(btt.button1);
      eventGTM({
        action: "search",
        params: {
          search_term: `${btt.button1}`,
        },
      });
    } else {
      setFocusedButton(btt.button2);
      updateSelectedClient(btt.button2);
      eventGTM({
        action: "search",
        params: {
          search_term: `${btt.button2}`,
        },
      });
    }
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLDivElement>,
    btt: ButtonItem
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(btt);
    }
  };

  return (
    <>
      <div className={styles.buttonContiner}>
        {listButtonClient1.map((btt: ButtonItem, index: number) => (
          <ButtonFilter
            key={index}
            title={btt.button1}
            onClick={() => handleClick(btt)}
            isFocused={isFocusedButton === btt.button1}
            isClientButton={isFocusedButton !== btt.button1}
            onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
              handleKeyPress(event, btt)
            }
            tabIndex={0}
          />
        ))}
      </div>

      <div className={styles.buttonContiner}>
        {listButtonClient2.map((btt: ButtonItem, index: number) => (
          <ButtonFilter
            key={index}
            title={btt.button2}
            onClick={() => handleClick(btt)}
            isFocused={isFocusedButton === btt.button2}
            isClientButton={isFocusedButton !== btt.button2}
            onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
              handleKeyPress(event, btt)
            }
            tabIndex={0}
          />
        ))}
      </div>
    </>
  );
};

export default FilterButtonsClient;
