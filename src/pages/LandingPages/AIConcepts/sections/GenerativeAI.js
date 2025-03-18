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

function GenerativeAI() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                icon="brush"
                title="Creating New Realities"
                description="Generative AI is revolutionizing creative fields by enabling machines to produce original content"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
                title="Discover More"
                description="Generative AI is revolutionizing creative fields by enabling machines to produce original content across text, images, music, and more, expanding the boundaries of human creativity."
                action={{
                  type: "external",
                  label: "learn more",
                  route: "https://www.ibm.com/think/topics/generative-ai",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MKTypography variant="h3" mb={2}>
                  AI as a Creative Partner
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Generative AI refers to artificial intelligence systems that can create new
                  content, including text, images, music, code, and more. These systems learn
                  patterns from existing data and then generate novel outputs that reflect those
                  patterns while introducing variations and new combinations.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  The recent advances in generative AI have transformed how we think about
                  creativity and content creation. From helping artists explore new ideas to
                  assisting writers with drafting content, generative AI is becoming an invaluable
                  tool across creative industries. As these technologies continue to evolve, they
                  promise to further blur the line between human and machine creativity.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="brush"
              title="Text-to-Image Generation"
              description="AI systems that create realistic images from text descriptions, enabling new forms of visual creativity and design"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="music_note"
              title="AI Music Composition"
              description="Systems that generate original music in various styles, creating new melodies, harmonies, and complete compositions"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="description"
              title="Large Language Models"
              description="AI systems trained on vast text corpora that can generate human-like text, answer questions, and assist with writing tasks"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="movie"
              title="Video Generation"
              description="AI that can create realistic videos from text prompts or images, with applications in entertainment, education, and marketing"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default GenerativeAI;
