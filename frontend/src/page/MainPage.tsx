import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useGetUserById,
  useGetUsers,
  useDeleteUserById,
  usePostUser,
  usePutUser,
} from "../api/unitApi";

const useStyles = makeStyles(() => ({
  button: {
    color: "blue",
  },
}));

export const MainPage = (): ReactElement => {
  const styles = useStyles();

  const [setGettingId, , ,] = useGetUserById();
  const [update, , ,] = useGetUsers();
  const [del, ,] = useDeleteUserById();
  const [post, , ,] = usePostUser();
  const [put, , ,] = usePutUser();

  return (
    <>
      <Button className={styles.button} onClick={(): void => setGettingId(1)}>
        Get by id
      </Button>
      <Button variant="outlined" onClick={(): void => update()}>
        Get update
      </Button>
      <Button variant="outlined" onClick={(): void => del(888)}>
        Delete
      </Button>
      <Button
        variant="outlined"
        onClick={(): void =>
          post({
            id: 1,
            name: "2",
            type: "3",
            maxHealth: 2,
            health: 3,
          })
        }
      >
        POST
      </Button>
      <Button
        variant="outlined"
        onClick={(): void =>
          put({
            id: 4,
            name: "1",
            type: "4",
            maxHealth: 3,
            health: 2,
          })
        }
      >
        PUT
      </Button>
    </>
  );
};
