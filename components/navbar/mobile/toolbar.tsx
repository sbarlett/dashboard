import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import { ToolbarComponentProps } from '../../../utils/types';
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
