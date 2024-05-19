import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";

const services = [
  {
    title: "Medical Consultation",
    description: "Expert consultations with top doctors worldwide.",
    image: "https://source.unsplash.com/featured/?doctor,consultation",
  },
  {
    title: "Rehabilitation",
    description: "Comprehensive rehabilitation services.",
    image: "https://source.unsplash.com/featured/?rehabilitation,therapy",
  },
  {
    title: "Medical Travel Assistance",
    description: "Support with travel logistics for medical treatments.",
    image: "https://source.unsplash.com/featured/?travel,medical",
  },
];

const Section = styled(Box)({
  padding: `${theme.spacing(8)} 0`,
  backgroundColor: "#f7f9fc",
});

const ServiceCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
});

const ServiceImage = styled(CardMedia)({
  height: 140,
});

const ServicesPage = () => {
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Section>
        <Typography variant="h2" gutterBottom align="center">
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <ServiceImage image={service.image} title={service.title} />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1">{service.description}</Typography>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default ServicesPage;
