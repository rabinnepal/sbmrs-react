import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CalendarMonth, LocationOn } from "@mui/icons-material";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";

const theme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VendorDetailsModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [vendor, setVendor] = useState(0);

  const api = new APIClass();
  const token = localStorage.getItem("token");

  const getData = useCallback(async (e) => {
    await axios
      .get(`${api.baseURL}admin/vendors/${id}`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        setVendor(res.data.vendor);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  //   display individual vendor

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 4 }}>
        <Button sx={{ mr: 2, mb: 3.8 }} onClick={handleOpen}>
          View Details
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form">
            <Typography sx={{ mt: 2 }}>Name: {vendor.name}</Typography>
            <Typography sx={{ mt: 2 }}>
              Email Address: {vendor.email}
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Designation: {vendor.designation}
            </Typography>
            <Typography sx={{ mt: 2 }}>Service: {vendor.service}</Typography>
            <Typography sx={{ mt: 2 }}>Address: {vendor.address}</Typography>
            <Typography sx={{ mt: 2 }}>Contact: {vendor.contact}</Typography>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default VendorDetailsModal;
