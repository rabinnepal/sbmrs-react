import React from "react";
import NowPlaying from "./NowPlaying";
import ComingSoon from "./ComingSoon";
import TopMovies from "./TopMovies";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const LandingMain = () => {
  return (
    <div>
      <Container sx={{ textAlign: "center", my: 2 }}>
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
        />
      </Container>
      <NowPlaying />
      <ComingSoon />
      <TopMovies />
    </div>
  );
};

export default LandingMain;
