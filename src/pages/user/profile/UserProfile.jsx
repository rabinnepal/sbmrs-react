import React, { useCallback, useEffect, useState } from "react";

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
  const [user, setUser] = useState([]);

  const [profilePicture, setProfilePicture] = useState(null);
  const token = localStorage.getItem("token");

  // get profile
  const getProfile = useCallback(async (e) => {
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
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  // change profile
  const fetchData = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const formData = new FormData();
    formData.append("image", profilePicture);
    try {
      let res = axios.post(
        `${api.baseURL}user/update-profile`,
        formData,
        config
      );

      handleClose();
      alert("success");
      getProfile();
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Box className="background-image">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
            }}
          >
            <Typography variant="h4" sx={{ color: "#", my: 2, fontSize: 40 }}>
              User Profile
            </Typography>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                border: "solid grey 10px",
                borderWidth: "thick",
                cursor: "pointer",
                "&:hover": {
                  opacity: 0.85,
                },
              }}
              src={user?.profilePicture}
              onClick={handleOpen}
            />
            <Modal open={open} onClose={handleClose}>
              <Box
                sx={style}
                component="form"
                encType="multi-part"
                onSubmit={(e) => fetchData(e)}
              >
                <TextField
                  type="file"
                  variant="outlined"
                  name="profilePicture"
                  sx={{ my: 3 }}
                  onChange={(e) => setProfilePicture(e.target.files[0])}
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
            </Modal>
            <Box sx={{ pt: 4, color: "white" }}>
              <Link to="/update-profile">
                <Button
                  sx={{ color: "white" }}
                  variant="contained"
                  size="small"
                >
                  Update Profile
                </Button>
              </Link>
            </Box>

            <div style={{ marginTop: "30px" }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6" fontWeight="medium">
                  Name:
                </Typography>
                <Typography variant="h5" fontWeight="medium">
                  {user?.fullName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6" fontWeight="medium">
                  Username:
                </Typography>
                <Typography variant="h6" fontWeight="medium">
                  {user?.userName}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h6" fontWeight="medium">
                  Email:
                </Typography>
                <Typography variant="h6" fontWeight="medium">
                  {user?.email}
                </Typography>
              </Box>
            </div>
          </Box>
        </Container>
      </Box>

      <Box className="background-image" sx={{ height: "100px" }}></Box>
    </>
  );
}

export default UserProfile;
