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

const RatingDisplay = ({ rating }) => {
  return (
    <div style={ratingContainerStyle}>
      <Star style={starIconStyle} />
      <span>{rating}</span>
    </div>
  );
};
export default RatingDisplay;
