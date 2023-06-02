import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>
        SBMRS
      </Link>
      <span> </span>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        marginTop: "auto",
        backgroundColor: "#FFF",
        boxShadow: 20,
        bottom: 0,
        background: "#252933",
        color: "white",
      }}
    >
      <Container>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ mb: 3 }}
        >
          <Grid item xs={4}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "white" }}
            >
              Profile
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link
              to="/settings"
              style={{ textDecoration: "none", color: "white" }}
            >
              Settings
            </Link>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
