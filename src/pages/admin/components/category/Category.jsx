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
import { APIClass } from "../../../../APICaller/APICaller";
// import UpdateCategory from "./UpdateCategory";

const drawerWidth = 240;
export default function Category() {
  const [categories, setCategories] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const token = `Bearer ${localStorage.getItem("token")}`;
  const api = new APIClass();

  // // display  all categories
  const getCategories = useCallback(async (e) => {
    const configToken = {
      headers: {
        Authorization: token,
      },
    };
    try {
      let res = await axios.get(
        `${api.baseURL}admin/list-category/`,
        configToken
      );
      console.log(res.data);
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  // delete categories
  const handleDelete = async (id) => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    await axios
      .post(`${api.baseURL}admin/remove-category/`, config, id)
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
            <Grid item xs={4} key={index}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.category}
                  </Typography>
                </CardContent>
                <CardActions>
                  {/* <UpdateCategory
                    id={category.id}
                    getCategories={getCategories}
                  /> */}
                  <Button
                    color="error"
                    onClick={() => {
                      handleDelete(category._id);
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
