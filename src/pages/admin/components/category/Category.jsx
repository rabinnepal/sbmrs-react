import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import axios from "axios";
import { useCallback } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
  Container,
} from "@mui/material";
// import UpdateCategory from "./UpdateCategory";

const drawerWidth = 240;
export default function Category() {
  const [categories, setCategories] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const api = new APIClass();

  // // display  all categories
  const getCategories = useCallback(async (e) => {
    await axios.get(`${api.baseURL}category/get/`).then((res) => {
      console.log(res.data);
      setCategories(res.data.data);
    });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  // delete categories
  const handleDelete = async (id) => {
    let config = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    };
    await axios
      .delete(`${api.baseURL}category/delete/${id}/`, config)
      .then((response) => {
        setDeleted(true);
        getCategories();
      })
      .catch((error) => {
        console.log(error);
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
      <Container>
        <Typography variant="h4">List of all category</Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={5} key={index}>
              <Card>
                <CardMedia
                  sx={{ height: 140 }}
                  image={category.image}
                  // image="https://source.unsplash.com/random"
                  title={category.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <UpdateCategory
                    id={category.id}
                    getCategories={getCategories}
                  />
                  <Button
                    color="error"
                    onClick={() => {
                      handleDelete(category.id);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
