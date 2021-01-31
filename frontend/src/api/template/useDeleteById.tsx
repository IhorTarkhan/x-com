import { useEffect, useState } from "react";
import axios from "axios";
import { ErrorResponse } from "./ErrorResponse";

export const useDeleteById = (
  url: string,
): [
  (id: number) => void,
  boolean | undefined,
  { message: string } | undefined,
] => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<ErrorResponse>();
  const [deletingId, setGettingId] = useState<number>();

  useEffect(() => {
    if (!deletingId) return;
    (async (id: number) => {
      setIsLoading(true);
      try {
        await axios.delete(url + id);
      } catch (e) {
        setError({
          status: e.response?.status,
          message: e.response?.data,
        });
      }
      setIsLoading(false);
    })(deletingId);
  }, [url, deletingId]);

  return [setGettingId, isLoading, error];
};
