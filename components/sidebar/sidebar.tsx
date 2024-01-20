import React from "react";
import styles from "./styles/sidebar.module.css";
import SideBarButtons from "../buttons/sidebar/sidebar-buttons";
import TargetsSideBarComponent from "./targets/targets-sidebar";
import ArrowBack from "../assets/arrow-back";
import { useDashboardContext } from "@/store/global";
import {
  listButtonsSideBar,
  operacionesProximosTresMeses,
} from "@/utils/functions";
import { transsaction } from "@/utils/mock";
import useIsMobile from "@/hooks/useMobile";

const SideBarComponent = () => {
  const { updateSelectedGrafic } = useDashboardContext();
  const [isTarget, setIsTarget] = React.useState(true);
  const [isFocusedButton, setFocusedButton] = React.useState<string | null>(
    null
  );
  React.useEffect(() => {
    const initializeFocus = () => {
      setFocusedButton("Gráfico");
      updateSelectedGrafic("Gráfico");
    };
    initializeFocus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (btt) => {
    setFocusedButton(btt.title);
    updateSelectedGrafic(btt.title);
  };

  const handleTarget = () => {
    setIsTarget((prevIsTarget) => !prevIsTarget);
  };

  const informacionRenderizada = operacionesProximosTresMeses(transsaction);
  const isMobile = useIsMobile();
  return (
    <div className={!isMobile ? styles.sidebarContainer : styles.sidebarMobileContainer}>
      {!isMobile && (
        <div className={styles.sidebarButtonContainer}>
          <div className={styles.buttonContainer}>
            {listButtonsSideBar.map((btt, index) => (
              <SideBarButtons
                key={index}
                text={btt.title}
                onClick={() => handleClick(btt)}
                isFocus={isFocusedButton === btt.title}
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
