import { useState, useEffect } from "react";

import axios from "axios";
import { baseUrl } from "../services/controller";

const useGetRecord = (url) => {
  console.log(url);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState(0);
  const refetch = () => setFetch((prev) => prev + 1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseUrl}/${url !== "" ? url : ""}`);
        setData(response.data.data);
        if (!response.ok) {
          throw new Error("An error occurred while fetching the data.");
        }

        return response.data.data;
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, fetch]);

  return { data, isLoading, error, refetch };
};

export default useGetRecord;
