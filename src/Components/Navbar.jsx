import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  useMediaQuery,
  IconButton,
  Container,
  Typography,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import theme from "../theme";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
}));

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 20px",
});

const Logo = styled(Typography)({
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.5rem",
});

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  margin: "0 1rem",
  fontSize: "1.2rem",
  fontWeight: "500",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#f0f0f0",
  },
});

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <StyledBox>
      <Container>
        <StyledToolbar>
          <Logo as={Link} to="/" variant="h6">
            Service El Amal
          </Logo>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={openDrawer}
                onClose={handleDrawerClose}
                theme={theme}
              >
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/services"
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary="Services" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/about"
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary="About Us" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/testimonials"
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary="Testimonials" />
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={handleDrawerClose}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>
                <IconButton
                  color="inherit"
                  aria-label="close drawer"
                  onClick={handleDrawerClose}
                  edge="end"
                >
                  <CloseIcon />
                </IconButton>
              </Drawer>
            </>
          ) : (
            <div>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/services">Services</StyledLink>
              <StyledLink to="/about">About Us</StyledLink>
              <StyledLink to="/testimonials">Testimonials</StyledLink>
              <StyledLink to="/contact">Contact</StyledLink>
            </div>
          )}
        </StyledToolbar>
      </Container>
    </StyledBox>
  );
};

export default Navbar;
