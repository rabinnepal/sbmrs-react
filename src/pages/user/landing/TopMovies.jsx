import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Box, Container, Typography } from "@mui/material";
import { Navigation } from "swiper";

const TopMovies = () => {
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
          //   device={((ios = true), (android = true))}
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
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ p: 2 }}>
              <img
                src="https://picsum.photos/200/300"
                alt="movie"
                style={{ borderRadius: 20 }}
              />
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default TopMovies;
