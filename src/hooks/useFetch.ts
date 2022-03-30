import { useEffect, useState } from "react";
import { graphql } from "api/graphql";


export default function useFetch(query: string, key?: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await graphql.request(query);
        setData(key ? response[key] : response);
      } catch(error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  return {
    loading,
    error,
    data
  }
}