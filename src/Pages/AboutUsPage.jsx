import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import theme from "../theme";

const team = [
  { name: "Alice Johnson", role: "CEO", avatar: "/images/avatar1.jpg" },
  { name: "Michael Smith", role: "CFO", avatar: "/images/avatar2.jpg" },
  { name: "Emily Davis", role: "COO", avatar: "/images/avatar3.jpg" },
];

const Section = styled(Box)({
  padding: `${theme.spacing(8)} 0`,
  backgroundColor: "#f7f9fc",
});

const TeamCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  textAlign: "center",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: theme.spacing(2),
  backgroundColor: "#fff",
});

const AboutUsPage = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h2" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Ama Assistance et Tourisme Médical has been a leader in providing
          quality medical services abroad since 2000. Our mission is to
          facilitate access to world-class medical care for everyone, ensuring a
          seamless and supportive experience.
        </Typography>
      </Section>

      <Section>
        <Typography variant="h4" gutterBottom align="center">
          Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TeamCard>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{
                    width: theme.spacing(10),
                    height: theme.spacing(10),
                    mb: 2,
                  }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.role}
                </Typography>
              </TeamCard>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Container>
  );
};

export default AboutUsPage;
