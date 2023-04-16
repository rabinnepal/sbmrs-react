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

export default function ResetLostPassword() {
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

          <Typography>New Password:</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-password"
            label="New Password"
            type="password"
          />
          <Typography>Re-enter New Password:</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            name="re-password"
            label="Re-enter New Password"
            type="re-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
