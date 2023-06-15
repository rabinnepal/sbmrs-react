import { Star } from "@mui/icons-material";
import React from "react";

const ratingContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const starIconStyle = {
  marginRight: 4,
  color: "#FAAF2D",
};

const RatingDisplay = ({ rating, movie }) => {
  const roundedRating = rating.toFixed(2); // Round the rating to 2 decimal places
  return (
    <div style={ratingContainerStyle}>
      <Star style={starIconStyle} />
      <span>{roundedRating}</span>
      <span>({movie?.score.length})</span>
    </div>
  );
};

export default RatingDisplay;
