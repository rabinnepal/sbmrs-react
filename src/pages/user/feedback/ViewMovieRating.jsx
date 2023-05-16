import { Box, Button, Rating, Typography } from "@mui/material";
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
            {/* <Box>
              <Typography>User's Feedback</Typography>
              {movie.score?.map((score) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: 1000,
                    }}
                  >
                    <Box>
                      <Typography>username</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>{score.rating}</Typography>
                      <Typography>{score.review}</Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box> */}
          </Box>
        );
      })}
    </Box>
  );
};

export default ViewMovieRating;
