import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Avatar,
  TextField,
  Modal,
  Fab,
} from "@mui/material";
import { APIClass } from "../../../APICaller/APICaller";
import axios from "axios";
import { Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Setting() {
  const api = new APIClass();
  const [user, setUser] = useState();

  const token = localStorage.getItem("token");

  // display images etc
  const getProfile = async (e) => {
    const configData = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(token);
    await axios
      .post(`${api.baseURL}user/profile`, "", configData)
      .then((res) => {
        console.log(res);
        setUser(res.data.userProfile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Box
        bgcolor="#grey"
        sx={
          {
            //   height: "500px",
            //   position: "relative",
          }
        }
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ color: "#", my: 2, fontSize: 40 }}>
              User Profile
            </Typography>
            <Avatar
              sx={{
                // position: "absolute",
                // bottom: -150,
                // left: 200,
                width: 200,
                height: 200,
                border: "solid grey 10px",
                borderWidth: "thick",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.85,
                },
              }}
              src="https://picsum.photos/300/300"
              //   src={user?.image}
            />
          </Box>
          <Box sx={{ height: 100, mt: 4 }}>
            <div style={{ color: "#000", marginTop: "30px" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link>Change Password</Link>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Link>Change Username</Link>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>

      {/* <Box bgcolor="#grey" sx={{ height: "200px" }}></Box> */}
    </>
  );
}

export default Setting;
