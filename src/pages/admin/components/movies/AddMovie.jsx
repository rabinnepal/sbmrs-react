import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";

const drawerWidth = 240;
export default function AddMovie() {
  const api = new APIClass();

  // add banner

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
      movie_title: data.get("title"),
      description: data.get("description"),
      category: data.get("category"),
      release_date: data.get("date"),
      image: data.get("image"),
    };
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await axios
      .post(`${api.baseURL}admin/add-movie/`, formData, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);
          window.alert("Added Successfully!!");
          e.target.reset();
        } else {
          console.log(res.data);
          window.alert("Task failed!!");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Typography variant="h4">Add Movie</Typography>
      <Box
        component="form"
        encType="multi-part"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <TextField
          variant="outlined"
          name="title"
          width="100%"
          label="Add movie name"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <TextField
          variant="outlined"
          name="description"
          multiline
          rows={4}
          width="100%"
          label="Add movie description"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <TextField
          variant="outlined"
          name="category"
          width="100%"
          label="Add movie category"
          fullWidth
          sx={{ my: 2 }}
          required
        />

        <Typography fontWeight="600">Add movie release date</Typography>
        <TextField
          variant="outlined"
          name="date"
          type="date"
          width="100%"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <Typography fontWeight="600">Upload image</Typography>
        <TextField
          type="file"
          name="image"
          variant="outlined"
          sx={{ mb: 3 }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ display: "block", px: 3, ml: 2, mb: 5 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
