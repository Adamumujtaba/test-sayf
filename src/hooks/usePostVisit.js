import { useState } from "react";
// import { handleSubmit } from "../services/contollers";
import axios from "axios";
import { baseUrl } from "../services/controller";
import { notification } from "antd";

const usePostVisit = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload, refetch, setIsModalOpen) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    if (payload?.file) {
      formData.append("file", payload?.file);
      formData.append("name", payload?.name);
      formData.append("geo", payload?.geo);
      formData.append("phone", payload?.phone);
      formData.append("address", payload?.address);
      formData.append("yr", payload?.yr);
    }

    try {
      const response = await axios.post(`${baseUrl}/ziyara`, formData);
      setData(response);
      if (response.data.success) {
        setIsModalOpen(false);
        refetch();
        notification.success({
          message: response.data.msg,
          style: { marginTop: "40px" },
        });
      }
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

  const putData = async (payload, refetch, setIsModalOpen) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    if (data) {
      formData.append("file", payload?.file);
      formData.append("name", payload?.name);
      formData.append("geo", payload?.geo);
      formData.append("phone", payload?.phone);
      formData.append("address", payload?.address);
      formData.append("yr", payload?.yr);
    }

    try {
      const response = await axios.patch(
        `${baseUrl}/ziyara/${payload._id}`,
        formData
      );
      setData(response);
      if (response.data.success) {
        setIsLoading(false);
        setIsModalOpen(false);
        refetch();
        notification.success({
          message: response.data.msg,
          style: { marginTop: "40px" },
        });
      }
      if (!response.status === 200) {
        throw new Error("An error occurred while posting the data.");
      }
      return response;
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isPosting: isLoading, error, postData, putData };
};

export default usePostVisit;
