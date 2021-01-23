import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorResponse } from "./ErrorResponse";

export const usePost = <POST_TYPE, RESPONSE_TYPE>(
  urlParam: string
): [
  (data: POST_TYPE, url?: string) => void,
  RESPONSE_TYPE | undefined,
  boolean | undefined,
  ErrorResponse | undefined
] => {
  const [url, setUrl] = useState<string>(urlParam);
  const [postingData, setPostingData] = useState<POST_TYPE>();
  const [responseData, setResponseData] = useState<RESPONSE_TYPE>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<ErrorResponse>();

  useEffect(() => {
    if (!postingData) return;
    const postData = async (postingData: POST_TYPE) => {
      setIsLoading(true);
      try {
        let resp = (await axios.post(url, postingData)).data;
        setResponseData(resp);
      } catch (e) {
        setError({ status: e.response.status, message: e.response.data });
      }
      setIsLoading(false);
    };
    postData(postingData);
  }, [url, postingData]);

  return [
    (data: POST_TYPE, url?: string) => {
      url && setUrl(url);
      setPostingData(data);
    },
    responseData,
    isLoading,
    error,
  ];
};
