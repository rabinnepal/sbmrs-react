import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import axios from "axios";
import { useCallback } from "react";
import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import VendorDetailsModal from "./VendorDetailsModal";
import { APIClass } from "../../../APICaller/APICaller";

const drawerWidth = 240;
export default function ApproveVendors() {
  const [vendors, setVendors] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const api = new APIClass();
  const token = localStorage.getItem("token");

  // display  vendors
  const getData = useCallback(async (e) => {
    await axios
      .get(`${api.baseURL}admin/vendors`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        console.log(res);
        setVendors(res.data.vendors);
        // console.log(res.data.user);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  // approve vendors

  const approveData = async (id) => {
    let data = {
      userId: id,
    };
    await axios
      .post(`${api.baseURL}admin/changeToVendor`, data, {
        headers: {
          token,
        },
      })
      .then((res) => {
        console.log(res);
        // console.log(res.data.user);
      });
  };

  // delete vendors
  const deleteData = async (id) => {
    await axios
      .delete(`${api.baseURL}vendors/${id}`, {
        headers: {
          token,
        },
      })
      .then((res) => {
        console.log(res);
        getData();
        console.log(res.data.user);
      });
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Typography variant="h4">List of all vendors</Typography>
      <Box>
        <List>
          {vendors.map((vendor, index) => (
            <ListItem
              key={index}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <ListItemAvatar>
                <Avatar src={vendor.avatar} />
              </ListItemAvatar>
              <ListItemText primary={vendor.name} secondary={vendor.email} />
              <ListItemSecondaryAction sx={{ display: "flex" }}>
                <VendorDetailsModal id={vendor._id} />
                {vendor.status === "pending" ? (
                  <Button
                    // variant="contained"
                    color="warning"
                    sx={{ mr: 2, display: "inline-block", py: 0 }}
                    onClick={() => approveData(vendor.userId)}
                  >
                    Approve
                  </Button>
                ) : (
                  <Typography sx={{ mt: 4.8, color: "green" }}>
                    Approved
                  </Typography>
                )}
                <Button
                  // variant="contained"
                  color="error"
                  sx={{ ml: 2, display: "inline-block", py: 0 }}
                  onClick={() => deleteData(vendor._id)}
                >
                  Delete
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
