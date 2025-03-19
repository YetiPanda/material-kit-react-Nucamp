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
// import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// // Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/Category-bg7-crop.png";
import cs229Image from "assets/images/cs229.png";
import cs230Image from "assets/images/cs230.png";
import cs231nImage from "assets/images/cs231n.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Discover AI{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              The Future is Now! Discover the latest AI concepts and technologies that are shaping
              the world around us.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <MKTypography variant="h2" textAlign="center" mt={6} mb={4}>
          Stanford AI Courses
        </MKTypography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <a href="http://cs229.aman.ai">
              <MKBox textAlign="center">
                <img
                  style={{ width: "80%", height: "40%", margin: "20% 0 12%" }}
                  src={cs229Image}
                  alt="Stanford CS229"
                />
                <MKTypography variant="h3">Stanford CS229</MKTypography>
                <MKTypography variant="h4" fontStyle="italic">
                  Machine Learning
                </MKTypography>
              </MKBox>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <a href="http://cs230.aman.ai">
              <MKBox textAlign="center">
                <img
                  style={{ width: "80%", height: "40%", margin: "20% 0 12%" }}
                  src={cs230Image}
                  alt="Stanford CS230"
                />
                <MKTypography variant="h3">Stanford CS230</MKTypography>
                <MKTypography variant="h4" fontStyle="italic">
                  Deep Learning
                </MKTypography>
              </MKBox>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <a href="http://cs231n.aman.ai">
              <MKBox textAlign="center">
                <img
                  style={{ width: "80%", height: "25%", margin: "30% 0 15%" }}
                  src={cs231nImage}
                  alt="Stanford CS231n"
                />
                <MKTypography variant="h3">Stanford CS231n</MKTypography>
                <MKTypography variant="h4" fontStyle="italic">
                  Convolutional Neural Networks
                </MKTypography>
              </MKBox>
            </a>
          </Grid>
          {/* Add similar Grid items for other courses */}
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
