import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CalendarMonth, Edit, LocationOn } from "@mui/icons-material";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";

const theme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const UpdateMovieModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [movie, setMovie] = useState(0);

  const api = new APIClass();
  const token = localStorage.getItem("token");
  // console.log(id);

  const handleSubmit = useCallback(async (e) => {
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
    console.log(id);
    await axios
      .post(`${api.baseURL}admin/update-movie/${id}`, formData, config)
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
      });
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 4 }}>
        <Button sx={{ mr: 2, mb: 3.8 }} onClick={handleOpen}>
          <Edit />
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              name="title"
              width="100%"
              label="Add movie name"
              fullWidth
              sx={{ my: 2 }}
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
            />
            <TextField
              variant="outlined"
              name="category"
              width="100%"
              label="Add movie category"
              fullWidth
              sx={{ my: 2 }}
            />

            <Typography fontWeight="600">Add movie release date</Typography>
            <TextField
              variant="outlined"
              name="date"
              type="date"
              width="100%"
              fullWidth
              sx={{ my: 2 }}
            />
            <Typography fontWeight="600">Upload image</Typography>
            <TextField
              type="file"
              name="image"
              variant="outlined"
              sx={{ mb: 3 }}
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
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default UpdateMovieModal;
