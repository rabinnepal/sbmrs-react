import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Navigation } from "swiper";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  console.log(q, "q");

  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;

  //  search  movies
  const searchMovies = useCallback(
    async (e) => {
      const configToken = {
        headers: {
          Authorization: token,
        },
      };
      const formData = {
        searchText: q,
      };
      console.log(formData, "formData");
      const res = await axios.post(
        `${api.baseURL}user/search-movies/`,
        formData,
        configToken
      );
      console.log(res);
      setMovies(res.data.results);
    },
    [q]
  );

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);
  console.log(movies);

  return (
    <div>
      <Container>
        <Container sx={{ textAlign: "center", my: 2 }}>
          <TextField
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setQ(e.target.value)}
          />
        </Container>
        {movies.length === 0 ? (
          <Box sx={{ height: "70vh" }}>
            <Typography>Not found</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {movies?.map((movie, index) => {
              return (
                <Grid xs={4} item key={index}>
                  <Box sx={{ p: 2 }}>
                    <img
                      src={movie.image}
                      alt={movie.movie_title}
                      style={{ borderRadius: 20, height: 200 }}
                      onClick={(e) => navigate(`/rating/${movie._id}`)}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default AllMovies;
