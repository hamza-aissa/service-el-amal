import React from "react";
import { Container, Typography, Button, styled } from "@mui/material";
import theme from "../theme";
import { Link } from "react-router-dom";

const CallToActionButton = styled(Button)({
  marginTop: theme.spacing(4),
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  borderRadius: theme.spacing(3),
  boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const CallToAction = () => {
  return (
    <Container sx={{ textAlign: "center", padding: `${theme.spacing(8)} 0` }}>
      <Typography variant="h2" gutterBottom>
        Ready to Get Started?
      </Typography>
      <Typography variant="body1" paragraph>
        Discover how we can assist you in your medical journey.
      </Typography>
      <CallToActionButton
        variant="contained"
        color="primary"
        component={Link}
        to="/contact"
      >
        Contact Us
      </CallToActionButton>
    </Container>
  );
};

export default CallToAction;
