import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";

const ViewMovieRating = ({ id }) => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [movie, setMovie] = useState();

  const token = localStorage.getItem("token");

  const getMovie = async (e, id) => {
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    await axios
      .post(`${api.baseURL}user/view-movie/${id}`, "", configData)
      .then((res) => {
        console.log(res);
        setMovie(res.data.movie);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <Box>
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
          Aquaman 2
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, fontSize: 18, my: 2 }}
        >
          Aquaman forges an uneasy alliance with an unlikely ally to save
          Atlantis and the rest of the planet.
        </Typography>
        <img
          src="https://picsum.photos/200/300"
          alt="image"
          height={400}
          width={200}
        />
        <Box sx={{ my: 5, display: "flex", gap: 3 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
            Overall Rating
          </Typography>
          <Rating name="rating" value={3} readOnly sx={{ border: "ridge" }} />
        </Box>
        <Link to="/feedback" style={{ textDecoration: "none" }}>
          <Button variant="contained">Add your comment</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ViewMovieRating;
