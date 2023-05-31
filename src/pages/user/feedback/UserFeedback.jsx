import { Box, Button, Rating, TextField, Typography } from "@mui/material";
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
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#7987FF", fontWeight: "bold", fontSize: 26 }}
      >
        {movie?.movie_title}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}>
        {movie?.description}
      </Typography>
      <img
        src={movie?.image}
        alt={movie?.movie_title}
        height={400}
        width={200}
      />
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
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TextField
          name="message"
          multiline
          rows={4}
          type="text"
          fullWidth
          placeholder="Write your comment here"
          sx={{ width: 500 }}
        />
        <Button
          variant="contained"
          type="submit"
          onSubmit={() => navigate(`/feedback-submission`)}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserFeedback;
