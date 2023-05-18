import jwt_decode from "jwt-decode";

const AuthController = () => {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  // if (token) {
  //   const decoded = jwt_decode(token);
  //   return decoded.exp > Date.now() / 1000;
  // }
  // return false;
  if (token && id) {
    return true;
  } else {
    return false;
  }
};

export default AuthController;
