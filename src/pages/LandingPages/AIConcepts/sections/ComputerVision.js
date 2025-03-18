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

function ComputerVision() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                icon="visibility"
                title="Seeing the World"
                description="Computer Vision enables machines to interpret and understand visual information"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                title="Discover More"
                description="Computer Vision enables machines to interpret and understand visual information from the world, revolutionizing industries from autonomous vehicles to retail analytics."
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
                  Machines That Can See
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Computer Vision is a field of artificial intelligence that trains computers to
                  interpret and understand the visual world. Using digital images from cameras and
                  videos and deep learning models, machines can accurately identify and classify
                  objects and then react to what they see.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  The applications of computer vision are vast and growing, from self-driving cars
                  and facial recognition systems to augmented reality and industrial quality
                  control. As algorithms become more sophisticated and computing power increases,
                  computer vision systems are approaching and sometimes exceeding human capabilities
                  in specific visual tasks.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="face"
              title="Facial Recognition"
              description="Systems that identify or verify a person's identity using their facial features, with applications in security and authentication"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="find_in_page"
              title="Object Detection"
              description="Algorithms that identify and locate objects within images or video streams, enabling automated visual inspection"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="medical_services"
              title="Medical Imaging"
              description="AI systems that analyze medical images to detect diseases, assist in diagnosis, and improve patient outcomes"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="auto_fix_high"
              title="Image Enhancement"
              description="Techniques that improve image quality, restore degraded images, and generate high-resolution versions from low-resolution inputs"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ComputerVision;
