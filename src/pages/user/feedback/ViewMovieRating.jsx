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
  }, [getMovie]);
  console.log(movies);

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
                    {movie.movie_id?.description}
                  </Typography>
                  <img
                    src={movie.movie_id?.image}
                    alt={movie.movie_id?.movie_title}
                    width={400}
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
                </Container>
                <Container>
                  <Box>
                    <Typography
                      sx={{ fontSize: 20, fontWeight: 700, color: "white" }}
                    >
                      User's Feedback
                    </Typography>
                    {movie.score?.map((score) => {
                      return (
                        <Card
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            mt: 2,
                            py: 2,
                            p: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                            }}
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
                              {score.sentimentRating.slice(0, 8) ===
                              "Negative" ? (
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
              {movies?.description}
            </Typography>
            <img src={movies?.image} alt={movies?.movie_title} width={400} />
            <Box sx={{ my: 5, display: "flex", gap: 3 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
                Overall Rating
              </Typography>
              <Rating
                name="rating"
                // value={movies.totalRating}
                readOnly
                sx={{ border: "ridge" }}
              />
            </Box>
            <Link
              to={{
                pathname: `/feedback/${id}`,
                state: { movies: movies },
              }}
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">Add your comment</Button>
              <Box sx={{ height: "15vh" }} />
            </Link>
          </Container>
        </Box>
      )}
    </>
  );
};

export default ViewMovieRating;
