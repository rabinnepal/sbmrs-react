import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { APIClass } from "../../APICaller/APICaller";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function Login() {
  const api = new APIClass();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    let formData = {
      userName: data.get("userName"),
      password: data.get("password"),
    };
    if (formData.password !== "" || formData.userName !== "") {
      try {
        let res = await axios.post(
          `${api.baseURL}user/login`,
          formData,
          api.configData
        );

        console.log(res);
        if (res.data.success === true) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.user._id);
          // setIsAuthenticated(true);

          if (res.data.user.role === "User") {
            window.location.href = "/";
          } else if (res.data.user.role === "Admin") {
            window.location.href = "/admin/display-movies";
          } else {
            alert("error");
          }
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Box
      className="background"
      color="white"
      sx={{
        minHeight: "100vh",
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
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: 400, p: 3 }}
        >
          <Typography>Username:</Typography>
          <TextField
            sx={{ border: "1px solid white" }}
            inputProps={{ style: { color: "white" } }}
            margin="normal"
            required
            fullWidth
            size="small"
            label={<Typography sx={{ color: "white" }}>Username</Typography>}
            name="userName"
            autoFocus
          />
          <Typography>Password:</Typography>
          <TextField
            sx={{ border: "1px solid white" }}
            inputProps={{ style: { color: "white" } }}
            margin="normal"
            required
            fullWidth
            size="small"
            name="password"
            label={<Typography sx={{ color: "white" }}>Password</Typography>}
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Box>
            <Link to="/forgot-password" style={{ textDecoration: "underline" }}>
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
          If you haven’t registered yourself then please click,
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ display: "block", mt: 1, px: 17 }}
            >
              Register
            </Button>
          </Link>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
