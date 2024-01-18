import ButtonNavBar from "@/components/buttons/navbar/button-navbar";
import ButtonUser from "@/components/buttons/navbar/button-user";
import { listButtons } from "@/utils/functions";
import React from "react";
import styles from "../styles/desktop-navbar.module.css";
import { useRouter } from "next/router";

const DesktopNavBar = () => {
  const router = useRouter();

  const [focusedButton, setFocusedButton] = React.useState(null);

  React.useEffect(() => {
    const currentPath = router.pathname;

    const currentButton = listButtons.find((btt) =>
      currentPath.startsWith(btt.route)
    );

    if (currentButton) {
      setFocusedButton(currentButton.title);
    } else {
      setFocusedButton(listButtons[0].title);
    }
  }, [router.pathname]);

  const handleClick = (btt) => {
    setFocusedButton(btt.title);
    router.push(btt.route);
  };
  return (
    <div className={styles.navBarFullWidht}>
      <div className={styles.containerButtons}>
        <div className={styles.spacingButton}>
          {listButtons.map((btt, index) => (
            <ButtonNavBar
              key={index}
              textButton={btt.title}
              onClick={() => handleClick(btt)}
              isFocused={focusedButton === btt.title}
            />
          ))}
        </div>
        <ButtonUser />
      </div>
    </div>
  );
};

export default DesktopNavBar;
