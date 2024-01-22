import React from "react";
import styles from "./styles/toolbar.module.css";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ToolbarComponentProps } from "../../../utils/types";

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
