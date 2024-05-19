import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import TestimonialsPage from "./Pages/TestimonialsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {
  CssBaseline,
  ThemeProvider,
  CircularProgress,
  Box,
} from "@mui/material";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <React.Suspense
          fallback={
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <CircularProgress />
            </Box>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
