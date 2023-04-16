// import { Box } from "@mui/system";
// import React from "react";
// import { BsFillPersonFill } from "react-icons/bs";
// import { MdAlternateEmail } from "react-icons/md";
// import { BiLockAlt } from "react-icons/bi";
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";
// import { Grid } from "@mui/material";
// // import axios from "axios";
// // import { APIclass } from "../../config";
// const Register = () => {
//   //   const api = new APIclass();
//   //   const navigate = useNavigate();
//   //   const createUser = async (e) => {
//   //     e.preventDefault();
//   //     const { name, email, password } = e.target.elements;
//   //     const user = {
//   //       name: name.value,
//   //       email: email.value,
//   //       password: password.value,
//   //     };
//   //     console.log(user);
//   //     try {
//   //       const res = await axios.post(`${api.baseUrl}register`, user);
//   //       console.log(res.data);
//   //       if (res.data.status === 200) {
//   //         navigate("/login");
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
//       <Box className="text-white mb-4 mt-0 text-3xl font-bold">
//         Sentiment Based Movie Rating System
//       </Box>
//       <Box className=" flex flex-col  bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md ">
//         <Box className="font-medium self-center text-xl sm:text-3xl text-gray-800">
//           Join us Now
//         </Box>
//         <Box className="mt-1 self-center text-xl sm:text-sm text-gray-800">
//           Enter your credentials to get access account
//         </Box>

//         <Grid
//           container
//           sx={{
//             mt: "1.5rem",
//           }}
//         >
//           <form>
//             {/* <form onSubmit={createUser}> */}
//             <Grid
//               item
//               xs={4}
//               sx={{
//                 mb: ".5rem",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="email"
//                 className="mb-1 text-xs tracking-wide text-gray-600 "
//               >
//                 Username:
//               </label>
//               <Grid item xs={8} className="relative">
//                 <input
//                   id="username"
//                   type="text"
//                   name="username"
//                   required
//                   className=" text-sm  placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-48 py-2 focus:outline-none focus:border-blue-400 "
//                   placeholder="Enter your username"
//                 />
//               </Grid>
//             </Grid>
//             <Grid
//               item
//               xs={4}
//               sx={{
//                 mb: ".5rem",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="email"
//                 className="mb-1 text-xs tracking-wide text-gray-600 "
//               >
//                 Name:
//               </label>
//               <Grid item xs={12} className="relative">
//                 <input
//                   id="name"
//                   type="text"
//                   name="name"
//                   required
//                   className=" text-sm  placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-48 py-2 focus:outline-none focus:border-blue-400 "
//                   placeholder="Enter your name"
//                 />
//               </Grid>
//             </Grid>
//             <Box
//               sx={{
//                 mb: ".5em",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="email"
//                 className="mb-1 text-xs tracking-wide text-gray-600"
//               >
//                 E-Mail Address:
//               </label>
//               <Box className="relative">
//                 <input
//                   id="email"
//                   type="email"
//                   name="email"
//                   required
//                   className=" text-sm  placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 "
//                   placeholder="Enter your email"
//                 />
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 mb: ".5em",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="password"
//                 className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
//               >
//                 Password:
//               </label>
//               <Box className="relative">
//                 <input
//                   id="password"
//                   type="password"
//                   name="password"
//                   required
//                   className=" text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
//                   placeholder="Enter your password"
//                 />
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 mb: ".5em",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="password"
//                 className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
//               >
//                 Re-enter Password:
//               </label>
//               <Box className="relative">
//                 <input
//                   id="re-password"
//                   type="password"
//                   name="re-password"
//                   required
//                   className=" text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
//                   placeholder="Enter your password again"
//                 />
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 mb: ".5em",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: 2,
//               }}
//             >
//               <label
//                 htmlFor="phone"
//                 className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
//               >
//                 Phone number:
//               </label>
//               <Box className="relative">
//                 <input
//                   id="phone"
//                   type="number"
//                   name="phone"
//                   required
//                   className=" text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
//                   placeholder="Enter your phone number"
//                 />
//               </Box>
//             </Box>

//             <Box className="flex w-full">
//               <button
//                 type="submit"
//                 className=" flex mt-2 items-center justify-center focus:outline-none  text-white text-sm sm:text-base  bg-blue-500  hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
//               >
//                 <span className="mr-2 uppercase">Register</span>
//                 <span>
//                   <BsFillArrowRightCircleFill className="text-[1.2rem]" />
//                 </span>
//               </button>
//             </Box>
//           </form>
//         </Grid>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           mt: "1.5rem",
//           justifyContent: "center",
//         }}
//       >
//         <Link
//           to="/login"
//           className=" inline-flex items-center  text-gray-700 font-medium text-xl text-center "
//         >
//           <span className="ml-2 text-white">
//             Already signed up?
//             <p
//               href="#"
//               className="text-xs ml-2 text-blue-500 font-semibold text-white"
//             >
//               Login here
//             </p>
//           </span>
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default Register;

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

// import axios from "axios";

// import { useEffect, useState } from "react";
// import { APIClass } from "../Constants/api";

const theme = createTheme();

export default function Register() {
  //   const api = new APIClass();

  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     let config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     };
  //     const data = new FormData(e.currentTarget);

  //     let formData = {
  //       name: data.get("name"),
  //       email: data.get("email"),
  //       password: data.get("password"),
  //     };
  //     await axios
  //       .post(`${api.baseURL}user/register`, formData, config)
  //       .then((res) => {
  //         console.log(res);
  //         window.location.href = "login/";
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Grid container sx={{ width: 600, p: 3, alignItems: "center" }}>
          {/* <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          > */}
          <Grid item xs={4}>
            <Typography>Name :</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="name"
              label="Enter your name "
              name="name"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Username:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="username"
              label="Enter your username"
              name="username"
              autoComplete="username"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Password:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="password"
              label="Enter your password"
              name="password"
              autoComplete="password"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Re-enter Password:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="re-password"
              label="Re-enter your password"
              name="re-password"
              autoComplete="re-password"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Phone number:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="phone"
              label="Enter your phone number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Email Address:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              id="email"
              label="Enter your Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
              Sign In
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: ".5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Aleady signed up? Click here
          </Link>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
