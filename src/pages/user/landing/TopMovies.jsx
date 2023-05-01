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

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const navigate = useNavigate();

  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;

  // // display  all banners
  const getMovies = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(
      `${api.baseURL}user/rated-movies/`,
      configToken
    );
    console.log(res.data);
    setMovies(res.data.movies);
    for (let index = 0; index < res.data.movies.length; index++) {
      let rating = res.data.movies[index].score;
      console.log(rating);
      // let sum = 0;
      // for (const rat of rating) {
      //   if (rat.rating) sum += rat.rating;
      // }
      // console.log(sum);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // const combinedData = movies?.flatMap((trip) =>
  //   trip.score.map((order) => ({
  //     ...order,
  //   }))
  // );
  // console.log(combinedData, "combine");

  // sort the artist from new to old
  // useEffect(() => {
  //   const sortedarray = users.sort((a, b) => {
  //     return true && b.id - a.id;
  //   });
  //   setSort(sortedarray);
  // });
  // {sort.slice(0, 10).map((user) => ( //map garda

  return (
    <div>
      <Container>
        <Typography sx={{ ml: 2, fontWeight: 600, fontSize: 20 }}>
          Top Movies
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
          {movies.slice(0, 10)?.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                {() => {
                  if (movie.score[0].rating >= 4)
                    return (
                      <Box sx={{ p: 2 }}>
                        <img
                          src={movie.movie_id.image}
                          alt={movie.movie_id.movie_title}
                          style={{ borderRadius: 20, height: 200 }}
                          onClick={(e) =>
                            navigate(`/rating/${movie.movie_id._id}`)
                          }
                        />
                      </Box>
                    );
                  else {
                    return <div style={{ display: "hidden" }}></div>;
                  }
                }}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default TopMovies;
