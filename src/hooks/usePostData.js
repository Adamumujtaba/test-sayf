import { useState } from "react";
// import { handleSubmit } from "../services/contollers";
import axios from "axios";

const usePostData = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload, refetch, setModalIsOpen) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3000/grad", payload);

      setData(response);
      setModalIsOpen(false);
      refetch();
      if (!response.status === 200) {
        throw new Error("An error occurred while posting the data.");
      }
      return response;
    } catch (error) {
      setError(error.message);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postData };
};

export default usePostData;
