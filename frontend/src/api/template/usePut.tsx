import { useEffect, useState } from "react";
import axios from "axios";

export const usePut = <PUT_TYPE, RESPONSE_TYPE>(
  url: string
): [
  (data: PUT_TYPE) => void,
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  const [puttingData, setPuttingData] = useState<PUT_TYPE>();
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<{ message: string }>();

  useEffect(() => {
    if (!url) return;
    if (!puttingData) return;
    const putData = async (puttingData: PUT_TYPE) => {
      setIsLoading(true);
      try {
        let resp: RESPONSE_TYPE = (await axios.put(url, puttingData)).data;
        setResponseData(resp);
      } catch (e) {
        console.error(e);
        setError(e);
      }
      setIsLoading(false);
    };
    putData(puttingData);
  }, [url, puttingData]);

  return [setPuttingData, responseData, isLoading, error];
};
