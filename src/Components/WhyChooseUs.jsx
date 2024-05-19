import React from "react";
import { Container, Typography, Grid, Box, styled } from "@mui/material";
import theme from "../theme";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import HotelIcon from "@mui/icons-material/Hotel";
import FlightIcon from "@mui/icons-material/Flight";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const FeatureBox = styled(Box)({
  textAlign: "center",
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const WhyChooseUs = () => {
  return (
    <Container sx={{ padding: `${theme.spacing(8)} 0` }}>
      <Typography variant="h2" gutterBottom align="center">
        Why Choose Us
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <FeatureBox>
            <EmojiObjectsIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography variant="h5" gutterBottom>
              Personalized Care
            </Typography>
            <Typography variant="body1">
              Our dedicated team provides tailored services to meet your
              individual needs, ensuring you receive the care and attention you
              deserve throughout your medical journey.
            </Typography>
          </FeatureBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureBox>
            <HotelIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography variant="h5" gutterBottom>
              Accommodation Arrangement
            </Typography>
            <Typography variant="body1">
              We assist in arranging comfortable accommodations near medical
              facilities, ensuring your stay is as convenient and stress-free as
              possible.
            </Typography>
          </FeatureBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureBox>
            <FlightIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography variant="h5" gutterBottom>
              Seamless Transport Logistics
            </Typography>
            <Typography variant="body1">
              Our team handles all aspects of transportation during your medical
              trip, ensuring smooth transfers to and from medical facilities and
              other destinations.
            </Typography>
          </FeatureBox>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureBox>
            <LocalHospitalIcon
              sx={{ fontSize: 60, color: theme.palette.primary.main }}
            />
            <Typography variant="h5" gutterBottom>
              Quality Medical Services
            </Typography>
            <Typography variant="body1">
              We connect you with top-quality medical professionals and
              facilities, ensuring you receive the highest standard of care for
              your treatment needs.
            </Typography>
          </FeatureBox>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
