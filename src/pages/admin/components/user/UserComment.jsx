import {
  Avatar,
  Box,
  Card,
  Rating,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { APIClass } from "../../../../APICaller/APICaller";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserComment = () => {
  const api = new APIClass();
  const [value, setValue] = useState();
  const [comments, setComments] = useState();
  const navigate = useNavigate();

  const { id } = useParams();

  const token = localStorage.getItem("token");

  const getComments = useCallback(async () => {
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .get(`${api.baseURL}admin/users-rating-review/${id}`, configData)
      .then((res) => {
        setComments(res.data.userRatingsAndReviews);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteComment = async (movieId) => {
    // Accept the movieId parameter
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const formData = {
      userId: id,
      movieId: movieId, // Use the passed movieId
    };
    await axios
      .post(
        `${api.baseURL}admin/delete-user-comments-ratings`,
        formData,
        configData
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        getComments();
      })
      .catch((err) => {
        alert(res.data.message);
      });
  };

  useEffect(() => {
    if (id) {
      getComments();
    }
  }, [getComments]);
  return (
    <Box sx={{ width: "100%" }}>
      <Toolbar />
      <Box sx={{ p: 3, width: "100%" }}>
        {comments?.map((comment, i) => {
          return (
            <Card
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 2,
                py: 2,
                p: 2,
                width: "100%", // Set the card width to 100%
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 5,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={comment?.user_id?.profilePicture}
                      alt={comment?.user_id?.fullName}
                    />
                    <Typography sx={{ color: "blue", fontWeight: 600 }}>
                      {comment?.user_id?.fullName}
                    </Typography>
                    <Rating
                      value={comment.rating}
                      readOnly
                      sx={{ border: "ridge" }}
                    />
                  </Box>
                  <Box>
                    <Typography>
                      Sentiment Rating :{" "}
                      {comment.sentimentRating.slice(0, 8) === "Negative" ? (
                        <span style={{ color: "red" }}>
                          {comment.sentimentRating}
                        </span>
                      ) : (
                        <span style={{ color: "green" }}>
                          {comment.sentimentRating}
                        </span>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ px: 2 }}>
                    <Typography sx={{ fontSize: 17 }}>
                      {comment.review}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 150, // Set the width of the movie image container
                      height: 200, // Set the height of the movie image container
                      overflow: "hidden", // Hide overflowing content
                      borderRadius: 4, // Apply border-radius for a rectangular shape
                    }}
                  >
                    <img
                      src={comment?.movie_id?.image}
                      alt={comment?.movie_id?.movie_title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }} // Make the image fill the container
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "blue", fontWeight: 600 }}>
                      {comment?.movie_id?.movie_title}
                    </Typography>
                    <Typography>{comment?.movie_id?.release_date}</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button
                    color="error"
                    onClick={() => deleteComment(comment?.movie_id?._id)} // Pass the movieId to deleteComment function
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default UserComment;
