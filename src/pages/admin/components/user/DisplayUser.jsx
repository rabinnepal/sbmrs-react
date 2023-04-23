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
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Table,
} from "@mui/material";
import { APIClass } from "../../../../APICaller/APICaller";

const drawerWidth = 240;
export default function DisplayUser() {
  const [users, setUsers] = useState([]);
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
      `${api.baseURL}admin/view-users/`,

      configToken
    );
    console.log(res.data);
    setUsers(res.data.users);
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
        <Typography variant="h4">List of all users</Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "lightblue" }}>
                <TableCell>Username</TableCell>
                <TableCell align="right">Fullname</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Role</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.userName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.userName}
                  </TableCell>
                  <TableCell align="right">{user.fullName}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
