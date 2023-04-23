import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";

const UserFeedback = () => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [user, setUser] = useState();
  const [message, setMessage] = useState();

  const token = localStorage.getItem("token");

  const addComment = async (e) => {
    e.preventDefault();
    const configData = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const data = new FormData(e.currentTarget);
    const formData = {
      rating: value,
      comment: data.get("message"),
      movie_id: "kas",
    };
    console.log(token);
    await axios
      .post(`${api.baseURL}user/add-comments`, formData, configData)
      .then((res) => {
        console.log(res);
        setMessage(res.data.commentAndReview);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        my: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "#7987FF", fontWeight: "bold", fontSize: 26 }}
      >
        Aquaman 2
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}>
        Aquaman forges an uneasy alliance with an unlikely ally to save Atlantis
        and the rest of the planet.
      </Typography>
      <img
        src="https://picsum.photos/200/300"
        alt="image"
        height={400}
        width={200}
      />
      <Box
        component="form"
        onSubmit={addComment}
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Rating
          name="rating"
          size="large"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <TextField
          name="message"
          multiline
          rows={4}
          type="text"
          fullWidth
          placeholder="Write your comment here"
          sx={{ width: 500 }}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default UserFeedback;
