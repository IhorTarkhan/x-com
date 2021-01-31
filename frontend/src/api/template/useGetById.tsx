import { useEffect, useState } from "react";
import { axios } from "../../util/axios";
import { ErrorResponse } from "./ErrorResponse";

export const useGetById = <RESPONSE_TYPE,>(
  url: string
): [
  (id: number) => void,
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<ErrorResponse>();
  const [gettingId, setGettingId] = useState<number>();

  useEffect(() => {
    if (!gettingId) return;
    (async (id: number) => {
      setIsLoading(true);
      try {
        let resp = (await axios.get(url + id)).data;
        setResponseData(resp);
      } catch (e) {
        setError({
          status: e.response?.status,
          message: e.response?.data,
        });
      }
      setIsLoading(false);
    })(gettingId);
  }, [url, gettingId]);

  return [setGettingId, responseData, isLoading, error];
};
