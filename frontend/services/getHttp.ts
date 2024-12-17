import { useQuery } from "@tanstack/react-query";
import { Toastify } from "@/functions/Toastify";
import furnioInstance from "./http";

type Props = {
  queryKey: unknown[];
  service: string;
  params?: unknown;
};

const getHttp = <T>({ queryKey, service, params }: Props) =>
  useQuery<T>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await furnioInstance.get(service, { params });
        return response.data;
      } catch (error: any) {
        Toastify({
          color: "error",
          message: error.response?.data?.error || "Error occurred",
        });
        throw error;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 10 * (60 * 1000),
  });

export default getHttp;
