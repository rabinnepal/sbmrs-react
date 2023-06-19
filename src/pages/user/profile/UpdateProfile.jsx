import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import { APIClass } from "../../../APICaller/APICaller";

const UpdateProfileForm = () => {
  const api = new APIClass();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

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
      alert(response.data.message);
      // Handle success or display a message to the user
    } catch (error) {
      console.log(error);
      // Handle error or display an error message to the user
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <Box
      className="background"
      color="white"
      sx={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          label={<Typography sx={{ color: "white" }}>Full Name</Typography>}
          name="fullName"
          //   value={formData.fullName}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? <CircularProgress /> : "Update"}
          {/* Display loading text if loading */}
        </Button>
      </Box>
    </Box>
  );
};

export default UpdateProfileForm;
