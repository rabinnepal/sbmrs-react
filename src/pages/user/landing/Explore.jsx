import React, { useCallback, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Navigation } from "swiper";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";
import { useNavigate } from "react-router-dom";

const Explore = () => {
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
          Explore Movies
        </Typography>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          scrollbar={{ draggable: false }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {movies
            .slice(0, 3)
            .sort(() => Math.random() - 0.5)
            ?.map((movie, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card
                    raised={false}
                    sx={{ p: 2, width: 320, boxShadow: 1, mb: 4 }}
                  >
                    <img
                      src={movie.image}
                      alt={movie.movie_title}
                      style={{ borderRadius: 20, height: 200, width: "100%" }}
                      onClick={(e) => navigate(`/rating/${movie._id}`)}
                    />
                    <Box sx={{ ml: 1, mt: 1 }}>
                      <Typography sx={{ fontSize: 20, color: "blue" }}>
                        {movie.movie_title}
                      </Typography>
                      <Typography>{movie.categories[0].category}</Typography>
                    </Box>
                  </Card>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Container>
    </div>
  );
};

export default Explore;
