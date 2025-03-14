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

function EthicalAI() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                icon="balance"
                title="Responsible AI Development"
                description="As AI becomes more powerful and pervasive, ethical considerations are essential"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                title="Discover More"
                description="As AI becomes more powerful and pervasive, ethical considerations are essential to ensure these technologies benefit humanity while minimizing potential harms."
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
                  Building AI for Good
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Ethical AI is an approach to artificial intelligence that emphasizes the
                  importance of incorporating ethical principles into the design, development, and
                  deployment of AI systems. It recognizes that as AI becomes more powerful and
                  integrated into our lives, we must ensure these technologies align with human
                  values and societal well-being.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  Key ethical considerations include fairness and non-discrimination, transparency
                  and explainability, privacy and data protection, safety and security, human
                  autonomy, and accountability. By addressing these concerns proactively, we can
                  harness the benefits of AI while mitigating potential risks and ensuring these
                  technologies serve humanity&apos;s best interests.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="balance"
              title="Fairness & Bias"
              description="Ensuring AI systems treat all individuals and groups fairly, without discriminating based on protected characteristics"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="security"
              title="Privacy & Security"
              description="Protecting personal data used by AI systems and ensuring they are secure against unauthorized access or manipulation"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="visibility"
              title="Transparency & Explainability"
              description="Making AI decision-making processes understandable to humans, especially in high-stakes contexts"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="gavel"
              title="Accountability & Governance"
              description="Establishing clear responsibility for AI systems and frameworks for addressing harms or unintended consequences"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default EthicalAI;
