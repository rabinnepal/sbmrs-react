import {
  Avatar,
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CalendarMonth, LocationOn } from "@mui/icons-material";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";
import { useNavigate, useParams } from "react-router-dom";
import UpdateMovieModal from "./UpdateMovieModal";

const ViewSingleMovie = () => {
  const [movies, setMovies] = useState();
  const [deleted, setDeleted] = useState([]);

  const navigate = useNavigate();
  const api = new APIClass();
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const getData = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`${api.baseURL}admin/view-movie/${id}`, configToken)
      .then((res) => {
        setMovies(res.data.movie);
      });
  }, []);

  // delete movies

  const handleDelete = async (id) => {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const data = {
      movie_id: id,
    };
    console.log(data);
    await axios
      .post(`${api.baseURL}admin/delete-movie/`, data, configToken)
      .then(() => {
        setDeleted(true);
        alert("Deleted Successfully!!");
        navigate("/admin/display-movies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  if (!movies) {
    return (
      <Box>
        <Toolbar />
        <Box sx={{ p: 4 }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Toolbar />

      <Box sx={{ width: "100%" }}>
        {Array.isArray(movies) === true ? (
          <Box>
            {movies?.map((movie, index) => {
              console.log(movie, "hjk");
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    width: "100%",
                  }}
                >
                  <Box
                    width="100%"
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "flex-end",
                      mt: 2,
                      px: 2,
                    }}
                  >
                    <UpdateMovieModal movie={movie} />
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => {
                        handleDelete(movie.movie_id._id);
                      }}
                    >
                      Delete
                    </Button>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#7987FF",
                      fontWeight: "bold",
                      fontSize: 26,
                      width: "100%",
                    }}
                  >
                    {movie?.movie_id.movie_title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
                  >
                    Category: {movie?.movie_id.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
                  >
                    Description: {movie?.movie_id.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
                  >
                    Release Date: {movie?.movie_id.release_date}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
                  >
                    {/* Category: {movie?.categories[0].category} */}
                  </Typography>
                  <img
                    src={movie?.movie_id.image}
                    alt={movie?.movie_id.movie_title}
                    height={400}
                    width={200}
                  />
                </Box>
              );
            })}
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 3,
              width: "100%",
            }}
          >
            <Box
              width="100%"
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "flex-end",
              }}
            >
              <UpdateMovieModal
                sx={{ width: "50%" }}
                movie={movies}
                getData={getData}
              />
              <Button
                color="error"
                variant="contained"
                sx={{ width: "auto" }}
                onClick={() => {
                  handleDelete(movies._id);
                }}
              >
                Delete
              </Button>
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: "#7987FF",
                fontWeight: "bold",
                fontSize: 26,
                width: "100%",
              }}
            >
              {movies?.movie_title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
            >
              Category: {movies?.category}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
            >
              <span style={{ color: "grey" }}>Description: </span>
              {movies?.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
            >
              <span style={{ color: "grey" }}>Release Date: </span>
              {movies?.release_date}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2, width: "100%" }}
            >
              {/* Category: {movie?.categories[0].category} */}
            </Typography>
            <img src={movies?.image} alt={movies?.movie_title} width={500} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ViewSingleMovie;
