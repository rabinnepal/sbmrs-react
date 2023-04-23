import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import axios from "axios";
import { useCallback } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
import { APIClass } from "../../../APICaller/APICaller";

const drawerWidth = 240;
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [deleted, setDeleted] = useState([]);

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
      `${api.baseURL}admin/view-movies/`,

      configToken
    );
    console.log(res.data);
    setMovies(res.data.movies);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  // delete artist

  const handleDelete = async (id) => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    const data = {
      movie_id: id,
    };
    await axios
      .post(`${api.baseURL}admin/delete-movie/`, data, configToken)
      .then(() => {
        setDeleted(true);
        alert("Deleted Successfully!!");
        getMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Container>
        <Typography variant="h4">List of all movies</Typography>
        <Grid container spacing={4}>
          {movies.map((movie, index) => (
            <Grid item xs={5} key={index}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={movie.image}
                  title={movie.movie_title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {movie.movie_title}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    {movie.description}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {movie.release_date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    color="error"
                    onClick={() => {
                      handleDelete(movie._id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
