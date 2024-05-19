import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  styled,
} from "@mui/material";
import emailjs from "emailjs-com";
import theme from "../theme";

const ContactForm = styled("form")({
  maxWidth: 600,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: "#f8f9fa",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "& .MuiTextField-root": {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.spacing(2),
      "& fieldset": {
        borderColor: theme.palette.primary.main,
        transition: "border-color 0.3s ease-in-out",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
  "& .MuiButton-root": {
    alignSelf: "flex-end",
    marginTop: theme.spacing(2),
  },
});

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Container sx={{ padding: `${theme.spacing(8)} 0` }}>
      <Typography variant="h2" gutterBottom align="center">
        Contact Us
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body1" gutterBottom>
          Have a question or inquiry? Fill out the form below and we'll get back
          to you as soon as possible.
        </Typography>
      </Box>
      <ContactForm onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          color="primary"
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          color="primary"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          color="primary"
          value={form.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </ContactForm>
    </Container>
  );
};

export default ContactPage;
