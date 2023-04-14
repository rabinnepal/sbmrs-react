import axios from "axios";

const axiosCaller = axios.create({
  //   baseURL: "https://backend.nischal.co/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "x-access-token": `${localStorage.getItem("token")}`,
  },
});

export default axiosCaller;
