import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";

const ViewMovieRating = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", pt: 3, fontWeight: 600 }}
      >
        Sentiment Based Movie Rating System
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#7987FF", fontWeight: "bold", fontSize: 26 }}
        >
          Aquaman 2
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18 }}>
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
        <Button variant="contained">Add your comment</Button>
      </Box>
    </Box>
  );
};

export default ViewMovieRating;
