import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  styled,
} from "@mui/material";
import theme from "../theme";
import MedicalConsultationIcon from "@mui/icons-material/MedicalServices";
import TreatmentCoordinationIcon from "@mui/icons-material/Directions";
import AccommodationAssistanceIcon from "@mui/icons-material/Hotel";

// Define styles
const ServiceCard = styled(Card)({
  height: "100%",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.03)",
  },
  borderRadius: theme.spacing(2),
});

const ServiceCardContent = styled(CardContent)({
  textAlign: "center",
});

const ServiceIcon = styled(Box)({
  fontSize: theme.spacing(8),
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
});

const ServicesOffered = () => {
  return (
    <Container sx={{ padding: `${theme.spacing(8)} 0` }}>
      <Typography variant="h2" gutterBottom align="center">
        Services Offered
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {/* Example service cards */}
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard elevation={3}>
            <ServiceCardContent>
              <ServiceIcon>
                <MedicalConsultationIcon />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                Medical Consultation
              </Typography>
              <Typography variant="body1">
                Expert consultation with renowned medical professionals.
              </Typography>
            </ServiceCardContent>
          </ServiceCard>
        </Grid>
        {/* Add more service cards here */}
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard elevation={3}>
            <ServiceCardContent>
              <ServiceIcon>
                <TreatmentCoordinationIcon />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                Treatment Coordination
              </Typography>
              <Typography variant="body1">
                Comprehensive coordination of your medical treatment journey.
              </Typography>
            </ServiceCardContent>
          </ServiceCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ServiceCard elevation={3}>
            <ServiceCardContent>
              <ServiceIcon>
                <AccommodationAssistanceIcon />
              </ServiceIcon>
              <Typography variant="h5" gutterBottom>
                Accommodation Assistance
              </Typography>
              <Typography variant="body1">
                Help in arranging comfortable accommodations near medical
                facilities.
              </Typography>
            </ServiceCardContent>
          </ServiceCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesOffered;
