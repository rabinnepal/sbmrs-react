import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { APIClass } from "../../../APICaller/APICaller";

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

export default function UpdateBanner({ value, getBanners }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const api = new APIClass();

  // let { id } = value;
  // console.log(id);

  // //   update banner
  // const handleSubmit = async (e, id) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);
  //   let formData = {
  //     name: data.get("name"),
  //     image: data.get("image"),
  //   };
  //   console.log(formData);

  //   let config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //     },
  //   };

  //   await axios
  //     .post(`${api.baseURL}update-banner/${id}/`, formData, config)
  //     .then((res) => {
  //       console.log(res);
  //       window.location.href = "";
  //       window.alert("Added Successfully!!");
  //       getBanners();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        Update
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={style}
          // component="form"
          // encType="multi-part"
          // onSubmit={(e) => handleSubmit(e, id)}
          //   noValidate
        >
          <Typography variant="h4" component="h2">
            Update Banner
          </Typography>
          <Typography sx={{ mt: 2 }}>Update name</Typography>
          <TextField
            name="name"
            fullWidth
            margin="normal"
            label="Enter a name"
          ></TextField>
          <Typography sx={{ mt: 2 }}>Update image</Typography>
          <TextField name="image" type="file" fullWidth margin="normal" />
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
