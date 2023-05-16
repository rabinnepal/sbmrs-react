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
        console.log(res.data);
        setMovies(res.data.movie);
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
  // const movie= movie[0].movie_id

  return (
    <Box>
      {movies?.map((movie) => {
        console.log(movie, "das");
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              my: 2,
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
              sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
            >
              {movie?.description}
            </Typography>
            <img
              src={movie?.image}
              alt={movie?.movie_title}
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
        );
      })}
    </Box>
  );
};

export default ViewMovieRating;
