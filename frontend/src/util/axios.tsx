import { getCookie, PLAYER, PLAYER_LONG, setCookie } from "./cookie";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { host, playerUpdateShortJwtUrl } from "../constant/url";

export const axios = require("axios");

axios.interceptors.request.use(async (req: { headers: any; url: string }) => {
  if (req.url.substr(host.length) === playerUpdateShortJwtUrl) {
    const playerJwtLong = getCookie(PLAYER_LONG);
    req.headers["player-long"] = playerJwtLong ? playerJwtLong : "";
    return req;
  }
  const playerJwt = getCookie(PLAYER);
  if (playerJwt) {
    const exp = (jwtDecode<JwtPayload>(playerJwt).exp || 0) * 1000;
    const now = new Date().getTime();
    if (exp < now + 5000) {
      const newJwt = (await axios.post(host + playerUpdateShortJwtUrl)).data;
      setCookie(PLAYER, newJwt);
    }
  }
  req.headers["player"] = playerJwt ? playerJwt : "";
  return req;
});
