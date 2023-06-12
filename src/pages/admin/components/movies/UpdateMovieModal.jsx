import {
  Autocomplete,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";
import { useParams } from "react-router-dom";

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

const UpdateMovieModal = ({ movie, getData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();
  const api = new APIClass();
  const token = localStorage.getItem("token");

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event, value) => {
    const selectedCategoryNames = value.map((item) => item.category);
    setSelectedCategories(selectedCategoryNames);
  };
  // // display  all categories
  const getCategories = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      let res = await axios.get(
        `${api.baseURL}admin/list-category/`,
        configToken
      );
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const formattedCategories = selectedCategories.join(", ");

    const data = new FormData(e.currentTarget);
    let formData = {
      movie_title: data.get("title"),
      description: data.get("description"),
      category: formattedCategories,
      release_date: data.get("date"),
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(formData);
    await axios
      .post(`${api.baseURL}admin/update-movie/${id}`, formData, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);
          window.alert("Added Successfully!!");
          handleClose();
          window.location.reload();
        } else {
          console.log(res.data);
          window.alert("Task failed!!");
          handleClose();
        }
      });
  });

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Button variant="contained" onClick={handleOpen}>
          Edit
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
              placeholder="Add movie name"
              defaultValue={
                Object.keys(movie).length === 6
                  ? movie?.movie_id?.movie_title
                  : movie?.movie_title
              }
              fullWidth
              sx={{ my: 2 }}
            />
            <TextField
              variant="outlined"
              name="description"
              multiline
              rows={4}
              width="100%"
              placeholder="Add movie description"
              defaultValue={
                Object.keys(movie).length === 6
                  ? movie?.movie_id?.description
                  : movie?.description
              }
              fullWidth
              sx={{ my: 2 }}
            />
            <Autocomplete
              multiple
              options={categories}
              getOptionLabel={(option) => option.category}
              value={selectedCategories.map((category) =>
                categories.find((item) => item.category === category)
              )}
              onChange={handleCategoryChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Categories"
                  placeholder="Select categories"
                />
              )}
            />

            <Typography fontWeight="600">Add movie release date</Typography>
            <TextField
              variant="outlined"
              name="date"
              type="date"
              width="100%"
              defaultValue={
                Object.keys(movie).length === 6
                  ? movie?.movie_id?.release_date
                  : movie?.release_date
              }
              fullWidth
              sx={{ my: 2 }}
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
