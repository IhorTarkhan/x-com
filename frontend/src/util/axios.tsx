import { getCookie, PLAYER } from "./cookie";

export const axios = require("axios");

axios.interceptors.request.use((req: { headers: any }) => {
  const playerUuid = getCookie(PLAYER);
  req.headers.unauthorized_customer = playerUuid ? playerUuid : "";
  return req;
});
