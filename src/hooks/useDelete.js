import { useState } from "react";
// import { handleSubmit } from "../services/contollers";
import axios from "axios";
import { baseUrl } from "../services/controller";
import { notification } from "antd";

const useDelete = (initialData) => {
  const [data, setData] = useState(initialData);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (payload, refetch, setIsModalOpen) => {
    setIsDeleting(true);
    setError(null);

    try {
      const response = await axios.delete(`${baseUrl}/committees/${payload}`);

      setData(response);
      setIsModalOpen({ update: false });
      notification.success({
        message: response.data.msg,
        style: { marginTop: "40px" },
      });
      refetch();
      if (!response.status === 200) {
        throw new Error("An error occurred while posting the data.");
      }
      return response;
    } catch (error) {
      setError(error.message);
      return error;
    } finally {
      setIsDeleting(false);
    }
  };

  return { data, isDeleting, error, deleteData };
};

export default useDelete;
