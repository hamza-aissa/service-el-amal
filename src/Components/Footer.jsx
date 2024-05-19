import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box mt={5} p={4} bgcolor="primary.main" color="white">
      <Container>
        <Typography variant="body1" gutterBottom align="center">
          Stay Connected:
        </Typography>
        <Box display="flex" justifyContent="center" mb={2}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Instagram />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Facebook />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            <Twitter />
          </Link>
        </Box>
        <Typography variant="body2" gutterBottom align="center">
          For inquiries, contact us at{" "}
          <Link href="mailto:info@amaassistance.com" color="inherit">
            info@amaassistance.com
          </Link>{" "}
          or call +123456789.
        </Typography>
        <Typography variant="caption" align="center" display="block">
          &copy; 2024 Ama Assistance et Tourisme Médical. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
