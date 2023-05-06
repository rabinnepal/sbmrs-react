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

import { Link } from "react-router-dom";
import { APIClass } from "../../APICaller/APICaller";
import axios from "axios";
const theme = createTheme();

export default function Register() {
  const api = new APIClass();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    let formData = {
      userName: data.get("userName"),
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    let password = data.get("password");
    let repassword = data.get("reassword");
    if (password !== repassword) {
      alert("Passwords don't match!");
      return;
    }

    await axios
      .post(`${api.baseURL}user/register`, formData, api.configData)
      .then((res) => {
        console.log(res);
        // window.location.href = "login/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <Grid
          container
          sx={{ width: 600, p: 3, alignItems: "center" }}
          component="form"
          onSubmit={handleSubmit}
          noValidate
        >
          <Grid item xs={4}>
            <Typography>Username:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              label="Enter your Username"
              name="userName"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Full Name :</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              size="small"
              label="Enter your full name "
              name="fullName"
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
          <Grid item xs={4}>
            <Typography>Password:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              type="password"
              size="small"
              label="Enter your password"
              name="password"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>Re-enter Password:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              margin="normal"
              required
              type="password"
              size="small"
              label="Re-enter your password"
              name="repassword"
            />
          </Grid>

          <Grid item xs={4}></Grid>
          <Grid item xs={5} sx={{ mt: 2 }}>
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
          <Link to="/login" style={{ textDecoration: "none" }}>
            Aleady signed up? Click here
          </Link>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
