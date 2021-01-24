import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { SignInRequest } from "../dto/request/SignInRequest";

const useStyles = makeStyles(() => ({
  root: {},
}));

interface Props {
  isOpen: boolean;
  close: () => void;
  signIn: (request: SignInRequest) => void;
}

export function SignInPopup(props: Props) {
  const { isOpen, close, signIn } = props;
  const classes = useStyles();

  return (
    <Dialog
      className={classes.root}
      open={isOpen}
      onEscapeKeyDown={close}
      fullWidth={true}
      maxWidth={"xs"}
    >
      <DialogTitle>Sign In to `XCOM online`</DialogTitle>
      <DialogContent>fff</DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            signIn({
              username: "string",
              password: "string",
            })
          }
          color="primary"
        >
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
}
