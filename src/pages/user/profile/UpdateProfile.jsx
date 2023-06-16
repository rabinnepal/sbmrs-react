import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";
import { APIClass } from "../../../APICaller/APICaller";

const UpdateProfileForm = () => {
  const api = new APIClass();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = {
      userName: data.get("userName"),
      email: data.get("email"),
      phoneNumber: data.get("phoneNumber"),
      fullName: data.get("fullName"),
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios.post(
        `${api.baseURL}user/update-details`,
        formData,
        config
      );
      console.log(response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.log(error);
      // Handle error or display an error message to the user
    }
  };

  return (
    <Box
      className="background"
      color="white"
      sx={{
        minHeight: "75vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: "column",
          p: 2,
          width: "70%",
        }}
      >
        <TextField
          sx={{
            border: "1px solid white",
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
          margin="normal"
          fullWidth
          label={<Typography sx={{ color: "white" }}>Username</Typography>}
          name="userName"
          autoFocus
          //   value={formData.userName}
        />
        <TextField
          sx={{
            border: "1px solid white",
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
          margin="normal"
          fullWidth
          label={<Typography sx={{ color: "white" }}>Email</Typography>}
          name="email"
          //   value={formData.email}
        />
        <TextField
          sx={{
            border: "1px solid white",
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
          margin="normal"
          fullWidth
          label={<Typography sx={{ color: "white" }}>Phone Number</Typography>}
          name="phoneNumber"
          //   value={formData.phoneNumber}
        />
        <TextField
          sx={{
            border: "1px solid white",
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
          margin="normal"
          fullWidth
          label={<Typography sx={{ color: "white" }}>Full Name</Typography>}
          name="fullName"
          //   value={formData.fullName}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateProfileForm;
