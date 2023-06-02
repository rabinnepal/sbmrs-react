import { Box } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Box>
      <img
        // src="../../../src/assets/opera.jpg"
        src="https://cdn.asp.events/CLIENT_Oliver_K_15A4C8AE_5056_B739_54CFDE58102DEF33/sites/sydney-build-2024/media/libraries/sydney-build-blog/Sydney%20Opera%20House%20image.png"
        alt="images"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "95vh",
        }}
      />
    </Box>
  );
};

export default Banner;
