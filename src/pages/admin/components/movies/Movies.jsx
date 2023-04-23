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
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Stack,
} from "@mui/material";
import { APIClass } from "../../../../APICaller/APICaller";
import { Delete, Edit } from "@mui/icons-material";
import UpdateMovieModal from "./UpdateMovieModal";
import ViewSingleMovieModal from "./ViewSingleMovieModal";

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

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "lightblue" }}>
                <TableCell>Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Release Date</TableCell>
                <TableCell align="center">Action</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={movie.image}
                      alt={movie.movie_title}
                      height={150}
                      width={150}
                    />
                  </TableCell>
                  <TableCell align="right">{movie.movie_title}</TableCell>
                  <TableCell align="right">{movie.description}</TableCell>
                  <TableCell align="right">{movie.release_date}</TableCell>

                  <TableCell align="right">
                    <Stack direction="row">
                      <UpdateMovieModal id={movie._id} />
                      <Button
                        color="error"
                        onClick={() => {
                          handleDelete(movie._id);
                        }}
                      >
                        <Delete />
                      </Button>
                    </Stack>
                  </TableCell>
                  {/* <Button align="right" variant="outlined" sx={{ mt: 10 }}>
                    See more
                  </Button> */}

                  <TableCell align="right">
                    <ViewSingleMovieModal id={movie._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
