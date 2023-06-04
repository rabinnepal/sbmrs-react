import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Navigation } from "swiper";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState([]);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

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
      const res = await axios.post(
        `${api.baseURL}user/search-movies/`,
        formData,
        configToken
      );
      setMovies(res.data.results);
    },
    [q]
  );

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  return (
    <Box>
      <Container>
        <Container sx={{ textAlign: "center", my: 2 }}>
          <TextField
            sx={{ border: "1px solid white" }}
            inputProps={{ style: { color: "white" } }}
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="warning" />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setQ(e.target.value)}
          />
        </Container>
        <Box>
          {movies?.length === 0 || q === "" ? null : (
            <Typography sx={{ ml: 2, fontWeight: 600, fontSize: 20 }}>
              Results:
            </Typography>
          )}
          {movies.length === 0 || q === "" ? null : (
            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={60}
              slidesPerView={4}
              scrollbar={{ draggable: false }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 80,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
            >
              {movies?.map((movie, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box sx={{ p: 2, borderRadius: 20, width: 240 }}>
                      <Card onClick={(e) => navigate(`/rating/${movie._id}`)}>
                        <CardMedia
                          image={movie.image}
                          alt={movie.movie_title}
                          style={{ height: 200 }}
                          onClick={(e) => navigate(`/rating/${movie._id}`)}
                        />

                        <CardContent>
                          <Typography sx={{ fontSize: 18, color: "blue" }}>
                            {movie.movie_title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default SearchMovies;
