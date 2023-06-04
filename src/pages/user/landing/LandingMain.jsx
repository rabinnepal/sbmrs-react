import React from "react";
import TopMovies from "./TopMovies";
import NewMovies from "./NewMovies";
import Banner from "./Banner";
import Explore from "./Explore";
import SearchMovies from "./SearchMovies";
import NewReleased from "./NewReleased";

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
      {/* <NowPlaying /> */}
      <TopMovies />
      <NewReleased />
      <NewMovies />
      <Explore />
    </div>
  );
};

export default LandingMain;
