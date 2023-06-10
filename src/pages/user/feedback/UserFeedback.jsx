import {
  Box,
  Button,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const UserFeedback = () => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [message, setMessage] = useState();
  const [movie, setMovie] = useState();

  const { id } = useParams();
  // const location = useLocation();
  // console.log(location);
  // const { movies } = location.state.movies;
  // console.log(movies);

  const token = localStorage.getItem("token");

  const getMovie = useCallback(async () => {
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    await axios
      .get(`${api.baseURL}user/view-movie/${id}`, configData)
      .then((res) => {
        console.log(res);
        setMovie(res.data.movie);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    getMovie();
  }, []);

  const addComment = async (e) => {
    e.preventDefault();
    const configData = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = new FormData(e.currentTarget);
    const formData = {
      rating: value,
      comment: data.get("message"),
      movie_id: id,
    };
    console.log(token);
    await axios
      .post(`${api.baseURL}user/add-comments`, formData, configData)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          console.log(res);
          setMessage(res.data.commentAndReview);
          alert("Comment Added Successfully!!");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      className="background-image"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "white", fontWeight: "bold", fontSize: 26 }}
        >
          {movie?.movie_title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}
        >
          {movie?.description}
        </Typography>
        <img src={movie?.image} alt={movie?.movie_title} width={400} />
        <Box
          component="form"
          onSubmit={addComment}
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Rating
            name="rating"
            size="large"
            value={value}
            defaultValue={2.5}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <TextField
            sx={{ border: "1px solid white", width: 500 }}
            inputProps={{ style: { color: "white" } }}
            name="message"
            multiline
            rows={4}
            type="text"
            fullWidth
            placeholder="Write your comment here"
          />
          <Button
            variant="contained"
            type="submit"
            onSubmit={() => navigate(`/feedback-submission`)}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default UserFeedback;
