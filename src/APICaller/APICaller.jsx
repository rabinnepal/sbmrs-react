export class APIClass {
  baseURL = "http://localhost:8000/api/";
  // imgURL = "http://localhost:8000/";
  configToken = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      token: `${localStorage.getItem("token")}`,
    },
  };
  config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}
