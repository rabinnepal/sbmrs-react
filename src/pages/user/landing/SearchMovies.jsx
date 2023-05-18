import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {
  Box,
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
      console.log(res);
      setMovies(res.data.results);
    },
    [q]
  );

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

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
              spaceBetween={50}
              slidesPerView={5}
              scrollbar={{ draggable: false }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {movies?.map((movie, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box sx={{ p: 2 }}>
                      <img
                        src={movie.image}
                        alt={movie.movie_title}
                        style={{ borderRadius: 20, height: 200 }}
                        onClick={(e) => navigate(`/rating/${movie._id}`)}
                      />
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default SearchMovies;
