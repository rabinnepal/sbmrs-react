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
  InputAdornment,
  TextField,
} from "@mui/material";
import { APIClass } from "../../../../APICaller/APICaller";
import { Delete, Edit, Search } from "@mui/icons-material";
import UpdateMovieModal from "./UpdateMovie";
import ViewSingleMovieModal from "./ViewSingleMovie";
import { Link, useNavigate } from "react-router-dom";

const drawerWidth = 240;
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [q, setQ] = useState("");

  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;
  const navigate = useNavigate();

  // // display  all movies
  const getMovies = useCallback(async () => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(
      `${api.baseURL}admin/view-movies/`,

      configToken
    );
    setMovies(res.data.movies);
  }, []);
  console.log(movies);

  // delete movies

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

  //  search  movies
  const searchMovies = useCallback(
    async (e) => {
      const configToken = {
        headers: {
          Authorization: token,
        },
      };
      const formData = {
        searchText: q,
      };
      const res = await axios.post(
        `${api.baseURL}admin/search-movies/`,
        formData,
        configToken
      );
      setSearch(res.data.results);
    },
    [q]
  );

  useEffect(() => {
    getMovies();
    searchMovies();
  }, [getMovies, searchMovies]);

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
        <Box sx={{ textAlign: "center", my: 2 }}>
          <TextField
            placeholder="Search"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setQ(e.target.value)}
          />
        </Box>

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
              {search.length !== 0 ? (
                search.map((movie, index) => {
                  return (
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
                      <TableCell
                        align="right"
                        sx={{
                          maxWidth: "200px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {movie.description}
                      </TableCell>
                      <TableCell align="right">{movie.release_date}</TableCell>

                      <TableCell align="right">
                        <Button
                          onClick={() => navigate(`/admin/movies/${movie._id}`)}
                        >
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} sx={{ textAlign: "center" }}>
                    Not found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
