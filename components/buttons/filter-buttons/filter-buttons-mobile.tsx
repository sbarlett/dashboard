import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { buttonsDateMobile, normalizeFilterDates } from "@/utils/functions";
import styles from "../styles/filter-buttons-mobile.module.css";
import { useDashboardContext } from "@/store/global";

export default function ButtonsDataMobile() {
  const { updateSelectedDate } = useDashboardContext();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [isFocused, setFocused] = React.useState<string | null>(null);
  const [textField, settextField] = React.useState<string>("HOY");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent, item?: any) => {
    settextField(item?.title);
    setFocused(item?.title);
    updateSelectedDate(normalizeFilterDates(item?.title));
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    settextField("HOY");
  }, []);

  return (
    <Stack
      direction="row"
      spacing={2}
      marginTop={"20px"}
      justifyContent={"end"}
    >
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={styles.buttonContainer}
        >
          {textField || (textField === undefined && "Filter")}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{ zIndex: 1 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    className={styles.listButton}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {buttonsDateMobile.map((item, index) => (
                      <MenuItem
                        key={index}
                        onClick={(e) => handleClose(e, item)}
                        onFocus={(e) => {
                          if (isFocused === item.title) {
                          }
                        }}
                        className={styles.optionsWrapper}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
