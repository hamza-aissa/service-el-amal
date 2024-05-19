import React from "react";
import { Grid, Paper, Typography, Box, Button, styled } from "@mui/material";
import heroImage from "../assets/hero.jpeg";
import { Link } from "react-router-dom";

// Styled components
const HeroTypography = styled(Typography)({
  // color: "#fff",
  fontWeight: "bold",
  marginBottom: "20px",
});

const HeroButton = styled(Button)({
  marginTop: "20px",
  // color: "#fff",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#135ba1",
  },
});

const HeroSection = () => {
  return (
    <Box sx={{ padding: "50px 0" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "center" }}>
            <HeroTypography variant="h2" gutterBottom>
              Welcome to Service El Amal
            </HeroTypography>
            <Typography variant="body1">
              We specialize in medical tourism services. Our primary focus is to
              facilitate and support international clients who seek medical
              treatments abroad. We provide comprehensive assistance and
              services to ensure a seamless and comfortable experience for
              clients throughout their medical journey.
            </Typography>
            <HeroButton variant="contained" component={Link} to="/services">
              Learn More
            </HeroButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3}>
            <img
              src={heroImage}
              alt="Description of image"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
