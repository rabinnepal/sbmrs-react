// import { Box } from "@mui/system";
// import React from "react";
// import { MdAlternateEmail } from "react-icons/md";
// import { BiLockAlt } from "react-icons/bi";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { APIclass } from "../../config";
// const Login = () => {
//   //   const api = new APIclass();
//   //   const navigate = useNavigate();
//   //   const loginUser = async (e) => {
//   //     e.preventDefault();
//   //     const { email, password } = e.target.elements;
//   //     const userCredentials = {
//   //       email: email.value,
//   //       password: password.value,
//   //     };
//   //     console.log(userCredentials);
//   //     try {
//   //       const res = await axios.post(`${api.baseUrl}login`, userCredentials);
//   //       console.log(res.data);
//   //       if (res.data.status === 200) {
//   //         // localStorage.setItem("name", res.data.newData.name);
//   //         localStorage.setItem("token", res.data.newData.token);
//   //         localStorage.setItem("id", res.data.newData.id);
//   //         localStorage.setItem("role", res.data.newData.role);

//   //         if (res.data.newData.role === "admin") {
//   //           window.location.href = "/admin/dashboard";
//   //         } else {
//   //           window.location.href = "/";
//   //         }
//   //       } else {
//   //         alert(res.data.message);
//   //       }
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//       }}
//       className="bg-gradient-to-r from-cyan-500 to-blue-500"
//     >
//       <Box className="text-white mb-10 text-3xl font-bold">
//         Sentiment Based Movie Rating System
//       </Box>
//       <Box className=" flex flex-col  bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl  w-96 ">
//         <Box className="font-medium self-center text-xl sm:text-3xl text-gray-800">
//           Welcome back...
//         </Box>
//         <Box className="mt-8">
//           <form>
//             {/* <form onSubmit={loginUser}> */}
//             <Box
//               sx={{
//                 mb: "1.5rem",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <label
//                 htmlFor="email"
//                 className="mb-1 text-xs tracking-wide text-gray-600"
//               >
//                 Username:
//               </label>
//               <Box className="relative">
//                 <Box className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10  text-gray-400 ">
//                   <MdAlternateEmail />
//                 </Box>
//                 <input
//                   id="username"
//                   name="username"
//                   required
//                   className=" text-sm  placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
//                   placeholder="Enter username"
//                 />
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 mb: "1.5rem",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               <label
//                 htmlFor="password"
//                 className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
//               >
//                 Password:
//               </label>
//               <Box
//                 sx={{
//                   position: "relative",
//                 }}
//               >
//                 <Box className=" inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
//                   <span>
//                     <BiLockAlt />
//                   </span>
//                 </Box>
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   required
//                   className=" text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
//                   placeholder="Enter your password"
//                 />
//               </Box>
//             </Box>
//             <Box>
//               <Link
//                 // to="/forgot-password"
//                 className=" inline-flex items-center  text-gray-700 font-medium text-sm text-center "
//               >
//                 <a className="ml-2 text-decoration-line">Forgot password?</a>
//               </Link>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 width: "100%",
//               }}
//             >
//               <button
//                 type="submit"
//                 className=" flex mt-2 items-center justify-center focus:outline-none  text-white text-sm sm:text-base  bg-blue-500  hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
//               >
//                 <span className="mr-2 uppercase">Login</span>
//                 <span>
//                   <BsFillArrowRightCircleFill className="text-[1.2rem]" />
//                 </span>
//               </button>
//             </Box>
//           </form>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           mt: "1.5rem",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Link
//           to="/signup"
//           className=" inline-flex items-center  text-gray-700 font-medium text-xs text-center "
//         >
//           <span className="ml-2 text-white">
//             If you haven’t registered yourself then please click,
//             <Box
//               sx={{
//                 display: "flex",
//                 width: "100%",
//               }}
//             >
//               <button
//                 type="submit"
//                 className=" flex mt-2 items-center justify-center focus:outline-none  text-white text-sm sm:text-base  bg-blue-700  hover:bg-blue-500 rounded-2xl py-2 w-full transition duration-150 ease-in"
//               >
//                 <span className="mr-2 uppercase">Register</span>
//                 <span></span>
//               </button>
//             </Box>
//           </span>
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default Login;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// import { useState } from "react";
// import axios from "axios";
// import { APIClass } from "../Constants/api";

const theme = createTheme();

export default function Login() {
  //   const api = new APIClass();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     let config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         token: `${localStorage.getItem("token")}`,
  //       },
  //     };
  //     const data = new FormData(e.currentTarget);

  //     let formData = {
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     };
  //     await axios
  //       .post(`${api.baseURL}user/login`, formData, config)
  //       .then((res) => {
  //         console.log(res);
  //         if (res.data.status === 200) {
  //           localStorage.setItem("token", res.data.token);

  //           if (res.data.emailExists.role === "user") {
  //             window.location.href = "/";
  //           } else if (res.data.emailExists.role === "vendor") {
  //             window.location.href = "/vendor/my-jobs";
  //           } else {
  //             window.location.href = "/admin/approve-vendors";
  //           }
  //         } else {
  //           alert("error");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // background: "red",
        zIndex: 11,
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", pt: 3, fontWeight: 600 }}
      >
        Sentiment Based Movie Rating System
      </Typography>
      {/* <Container component="main" maxWidth="sm"> */}
      {/* <CssBaseline /> */}
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box sx={{ width: 400, p: 3 }}>
          {/* <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          > */}
          <Typography>Email Address:</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Typography>Password:</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
          <Box>
            <Link to="/forgot-password" style={{ color: "black" }}>
              Forgot password?
            </Link>
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            If you haven’t registered yourself then please click,
          </Link>
          <Button variant="contained" sx={{ display: "block", mt: 1, px: 17 }}>
            Register
          </Button>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
