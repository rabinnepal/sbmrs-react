import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CalendarMonth, LocationOn } from "@mui/icons-material";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";

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

const ViewSingleMovieModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [movie, setMovie] = useState();

  const api = new APIClass();
  const token = localStorage.getItem("token");

  const getData = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`${api.baseURL}admin/view-movie/${id}`, configToken)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data.movie);
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  console.log(movie, "dafsv");
  //   display individual vendor

  return (
    <ThemeProvider theme={theme}>
      <Button sx={{ mr: 2, mb: 3.8 }} onClick={handleOpen}>
        View Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          //   sx={{
          //     display: "flex",
          //     flexDirection: "column",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     my: 3,
          //   }}
          sx={style}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#7987FF", fontWeight: "bold", fontSize: 26 }}
            >
              {movie?.movie_title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}
            >
              Description:{movie?.description}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}
            >
              Release Date:{movie?.release_date}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}
            >
              Category:{movie?.categories[0].category}
            </Typography>
            <img
              src="https://picsum.photos/200/300"
              // src={movie?.image}
              alt={movie?.movie_title}
              height={400}
              width={200}
            />
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ViewSingleMovieModal;
