import React from "react";
import ButtonFilter from "../button-filter";
import { listButtonClient1, listButtonClient2 } from "@/utils/functions";
import { useDashboardContext } from "@/store/global";
import styles from "../styles/filter-buttons-client.module.css";

const FilterButtonsClient = () => {
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );
  const { updateSelectedClient } = useDashboardContext();

  const handleClick = (btt) => {
    if (btt.button1) {
      setFocusedButton(btt.button1);
      updateSelectedClient(btt.button1);
    } else {
      setFocusedButton(btt.button2);
      updateSelectedClient(btt.button2);
    }
  };

  React.useEffect(() => {
    const initializeFocus = () => {
      setFocusedButton("Clientes");
      updateSelectedClient("Clientes");
    };
    initializeFocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.buttonContiner}>
        {listButtonClient1.map((btt, index) => (
          <ButtonFilter
            key={index}
            title={btt.button1}
            onClick={() => handleClick(btt)}
            isFocused={isFocusedButton === btt.button1}
            isClientButton={isFocusedButton !== btt.button1}
          />
        ))}
      </div>

      <div className={styles.buttonContiner}>
        {listButtonClient2.map((btt, index) => (
          <ButtonFilter
            key={index}
            title={btt.button2}
            onClick={() => handleClick(btt)}
            isFocused={isFocusedButton === btt.button2}
            isClientButton={isFocusedButton !== btt.button2}
          />
        ))}
      </div>
    </>
  );
};

export default FilterButtonsClient;
