import {
  Box,
  Button,
  CircularProgress,
  Container,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";

const UserFeedback = () => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [message, setMessage] = useState();
  const [movies, setMovies] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { id } = useParams();

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
        setMovies(res.data.movie);
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

    if (!value) {
      alert("Please provide a rating");
      return;
    }

    setIsLoading(true);
    setIsButtonDisabled(true);
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
          e.target.reset();
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
    setIsButtonDisabled(false);
  };

  return (
    <>
      {Array.isArray(movies) === true ? (
        <Box className="background-image">
          {movies?.map((movie) => {
            return (
              <>
                <Container
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 2,
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#7987FF", fontWeight: "bold", fontSize: 26 }}
                  >
                    {movie.movie_id?.movie_title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
                  >
                    Category: {movie.movie_id?.category}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
                  >
                    {movie.movie_id?.description}
                  </Typography>
                  <img
                    src={movie.movie_id?.image}
                    alt={movie.movie_id?.movie_title}
                    width={400}
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
                      precision={0.5}
                      sx={{ border: "ridge" }}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      required // Add required attribute to make it a required field
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
                      required
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      onSubmit={() => navigate(`/feedback-submission`)}
                      disabled={isButtonDisabled}
                    >
                      {isLoading ? <CircularProgress size={24} /> : "Submit"}
                    </Button>
                  </Box>
                </Container>
              </>
            );
          })}
        </Box>
      ) : (
        <Box className="background-image">
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              pt: 2,
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold", fontSize: 26 }}
            >
              {movies?.movie_title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
            >
              Category: {movies?.category}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
            >
              {movies?.description}
            </Typography>
            <img src={movies?.image} alt={movies?.movie_title} width={400} />
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
                precision={0.5}
                sx={{ border: "ridge" }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                required // Add required attribute to make it a required field
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
                disabled={isButtonDisabled}
              >
                {isLoading ? <CircularProgress size={24} /> : "Submit"}
              </Button>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default UserFeedback;
