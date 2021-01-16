import axios from "axios";
import { API_ROOT } from "../util/api-config";

const axiosRoute = () => {
  const token = localStorage.getItem("token");
  // get API base url

  return axios.create({
    baseURL: API_ROOT,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axiosRoute;
