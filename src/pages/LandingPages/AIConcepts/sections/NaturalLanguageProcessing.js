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

function NaturalLanguageProcessing() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="translate"
              title="Machine Translation"
              description="Systems that automatically translate text or speech from one language to another, breaking down language barriers"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="chat"
              title="Conversational AI"
              description="Chatbots and virtual assistants that can understand and respond to human language in a natural way"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="sentiment_satisfied"
              title="Sentiment Analysis"
              description="Algorithms that identify and extract subjective information from text to determine attitudes, emotions, and opinions"
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="summarize"
              title="Text Summarization"
              description="Systems that condense large volumes of text into concise summaries while preserving key information and meaning"
            />
          </Grid>
        </Grid>
        <Grid container item xs={11} spacing={3} sx={{ mx: "auto", mt: 6 }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                icon="translate"
                title="NLP Revolution"
                description="Natural Language Processing is revolutionizing how we interact with technology"
              />
              <RotatingCardBack
                image="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                title="Discover More"
                description="Natural Language Processing is revolutionizing how we interact with technology, enabling machines to understand, interpret, and generate human language in ways that are meaningful and useful."
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
                  Understanding Human Language
                </MKTypography>
                <MKTypography variant="body2" color="text">
                  Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and humans through natural language. The ultimate goal of NLP is to enable computers to understand, interpret, and generate human language in a way that is both meaningful and useful.
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  From voice assistants and language translation to content analysis and automated customer service, NLP applications are becoming increasingly sophisticated and prevalent in our daily lives. As algorithms improve and training data expands, NLP systems continue to narrow the gap between human and machine communication.
                </MKTypography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default NaturalLanguageProcessing;
