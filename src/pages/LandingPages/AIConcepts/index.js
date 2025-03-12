/* eslint-disable prettier/prettier */
/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// AI Concepts page sections
import MachineLearning from "pages/LandingPages/AIConcepts/sections/MachineLearning";
import NaturalLanguageProcessing from "pages/LandingPages/AIConcepts/sections/NaturalLanguageProcessing";
import ComputerVision from "pages/LandingPages/AIConcepts/sections/ComputerVision";
import Robotics from "pages/LandingPages/AIConcepts/sections/Robotics";
import NeuralNetworks from "pages/LandingPages/AIConcepts/sections/NeuralNetworks";
import GenerativeAI from "pages/LandingPages/AIConcepts/sections/GenerativeAI";
import EthicalAI from "pages/LandingPages/AIConcepts/sections/EthicalAI";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/ai-images/Category-bg7-crop.png";

function AIConcepts() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              AI Concepts
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              Explore the fascinating world of artificial intelligence and its transformative impact on our future
            </MKTypography>
            <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              learn more
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Connect with us
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#" mr={3}>
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography component="a" variant="body1" color="white" href="#">
                <i className="fab fa-linkedin" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MachineLearning />
        <NaturalLanguageProcessing />
        <ComputerVision />
        <Robotics />
        <NeuralNetworks />
        <GenerativeAI />
        <EthicalAI />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AIConcepts;
