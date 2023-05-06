import React from "react";
import NowPlaying from "./NowPlaying";
import ComingSoon from "./ComingSoon";
import TopMovies from "./TopMovies";
import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import NewMovies from "./NewMovies";
import Banner from "./Banner";
import Explore from "./Explore";
import SearchMovies from "./SearchMovies";
import NewReleased from "./NewReleased";

const LandingMain = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Banner />
      <SearchMovies />
      {/* <NowPlaying /> */}
      <TopMovies />
      <NewReleased />
      <NewMovies />
      <Explore />
    </div>
  );
};

export default LandingMain;
