import { useEffect, useState } from "react";
import { axios } from "../../util/axios";
import { ErrorResponse } from "./ErrorResponse";

export const useGetAll = <RESPONSE_TYPE,>(
  url: string
): [
  () => void,
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<ErrorResponse>();
  const [update, setUpdate] = useState<any>({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let resp = (await axios.get(url)).data;
        setResponseData(resp);
      } catch (e) {
        setError({
          status: e.response?.status,
          message: e.response?.data,
        });
      }
      setIsLoading(false);
    })();
  }, [url, update]);

  return [() => setUpdate({}), responseData, isLoading, error];
};
