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

function NeuralNetworks() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2034&q=80"
                icon="hub"
                title="Brain-Inspired Computing"
                description="Neural networks draw inspiration from the human brain, using interconnected nodes"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2034&q=80"
                title="Discover More"
                description="Neural networks draw inspiration from the human brain, using interconnected nodes to process information, learn patterns, and make decisions with remarkable accuracy."
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
                  The Building Blocks of AI
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Neural networks are a set of algorithms, modeled loosely after the human brain,
                  that are designed to recognize patterns. They interpret sensory data through a
                  kind of machine perception, labeling or clustering raw input. The patterns they
                  recognize are numerical, contained in vectors, into which all real-world data, be
                  it images, sound, text or time series, must be translated.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  What makes neural networks so powerful is their ability to learn from data,
                  improving their accuracy over time without being explicitly programmed with rules.
                  This capability has led to breakthroughs in image and speech recognition, natural
                  language processing, and game playing, among many other domains.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="hub"
              title="Convolutional Neural Networks"
              description="Specialized neural networks designed for processing grid-like data such as images, revolutionizing computer vision"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="settings_ethernet"
              title="Recurrent Neural Networks"
              description="Neural networks with feedback connections, capable of processing sequential data like text, speech, and time series"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="transform"
              title="Transformers"
              description="Neural network architecture that uses self-attention mechanisms, powering breakthroughs in natural language processing"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="swap_horiz"
              title="Generative Adversarial Networks"
              description="Neural networks that can generate new content by pitting two networks against each other in a game-like scenario"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NeuralNetworks;
