import { Box, Typography } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <img
        src="../../../public/banner.jpeg"
        alt="banner"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "50vh",
          opacity: "80%",
        }}
      />
      {/* <Typography
        variant="h2"
        style={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          opacity: 0.8,
        }}
      >
        SENTIMENT BASED MOVIE RATING SYSTEM
      </Typography> */}
    </Box>
  );
};

export default Banner;
