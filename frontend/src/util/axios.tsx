import { getCookie, PLAYER } from "./cookie";
import jwtDecode, { JwtPayload } from "jwt-decode";

export const axios = require("axios");

axios.interceptors.request.use((req: { headers: any }) => {
  const playerUuid = getCookie(PLAYER);
  if (playerUuid) console.log(jwtDecode<JwtPayload>(playerUuid));
  if (playerUuid) console.log(new Date().getTime());
  req.headers.player = playerUuid ? playerUuid : "";
  return req;
});
