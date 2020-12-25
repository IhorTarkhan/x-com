import { useEffect, useState } from "react";
import axios from "axios";

export const usePost = <POST_TYPE, RESPONSE_TYPE>(
  url: string
): [
  (data: POST_TYPE) => void,
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  { message: string } | undefined
] => {
  const [postingData, setPostingData] = useState<POST_TYPE>();
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<{ message: string }>();

  useEffect(() => {
    if (!postingData) return;
    const postData = async (postingData: POST_TYPE) => {
      setIsLoading(true);
      try {
        let resp: RESPONSE_TYPE = (await axios.post(url, postingData)).data;
        setResponseData(resp);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    postData(postingData);
  }, [postingData]);

  return [setPostingData, responseData, isLoading, error];
};
