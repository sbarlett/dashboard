import { useQuery } from "react-query";
import { DataOperation } from "../utils/types";
import { asyncFetchApi } from "../utils/functions";

export function useFetchApiCall(): DataOperation {
  const apiKey = "https://api-serveless-vercel.vercel.app/api/data";
  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["operations"],
    queryFn: () => asyncFetchApi(apiKey),
    staleTime: 300000,
  });

  return { data, isError, isLoading };
}
