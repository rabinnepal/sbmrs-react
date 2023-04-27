import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, Container, Typography } from "@mui/material";
import { Navigation } from "swiper";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";
import { useNavigate } from "react-router-dom";

const NewMovies = () => {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState([]);
  const navigate = useNavigate();

  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;

  // // display  movies
  const getMovies = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(`${api.baseURL}user/view-movies/`, configToken);
    console.log(res.data);
    setMovies(res.data.movies);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <Container>
        <Typography sx={{ ml: 2, fontWeight: 600, fontSize: 20 }}>
          New Movies
        </Typography>
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
          {movies
            .slice(0, 10)
            .reverse()
            ?.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <Box sx={{ p: 2 }}>
                    <img
                      src={movie.image}
                      alt={movie.movie_name}
                      style={{ borderRadius: 20, height: 200 }}
                      onClick={(e) => navigate(`/rating/${movie._id}`)}
                    />
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default NewMovies;
