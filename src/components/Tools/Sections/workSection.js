import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import our_story_pareshsir from "../../../assets/image/our_story_pareshsir.webp";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Google_review from "../../../assets/image/Google_review.webp";
import Glassdoor_review from "../../../assets/image/Glassdoor_review.webp";
import Clutch_Review from "../../../assets/image/Clutch-Review.webp";

const partners = [Google_review, Glassdoor_review, Clutch_Review];

function WorkSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));

  const btnStyle = {
    color: "#0084ff",
    // padding: "12px 20px",
    boxShadow: "0 30px 40px -18px rgba(36,144,239,.2);",
    textTransform: "capitalize",
    cursor: "pointer",
    transition: "transform 3s ease",

    "&:hover": {
      color: "#000",
      backgroundColor: "transparent",
      letterSpacing: ".12em",
    },
  };

  const [partnerIndex1, setPartnerIndex1] = useState(0);
  const [partnerIndex2, setPartnerIndex2] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPartnerIndex1((prevIndex) => (prevIndex + 2) % partners.length);
      setPartnerIndex2((prevIndex2) => (prevIndex2 + 2) % partners.length);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={{ my: isXs ? 2 : 15 }} alignItems="center">
      <Grid container spacing={isXs ? 3 : 15}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              textAlign: isXs ? "center" : "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h4" : "h3"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}>
              How We Work?
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold">
              We have curated <b>A Custom Agile Approach</b> to develop your
              software solutions for <b>maximum adaptability</b> with
              exceptional technological expertise at affordable prices.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img
              src={our_story_pareshsir}
              alt="our_story_pareshsir"
              className="rounded-xl"
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ my: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              textAlign: "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h6" : "h5"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}
              className="color">
              Case Studies
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ pr: isXs ? 1 : 10 }}
              className="p_color"
              style={{ textAlign: "justify" }}>
              Some of our impactful project deliveries which has helped our
              clients deliver differentiating solutions at scale
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ ...btnStyle, pr: isXs ? 1 : 10, mt: isXs ? 2 : 3 }}>
              Explore our Work <ArrowRightAltIcon />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              textAlign: "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h6" : "h5"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}
              className="color">
              Engagement Model
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ pr: isXs ? 1 : 10 }}
              className="p_color"
              style={{ textAlign: "justify" }}>
              We provide three business friendly engagement model to choose from
              viz. Fixed Price, Dedicated Hiring & Time & Material.
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ ...btnStyle, pr: isXs ? 1 : 10, mt: isXs ? 2 : 3 }}>
              Explore our Engagement Model <ArrowRightAltIcon />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              textAlign: "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h6" : "h5"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}
              className="color">
              Methodology
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ pr: isXs ? 1 : 10 }}
              className="p_color"
              style={{ textAlign: "justify" }}>
              We follow a systematic & customized agile methodology for the
              development of your software application keeping in mind - reduced
              timelines & higher efficiencies.
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              sx={{ ...btnStyle, pr: isXs ? 1 : 10, mt: isXs ? 2 : 3 }}>
              Explore Our Development Process <ArrowRightAltIcon />
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{ my: isXs ? 1 : 3, p: 1 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Grid item xs={6}>
          <Box className="block md:hidden">
            <img
              src={partners[partnerIndex1]}
              alt={`Partner ${partnerIndex1}`}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="block md:hidden">
            {/* <img src={partners[partnerIndex1]} alt={`Partner ${partnerIndex1}`} /> */}
            <img
              src={partners[partnerIndex2]}
              alt={`Partner ${partnerIndex2}`}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className="hidden md:block">
            <Grid
              container
              spacing={2}
              sx={{ my: isXs ? 1 : 3, p: 1 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography
                  variant={isXs ? "h5" : "h4"}
                  fontWeight="bold"
                  sx={{ mb: isXs ? 1 : 3 }}>
                  Read our reviews on:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={Google_review} alt="Google_review" />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={Glassdoor_review} alt="Glassdoor_review" />
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <img src={Clutch_Review} alt="Clutch_Review" />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkSection;
