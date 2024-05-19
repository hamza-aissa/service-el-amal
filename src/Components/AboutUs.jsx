import React from "react";
import { Container, Typography, styled } from "@mui/material";
import theme from "../theme";

const AboutUsContainer = styled(Container)({
  padding: `${theme.spacing(8)} 0`,
  textAlign: "center",
});

const AboutContent = styled("div")({
  maxWidth: 700,
  margin: "auto",
});

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <AboutContent>
        <Typography variant="body1" paragraph>
          Service El Amal, established in 2016, stands as a prominent entity in
          the medical tourism sector, offering specialized services that
          facilitate international clients seeking medical treatments abroad.
        </Typography>
        <Typography variant="body1" paragraph>
          With a rich history rooted in providing comprehensive assistance,
          Service El Amal has evolved into a trusted partner for individuals
          navigating complex medical journeys.
        </Typography>
        <Typography variant="body1">
          Our commitment to excellence and innovation is evident in our
          dedication to meeting the unique needs of medical tourism clients.
          Over the years, we have built a solid reputation for reliability,
          professionalism, and a personalized approach, making us the preferred
          choice for individuals seeking quality medical services coupled with
          exceptional support throughout their medical journey.
        </Typography>
      </AboutContent>
    </AboutUsContainer>
  );
};

export default AboutUs;
