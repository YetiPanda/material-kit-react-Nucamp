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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

function Robotics() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="precision_manufacturing"
              title="Industrial Automation"
              description="Robotic systems that automate manufacturing processes, increasing efficiency, precision, and safety in industrial settings"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="healing"
              title="Medical Robotics"
              description="Robotic systems used in surgery, rehabilitation, and patient care, enhancing precision and enabling minimally invasive procedures"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="directions_car"
              title="Autonomous Vehicles"
              description="Self-driving cars, drones, and other vehicles that navigate and operate without human intervention"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="home"
              title="Domestic Robots"
              description="Robots designed for household tasks like cleaning, security, and entertainment, improving quality of life"
            />
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                icon="precision_manufacturing"
                title="The Robotics Revolution"
                description="AI-powered robotics is transforming how we work, live, and interact with our environment"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                title="Discover More"
                description="AI-powered robotics is transforming how we work, live, and interact with our environment, automating physical tasks and extending human capabilities."
                action={{
                  type: "internal",
                  label: "learn more",
                  route: "/",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MKTypography variant="h3" mb={2}>
                  The Future of Automation
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Robotics is a multidisciplinary field that combines mechanical engineering, electrical engineering, computer science, and artificial intelligence to design, construct, and operate robots. These machines are designed to perform tasks that would be difficult, dangerous, or impossible for humans to do directly.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  As AI advances, robots are becoming increasingly autonomous, adaptable, and capable of learning from their environments. From manufacturing and healthcare to agriculture and space exploration, robotics is revolutionizing industries and creating new possibilities for human-machine collaboration.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Robotics;
