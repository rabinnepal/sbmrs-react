import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="black">
      {"Copyright © "}
      <Link href="/" style={{ color: "black", textDecoration: "none" }}>
        Kaam-Wala
      </Link>
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
        mt: "auto",
        backgroundColor: "#FFF",
        boxShadow: 20,
        bottom: 0,
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
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </Grid>
          {/* <Grid item xs={4}>
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About Us
            </Link>
          </Grid> */}

          <Grid item xs={4}>
            <Link
              to="/profile"
              style={{ color: "black", textDecoration: "none" }}
            >
              Profile
            </Link>
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
}
