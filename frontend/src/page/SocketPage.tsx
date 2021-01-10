// eslint-disable-next-line
import React, { ReactElement, useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";

export const SocketPage = (): ReactElement => {
  const [socket, setSocket] = useState<WebSocket>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (!socket) return;

    socket.onopen = (ev) => {
      console.log("open", ev);
    };
    socket.onmessage = (ev) => {
      console.log("message", ev);
    };
    socket.onerror = (ev) => {
      console.log("error", ev);
    };
    socket.onclose = (ev) => {
      console.log("close", ev);
    };
  }, [socket]);
  const openSocket = () => {
    setSocket(new WebSocket("ws://localhost:9000"));
  };

  const closeSocket = () => {
    if (socket) socket.close();
    else alert("notOpen");
  };

  const sendSocket = () => {
    console.log(socket);
    if (socket) socket.send("some text");
    else alert("notOpen");
  };

  return (
    <>
      <Button onClick={openSocket} color="primary">
        Open
      </Button>
      <TextField
        label={"Your Name"}
        defaultValue={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <Button onClick={sendSocket} color="primary">
        send
      </Button>
      <Button onClick={closeSocket} color="primary">
        Close
      </Button>
    </>
  );
};
