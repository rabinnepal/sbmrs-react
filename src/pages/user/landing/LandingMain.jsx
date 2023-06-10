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
  const [movies, setMovies] = useState([]);

  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;

  // // display  top movies
  const getMovies = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    const res = await axios.get(
      `${api.baseURL}user/get-toprated-movies/`,
      configToken
    );
    setMovies(res.data.movies);
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  console.log(movies);

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
      <TopMovies topMovies={movies} />
      <NewReleased />
      <NewMovies />
      <Explore />
    </div>
  );
};

export default LandingMain;
