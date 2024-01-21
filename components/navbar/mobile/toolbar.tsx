import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ToolbarComponentProps } from "@/utils/types";
import styles from "./styles/toolbar.module.css";

const ToolbarComponent: React.FC<ToolbarComponentProps> = ({
  openDrawerHandler,
}) => {
  return (
    <div className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            aria-label="open drawer"
            onClick={openDrawerHandler}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ToolbarComponent;
