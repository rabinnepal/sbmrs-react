import React from "react";
import NowPlaying from "./NowPlaying";
import ComingSoon from "./ComingSoon";
import TopMovies from "./TopMovies";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import NewMovies from "./NewMovies";

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
      <TopMovies />
      {/* <ComingSoon /> */}
      <NewMovies />
    </div>
  );
};

export default LandingMain;
