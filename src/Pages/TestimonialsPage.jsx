import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  styled,
} from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import theme from "../theme";

const testimonialData = [
  {
    name: "John Doe",
    avatar: "/images/avatar1.jpg",
    quote:
      "Service El Amal made my medical journey smooth and stress-free. I'm grateful for their exceptional support.",
  },
  {
    name: "Jane Smith",
    avatar: "/images/avatar2.jpg",
    quote:
      "I highly recommend Service El Amal to anyone seeking quality medical services abroad. They exceeded my expectations.",
  },
  {
    name: "David Johnson",
    avatar: "/images/avatar3.jpg",
    quote:
      "The personalized care and attention to detail provided by Service El Amal truly made a difference in my experience.",
  },
];

const TestimonialCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(3),
  padding: theme.spacing(3),
  backgroundColor: "#f9f9f9",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
  },
});

const TestimonialAvatar = styled(Avatar)({
  width: theme.spacing(7),
  height: theme.spacing(7),
});

const TestimonialQuoteIcon = styled(FormatQuote)({
  fontSize: theme.spacing(4),
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
});

const TestimonialsPage = () => {
  return (
    <Container sx={{ padding: `${theme.spacing(8)} 0` }}>
      <Typography variant="h2" gutterBottom align="center">
        Testimonials
      </Typography>
      <Grid container spacing={3}>
        {testimonialData.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TestimonialCard elevation={3}>
              <CardContent>
                <TestimonialQuoteIcon />
                <Typography variant="body1" paragraph>
                  {testimonial.quote}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TestimonialAvatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ marginRight: theme.spacing(2) }}
                />
                <Typography variant="body2">{testimonial.name}</Typography>
              </Box>
            </TestimonialCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialsPage;
