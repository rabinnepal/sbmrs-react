import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";

const drawerWidth = 240;
export default function AddCategory() {
  const api = new APIClass();

  // add banner

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
      category: data.get("category"),
      id: data.get("id"),
    };
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    };

    await axios
      .post(`${api.baseURL}admin/add-new-category/`, formData, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res);
          window.alert("Added Successfully!!");
          e.target.reset();
        } else {
          console.log(res);
          window.alert("Task Failed!!");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Typography variant="h4">Add Banner</Typography>
      <Box
        component="form"
        encType="multi-part"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <TextField
          variant="outlined"
          name="category"
          width="100%"
          label="Add category name"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <TextField
          variant="outlined"
          name="id"
          type="number"
          width="100%"
          label="Add category id"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        {/* <Typography fontWeight="600">Upload image of category</Typography>
        <TextField
          type="file"
          name="image"
          variant="outlined"
          sx={{ mb: 3 }}
          required
        /> */}
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ display: "block", px: 3, ml: 2, mb: 5 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
}
