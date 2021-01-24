import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: "25vw",
  },
});

interface Props {
  isOpen: boolean;
  close: () => void;
}

export const NavigationMenu = (props: Props) => {
  const classes = useStyles();
  return (
    <Drawer anchor={"left"} open={props.isOpen} onClose={props.close}>
      <List className={classes.list}>
        <ListItem button>
          <ListItemIcon children={<InboxIcon />} />
          <ListItemText primary={"Inbox"} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon children={<InboxIcon />} />
          <ListItemText primary={"Outbox"} />
        </ListItem>
      </List>
    </Drawer>
  );
};
