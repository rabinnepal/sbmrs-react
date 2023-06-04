import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Autocomplete, Button, OutlinedInput, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import { useState } from "react";
import axios from "axios";
import { APIClass } from "../../../../APICaller/APICaller";

const drawerWidth = 240;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function AddMovie() {
  const api = new APIClass();
  const token = `Bearer ${localStorage.getItem("token")}`;

  const theme = useTheme();
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event, value) => {
    setSelectedCategories(value.map((item) => item._id));
  };

  const getOptionLabel = (option) => option.category;

  const isOptionEqualToValue = (option, value) => option._id === value;
  console.log(selectedCategories);

  // // display  all categories
  const getCategories = React.useCallback(async (e) => {
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
      setCategories(res.data.categories);
    } catch (err) {
      console.log(err);
    }
  }, []);

  // add banner

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    let formData = {
      movie_title: data.get("title"),
      description: data.get("description"),
      category: data.get("category"),
      release_date: data.get("date"),
      image: data.get("image"),
    };
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await axios
      .post(`${api.baseURL}admin/add-movie/`, formData, config)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);
          window.alert("Added Successfully!!");
          e.target.reset();
        } else {
          console.log(res.data);
          window.alert("Task failed!!");
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Typography variant="h4">Add Movie</Typography>
      <Box
        component="form"
        encType="multi-part"
        onSubmit={(e) => handleSubmit(e)}
        noValidate
      >
        <TextField
          variant="outlined"
          name="title"
          width="100%"
          label="Add movie name"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <TextField
          variant="outlined"
          name="description"
          multiline
          rows={4}
          width="100%"
          label="Add movie description"
          fullWidth
          sx={{ my: 2 }}
          required
        />

        <Autocomplete
          multiple
          options={categories}
          getOptionLabel={getOptionLabel}
          value={categories.filter((category) =>
            selectedCategories.includes(category._id)
          )}
          onChange={handleCategoryChange}
          isOptionEqualToValue={isOptionEqualToValue}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Categories"
              placeholder="Select categories"
            />
          )}
        />

        <Typography fontWeight="600">Add movie release date</Typography>
        <TextField
          variant="outlined"
          name="date"
          type="date"
          width="100%"
          fullWidth
          sx={{ my: 2 }}
          required
        />
        <Typography fontWeight="600">Upload image</Typography>
        <TextField
          type="file"
          name="image"
          variant="outlined"
          sx={{ mb: 3 }}
          required
        />
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
