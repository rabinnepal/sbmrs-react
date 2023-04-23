const token = `Bearer${localStorage.getItem("token")}`;
const id = `${localStorage.getItem("id")}`;

export class APIClass {
  baseURL = "http://localhost:8000/api/";
  // imgURL = "/home/rabin/proj/proj/sbmrs_server/controllers/upload/";
  // imgURL = "http://localhost:8000/";
  configImage = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  };
  configData = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  configToken = {
    headers: {
      Authorization: token,
    },
  };
}
