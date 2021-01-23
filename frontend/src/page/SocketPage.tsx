import React, { ReactElement, useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { NavigationPanel } from "../component/NavigationPanel";
import SockJS from "sockjs-client";
import { CompatClient, Stomp } from "@stomp/stompjs";
import { host, websocketUrl, websocketBrokerUrl } from "../constant/url";

export const SocketPage = (): ReactElement => {
  const [client, setClient] = useState<CompatClient | undefined>();
  const [name, setName] = useState<string>();

  useEffect(() => {
    if (!client) return;
    client.connect({}, () => {
      client.subscribe(`${websocketBrokerUrl}/2`, (resp: any) => {
        console.warn(resp.body);
      });
    });
  }, [client]);

  const openSocket = () => {
    const connection = new SockJS(`${host}${websocketUrl}`);
    connection.onerror = (ev: any) => console.error(ev);
    setClient(Stomp.over(() => connection));
  };

  const closeSocket = () => {
    client?.disconnect();
    setClient(undefined);
  };

  const sendSocket = () => {
    client?.send(
      `${websocketUrl}/d/1`,
      {},
      JSON.stringify({
        email: "from",
        password: "text",
      })
    );
  };

  return (
    <>
      <NavigationPanel />
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
