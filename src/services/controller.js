import { notification } from "antd";
import axios from "axios";
// import env from "react-dotenv";
// export const baseUrl = import.meta.env.VITE_API_BASE_URL;
// export const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const baseUrl = "https://sayf-new.fly.dev";
// const baseUrl = "https://sayf-new.fly.dev";

export async function getAllUsers() {
  const response = await axios.get(`${baseUrl}/records`);
  return response.data;
}

export async function handleSubmit(data) {
  const formData = new FormData();
  if (data?.file) {
    formData.append("file", data?.file);
    formData.append("fullname", data?.fullname);
    formData.append("gender", data?.gender);
    formData.append("phone", data?.phone);
    formData.append("committee", data?.committee);
  }

  try {
    const response = await axios.post(`${baseUrl}/committees`, formData);
    console.log(response.data);
    if (response.data.success) {
      notification.success({
        message: response.data.msg,
        style: { marginTop: "40px" },
      });
    }
    return response;
  } catch (error) {
    return error;
  }
}

export async function handleUpdatehttp(data) {
  const formData = new FormData();
  if (data?.file) {
    formData.append("file", data?.file);
    formData.append("fullname", data?.fullname);
    formData.append("yr", data?.yr);
    formData.append("phone", data?.phone);
    formData.append("address", data?.address);
    formData.append("geo", data?.geo);
  }

  try {
    const results = await axios.patch(`${baseUrl}/${data._id}`, formData);
    return results;
  } catch (error) {
    return error;
  }
}

export async function handleDeletehttp(id) {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response;
}

// Graduated
export async function getAllGradHttp() {
  const response = await axios.get(`${baseUrl}/grad`);
  return response.data;
}

export async function postGradHttp(data) {
  try {
    const response = await axios.post(`${baseUrl}/grad`, data);
    return response;
  } catch (error) {
    return error;
  }
}
