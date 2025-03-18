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

function MachineLearning() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                icon="smart_toy"
                title="Machine Learning Applications"
                description="Machine learning is transforming industries from healthcare to finance"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                title="Discover More"
                description="Machine learning is transforming industries from healthcare to finance, enabling predictive analytics, personalized recommendations, and automated decision-making systems."
                action={{
                  type: "external",
                  label: "learn more",
                  route: "https://www.ibm.com/think/topics/machine-learning",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MKTypography variant="h3" mb={2}>
                  The Power of Machine Learning
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Machine learning is a subset of artificial intelligence that enables systems to
                  learn and improve from experience without being explicitly programmed. It focuses
                  on developing algorithms that can access data, learn from it, and make predictions
                  or decisions.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  The applications of machine learning are vast and growing rapidly, from
                  recommendation systems and fraud detection to autonomous vehicles and medical
                  diagnosis. As data becomes more abundant and computing power increases, machine
                  learning continues to advance and transform industries.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="smart_toy"
              title="Supervised Learning"
              description="Algorithms trained on labeled data to make predictions or decisions without being explicitly programmed"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="scatter_plot"
              title="Unsupervised Learning"
              description="Algorithms that find patterns in data without explicit labels, discovering hidden structures in data"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="sports_esports"
              title="Reinforcement Learning"
              description="Algorithms that learn optimal actions through trial and error, maximizing rewards in dynamic environments"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="bar_chart"
              title="Deep Learning"
              description="Neural networks with multiple layers that can learn complex patterns and representations from large amounts of data"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MachineLearning;
