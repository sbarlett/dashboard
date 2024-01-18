import React from "react";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { listButtons } from "@/utils/functions";
import { useRouter } from "next/router";
import { ButtonsPropNav, DrawerComponentProps } from "@/utils/types";

const styles = (_theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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
      <List>
        {listButtons.map((item: ButtonsPropNav, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText
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
