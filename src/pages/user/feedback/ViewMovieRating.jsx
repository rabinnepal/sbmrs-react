import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";

const ViewMovieRating = () => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [movies, setMovies] = useState();
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const token = localStorage.getItem("token");

  const getMovie = useCallback(async () => {
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .get(`${api.baseURL}user/view-movie/${id}`, configData)
      .then((res) => {
        setMovies(res.data.movie);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, []);

  return (
    <Box>
      {movies?.map((movie) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
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
                {movie.movie_id?.description}
              </Typography>
              <img
                src={movie.movie_id?.image}
                alt={movie.movie_id?.movie_title}
                height={400}
                width={200}
              />
              <Box sx={{ my: 5, display: "flex", gap: 3 }}>
                <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
                  Overall Rating
                </Typography>
                <Rating
                  name="rating"
                  value={movie.totalRating}
                  readOnly
                  sx={{ border: "ridge" }}
                />
              </Box>
              <Link
                to={{
                  pathname: `/feedback/${id}`,
                  state: { movies: movie },
                }}
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained">Add your comment</Button>
                <Box sx={{ height: "15vh" }} />
              </Link>
            </Box>
            <Container>
              <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
                  User's Feedback
                </Typography>
                {movie.score?.map((score) => {
                  return (
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        my: 2,
                        p: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={score.user_id.profilePicture}
                          alt={score.user_id.fullName}
                        />
                        <Typography sx={{ color: "blue", fontWeight: 600 }}>
                          {score.user_id.fullName}
                        </Typography>
                        <Rating
                          value={score.rating}
                          readOnly
                          sx={{ border: "ridge" }}
                        />
                      </Box>
                      <Box>
                        <Typography>
                          Sentiment Rating :{" "}
                          {score.sentimentRating.slice(0, 8) === "Negative" ? (
                            <span style={{ color: "red" }}>
                              {score.sentimentRating}
                            </span>
                          ) : (
                            <span style={{ color: "green" }}>
                              {score.sentimentRating}
                            </span>
                          )}
                        </Typography>
                      </Box>
                      <Box sx={{ px: 2 }}>
                        <Typography sx={{ fontSize: 17 }}>
                          {score.review}
                        </Typography>
                      </Box>
                    </Card>
                  );
                })}
              </Box>
            </Container>
          </>
        );
      })}
    </Box>
  );
};

export default ViewMovieRating;
