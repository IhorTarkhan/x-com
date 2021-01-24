export const PLAYER = "xcom_online_player";
export const PLAYER_LONG = "xcom_online_player_long";

export const getCookie = (name: string): string | undefined => {
  return document.cookie
    .split(";")
    .map((c) => c.trim())
    .find((cookie) => cookie.startsWith(name + "="))
    ?.substr(name.length + 1);
};

export const setCookie = (name: string, value: string, days?: number) => {
  const date = new Date(
    new Date().getTime() + 24 * 60 * 60 * 1000 * (days ? days : 40)
  ).toUTCString();
  document.cookie = `${name}=${value}; expires=${date}; path=/`;
};
