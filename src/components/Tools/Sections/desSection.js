import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

function DesSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const borderStyle = {
    color: "#F48220",
    margin: "0 0 20px 0",
    padding: "0 0 15px 0",
    borderBottom: "5px solid #0087F5",
    maxWidth: "max-content",
  };
  const textStyle = {
    color: "#192734",
  };
  return (
    <Box textAlign="center" sx={{ my: 5 }}>
      <Typography
        variant={isXs ? "h5" : "h4"}
        fontWeight="bold"
        px={{ xs: 1, lg: 18 }}>
        Accelerating Transformation through Software Solutions bringing Agility,
        Scalability & Growth
      </Typography>
      <Typography variant="subtitle1" my={4} px={{ xs: 1, lg: 40 }}>
        We help you achieve the right balance between resolving business
        challenges, adapting to new demands, & accelerating your digital
        journey! We build efficient software solutions to help you convert your
        idea into reality. From Designing to Developing to Testing & Maintaining
        - We collaborate with you at every stage of your software building or
        digital transformation journey. With a custom agile approach, we
        optimize your journey to accelerate business outcomes.
      </Typography>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <div className="mb-4">
              <ul>
                <li className="flex justify-evenly">
                  <Typography
                    variant={isXs ? "h4" : "h3"}
                    fontWeight="bold"
                    sx={{ ...borderStyle }}>
                    18+
                  </Typography>
                </li>
              </ul>
              <ul>
                <li className="text-center">
                  <Typography variant="subtitle1" sx={{ ...textStyle }}>
                    Years of Experience
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <div className="mb-4">
              <ul>
                <li className="flex justify-evenly">
                  <Typography
                    variant={isXs ? "h4" : "h3"}
                    fontWeight="bold"
                    sx={{ ...borderStyle }}>
                    350+
                  </Typography>
                </li>
              </ul>
              <ul>
                <li className="text-center">
                  <Typography variant="subtitle1" sx={{ ...textStyle }}>
                    Talented IT Professionals
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <div className="mb-4">
              <ul>
                <li className="flex justify-evenly">
                  <Typography
                    variant={isXs ? "h4" : "h3"}
                    fontWeight="bold"
                    sx={{ ...borderStyle }}>
                    3000+
                  </Typography>
                </li>
              </ul>
              <ul>
                <li className="text-center">
                  <Typography variant="subtitle1" sx={{ ...textStyle }}>
                    Successful Projects
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={3}>
            <div className="mb-4">
              <ul>
                <li className="flex justify-evenly">
                  <Typography
                    variant={isXs ? "h4" : "h3"}
                    fontWeight="bold"
                    sx={{ ...borderStyle }}>
                    50+
                  </Typography>
                </li>
              </ul>
              <ul>
                <li className="text-center">
                  <Typography variant="subtitle1" sx={{ ...textStyle }}>
                    Countries Served
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DesSection;
