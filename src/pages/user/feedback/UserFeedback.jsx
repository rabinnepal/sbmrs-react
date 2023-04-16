import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";

const UserFeedback = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", pt: 3, fontWeight: 600 }}
      >
        Sentiment Based Movie Rating System
      </Typography>
      <Box>
        <Typography variant="h6">Aquaman 2</Typography>
        <Typography variant="body1">
          Aquaman forges an uneasy alliance with an unlikely ally to save
          Atlantis and the rest of the planet.
        </Typography>
        <img src="https://source.unsplash.com/random" alt="image" />
        <Box>
          <Typography>Overall Rating</Typography>
          <Rating name="rating" value={3} readOnly />
        </Box>
        <Button variant="contained">Add your comment</Button>
      </Box>
    </Box>
  );
};

export default UserFeedback;
