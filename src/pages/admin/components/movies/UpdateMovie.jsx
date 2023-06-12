import {
  Autocomplete,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";
import { useNavigate, useParams } from "react-router-dom";

const theme = createTheme();

const UpdateMovie = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const api = new APIClass();
  const token = localStorage.getItem("token");

  const [movie, setMovie] = useState();
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

  // display default values

  const getData = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`${api.baseURL}admin/view-movie/${id}`, configToken)
      .then((res) => {
        setMovie(res.data.movie);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedCategories = selectedCategories.join(", ");
    console.log(formattedCategories);

    const data = new FormData(e.currentTarget);
    let formData = {
      movie_title: data.get("movie_title"),
      description: data.get("description"),
      category: formattedCategories,
      release_date: data.get("release_date"),
      image: data.get("image"),
    };
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    console.log(formData);
    await axios
      .post(`${api.baseURL}admin/update-movie/${id}/`, formData, config)
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
  };

  useEffect(() => {
    getCategories();
    getData();
  }, [getCategories, getData]);

  console.log(movie);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 2, width: "100%" }}>
        <Toolbar />
        <Box
          component="form"
          encType="multi-part"
          onSubmit={(e) => handleSubmit(e)}
          noValidate
        >
          <TextField
            variant="outlined"
            name="movie_title"
            width="100%"
            placeholder="Add movie title"
            defaultValue={movie?.movie_title}
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
            defaultValue={movie?.description}
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
            name="release_date"
            type="date"
            width="100%"
            defaultValue={movie?.release_date}
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
          <Stack direction="row" spacing={3}>
            <Button type="submit" variant="contained" color="success">
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate(`/admin/movies/${id}`)}
            >
              Cancel
            </Button>
          </Stack>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UpdateMovie;
