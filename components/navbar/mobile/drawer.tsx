import React from "react";
import { useRouter } from "next/router";

import { DrawerComponentProps, ButtonsPropNav } from "../../../utils/types";
import { listButtons } from "../../../utils/functions";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (_theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  text: {
    color: "#644bba",
    fontWeight: 600,
  },
  listContainer: {
    marginTop: "20px",
    marginLeft: "10px",
  },
});

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  classes,
  left,
  toggleDrawerHandler,
}) => {
  const router = useRouter();
  const handleClick = (btt) => {
    router.push(btt.route);
  };
  const sideList = (_side) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawerHandler}
      onKeyDown={toggleDrawerHandler}
    >
      <List className={classes.listContainer}>
        {listButtons.map((item: ButtonsPropNav, index) => (
          <ListItem key={index}>
            <ListItemText
              className={classes.text}
              primary={item.title}
              onClick={() => handleClick(item)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer open={left} onClose={toggleDrawerHandler}>
      {sideList("left")}
    </Drawer>
  );
};

export default withStyles(styles)(DrawerComponent);
