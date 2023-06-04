import { Box } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <img
        src="public/banner.jpeg"
        alt="banner"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "80vh",
        }}
      />
    </Box>
  );
};

export default Banner;
