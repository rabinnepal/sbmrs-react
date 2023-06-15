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

export default function ForgotPassword() {
  const api = new APIClass();
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        token: `${localStorage.getItem("token")}`,
      },
    };
    const data = new FormData(e.currentTarget);

    let formData = {
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
    };
    if (password1 !== password2) {
      alert("Passwords don't match!");
      return;
    }
    if (passwordError === true) {
      alert("Password must contain symbols and numbers.");
      return;
    }

    if (
      formData.email !== "" ||
      formData.password !== "" ||
      formData.confirmPassword !== ""
    ) {
      try {
        let res = await axios.post(
          `${api.baseURL}user/forgot-password`,
          formData,
          config
        );

        console.log(res);
        if (res.data.success === true) {
          alert(res.data.message);
          window.location.href = "/login";
        } else {
          alert(res.data.message);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please enter all required fields");
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword1(password);

    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const isComplex = hasSymbol && hasNumber;
    console.log(isComplex);

    setPasswordError(!isComplex);
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
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Box sx={{ width: 400, p: 3 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography>Email:</Typography>
            <TextField
              sx={{ border: "1px solid white" }}
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              size="small"
              label={<Typography sx={{ color: "white" }}>Email</Typography>}
              name="email"
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
              onChange={(e) => {
                setPassword1(e.target.value);
                handlePasswordChange(e);
              }}
            />
            <Typography>Re-enter password:</Typography>
            <TextField
              sx={{ border: "1px solid white" }}
              inputProps={{ style: { color: "white" } }}
              margin="normal"
              required
              fullWidth
              size="small"
              name="confirmPassword"
              label={
                <Typography sx={{ color: "white" }}>
                  Confirm Password
                </Typography>
              }
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
            <Link to="/login">
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Go Back
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* </Container> */}
    </Box>
  );
}
