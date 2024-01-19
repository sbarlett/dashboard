import { asyncFetchApi } from "@/utils/functions";
import { DataOperation } from "@/utils/types";
import { useQuery } from "react-query";

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
};
