import React, { KeyboardEvent, useEffect } from "react";
import SideBarButtons from "../buttons/sidebar/sidebar-buttons";
import TargetsSideBarComponent from "./targets/targets-sidebar";
import ArrowBack from "../assets/arrow-back";
import { useDashboardContext } from "../../store/global";
import { getOperationsNextMonths } from "./utils/functions";
import useIsMobile from "../../hooks/useMobile";
import { listButtonsSideBar } from "../../utils/functions";
import { ButtonProps, DataOperationProps } from "../../utils/types";
import styles from "./styles/sidebar.module.css";
import { eventGTM } from "../../components/gtm/functions/gtm-function";

const SideBarComponent: React.FC<DataOperationProps> = ({
  data,
}: DataOperationProps) => {
  const informacionRenderizada = getOperationsNextMonths(data);
  const isMobile = useIsMobile();
  const { updateSelectedGrafic } = useDashboardContext();
  const [isTarget, setIsTarget] = React.useState<boolean>(true);
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );

  useEffect(() => {
    const initializeFocus = () => {
      setFocusedButton("Gráfico");
      updateSelectedGrafic("Gráfico");
    };
    initializeFocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (btt: ButtonProps) => {
    setFocusedButton(btt.title);
    updateSelectedGrafic(btt.title);
    eventGTM({
      action: "search",
      params: {
        search_term: `${btt.title}`,
      },
    });
  };

  const handleTarget = () => {
    setIsTarget((prevIsTarget) => !prevIsTarget);
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLDivElement>,
    btt: ButtonProps
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(btt);
    }
  };

  return (
    <div
      className={
        !isMobile ? styles.sidebarContainer : styles.sidebarMobileContainer
      }
    >
      {!isMobile && (
        <div className={styles.sidebarButtonContainer}>
          <div className={styles.buttonContainer}>
            {listButtonsSideBar.map((btt: ButtonProps, index: number) => (
              <SideBarButtons
                key={index}
                text={btt.title}
                onClick={() => handleClick(btt)}
                isFocus={isFocusedButton === btt.title}
                onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
                  handleKeyPress(event, btt)
                }
                tabIndex={0}
              />
            ))}
          </div>
          {isTarget ? (
            <div className={styles.arrow}>
              <ArrowBack onClick={handleTarget} />
            </div>
          ) : (
            <ArrowBack onClick={handleTarget} />
          )}
        </div>
      )}
      {isTarget && (
        <div className={styles.sidebarCardsContainer}>
          {informacionRenderizada.map((item, index) => (
            <TargetsSideBarComponent key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarComponent;
