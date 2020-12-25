import { useEffect, useState } from "react";
import axios from "axios";

export const useGet = <RESPONSE_TYPE,>(
  url: string
): [
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  { message: string } | undefined,
  () => void
] => {
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<{ message: string }>();
  const [update, setUpdate] = useState<{}>({});

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        let resp: RESPONSE_TYPE = (await axios.get(url)).data;
        setResponseData(resp);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    getData();
  }, [url, update]);

  return [responseData, isLoading, error, () => setUpdate({})];
};
