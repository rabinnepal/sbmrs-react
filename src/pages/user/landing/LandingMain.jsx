import React, { useCallback, useEffect, useState } from "react";
import TopMovies from "./TopMovies";
import NewMovies from "./NewMovies";
import Banner from "./Banner";
import Explore from "./Explore";
import SearchMovies from "./SearchMovies";
import NewReleased from "./NewReleased";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";

const LandingMain = () => {
  return (
    <div
      className="background-image"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Banner />
      <SearchMovies />
      <TopMovies />
      <NewReleased />
      <NewMovies />
      <Explore />
    </div>
  );
};

export default LandingMain;
