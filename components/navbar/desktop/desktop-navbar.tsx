import React, { KeyboardEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ButtonNavBar from "../../buttons/navbar/button-navbar";
import ButtonUser from "../../buttons/navbar/button-user";
import { ButtonsPropNav } from "../../../utils/types";
import { listButtons } from "../../../utils/functions";
import styles from "../styles/desktop-navbar.module.css";

const DesktopNavBar = () => {
  const router = useRouter();
  const [focusedButton, setFocusedButton] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = router.pathname;
    const currentButton = listButtons?.find((btt) =>
      currentPath.startsWith(btt.route)
    );
    setFocusedButton(currentButton?.title || listButtons[0].title);
  }, [router.pathname]);

  const handleClick = (btt: ButtonsPropNav) => {
    setFocusedButton(btt.title);
    router.push(btt.route);
  };

  const handleKeyPress = (
    event: KeyboardEvent<HTMLDivElement>,
    btt: ButtonsPropNav
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleClick(btt);
    }
  };

  return (
    <div className={styles.navBarFullWidht}>
      <div className={styles.containerButtons}>
        <div className={styles.spacingButton}>
          {listButtons.map((btt: ButtonsPropNav, index: number) => (
            <ButtonNavBar
              key={index}
              textButton={btt.title}
              onClick={() => handleClick(btt)}
              isFocused={focusedButton === btt.title}
              onKeyPress={(event: KeyboardEvent<HTMLDivElement>) =>
                handleKeyPress(event, btt)
              }
              tabIndex={0}
            />
          ))}
        </div>
        <ButtonUser />
      </div>
    </div>
  );
};

export default DesktopNavBar;
