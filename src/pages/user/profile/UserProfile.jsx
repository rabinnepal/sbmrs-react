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
// import AppliedJobs from "./AppliedJobs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserProfile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const api = new APIClass();
  const [profile, setProfile] = useState(null);
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

  //   // change profile
  //   const fetchData = async (e) => {
  //     e.preventDefault();

  //     let config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const formData = new FormData();
  //     formData.append("image", profile);

  //     axios
  //       .patch(`${api.baseURL}user/profile`, formData, config)
  //       .then((res) => {
  //         console.log(res);
  //         alert("success");
  //         getProfile();
  //         setOpen(false);
  //       })
  //       .catch((e) => console.log(e.message));
  //   };

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
              // src="https://picsum.photos/300/300"
              src={user?.profilePicture}
              onClick={handleOpen}
            />
            {/* <Modal open={open} onClose={handleClose}>
              <Box
                sx={style}
                // component="form"
                // encType="multi-part"
                // onSubmit={(e) => fetchData(e)}
              >
                <TextField
                  type="file"
                  variant="outlined"
                  name="file"
                  sx={{ my: 3 }}
                  //   onChange={(e) => setProfile(e.target.files[0])}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ display: "block", px: 3, ml: 2, mb: 5 }}
                >
                  Upload
                </Button>
              </Box>
            </Modal> */}
            <div style={{ color: "#000", marginTop: "30px" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="medium"
                  color="text.secondary"
                >
                  Name:
                </Typography>
                <Typography variant="h5" fontWeight="medium">
                  {user?.fullName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="medium"
                  color="text.secondary"
                >
                  Username:
                </Typography>
                <Typography variant="h6" fontWeight="medium">
                  {user?.userName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="medium"
                  color="text.secondary"
                >
                  Email:
                </Typography>
                <Typography variant="h6" fontWeight="medium">
                  {user?.email}
                </Typography>
              </Box>
            </div>
          </Box>
          <Box sx={{ height: 100, mt: 4 }}>
            <Button variant="contained" startIcon={<Settings />}>
              Settings
            </Button>
          </Box>
        </Container>
      </Box>

      {/* <Box bgcolor="#grey" sx={{ height: "200px" }}></Box> */}
    </>
  );
}

export default UserProfile;
