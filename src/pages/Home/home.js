import React, { useState, useEffect } from "react";
import {
  ClientsExperienceSection,
  DesSection,
  IndustrySection,
  Layout,
  MenuSection,
  TabSection,
  TechnologiesSection,
  WorkSection,
} from "../../components/index";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import NISL_Year_Logo from "../../assets/image/NISL-year-logo.svg";
import nisl_banner_logo from "../../assets/image/nisl-banner-logo.svg";

function Home() {
  const partners = [
    "Fintech",
    "Healthcare",
    "Retail & eCommerce",
    "Travel & Hospitality",
    "Real Estate",
  ];
  const [partnerIndex, setPartnerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partnerIndex]);

  const btnStyle = {
    color: "white",
    backgroundColor: "#0084ff",
    padding: "12px 20px",
    // width: "150px",

    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #0084ff",
      color: "#0084ff",
    },
  };
  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${nisl_banner_logo})`,
          // backgroundSize: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "0",
          minHeight: "auto",
          padding: "65px 0",
        }}>
        <Container maxWidth="xl">
          <Box
            className="p-5"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className="">
                  <h2 className="text-4xl font-semibold  hidden sm:block">
                    Digitalizing Businesses across the Globe
                  </h2>
                  <div className="mt-7 hidden sm:block"></div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold  ">
                    Trusted Custom
                    <br />
                    <h2
                      className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold  "
                      sx={{ mt: 1 }}>
                      Software Development
                    </h2>
                    <div className="flex items-start flex-col justify-start sm:items-center sm:flex-col">
                      {/* Content for small screens */}
                      <h2 sx={{ mt: 2 }} className="sm:hidden">
                        Partner in&nbsp;
                      </h2>
                      <b className="sm:hidden">
                        <label className="animation_wrapper_color">
                          <h2 className="mb-3 ">{partners[partnerIndex]}</h2>
                        </label>
                      </b>
                    </div>
                    {/* Content for larger screens */}
                    <div className="flex items-center justify-start  ">
                      <h2 sx={{ mt: 2 }} className="hidden sm:block">
                        Partner in&nbsp;
                      </h2>
                      <b className="hidden sm:block">
                        <label className="animation_wrapper_color">
                          <h2 className="mb-3 mt-2">
                            {partners[partnerIndex]}
                          </h2>
                        </label>
                      </b>
                    </div>
                  </h2>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}>
                  CONSULT WebBuildInfotech
                </Button>

                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                  <Typography variant="subtitle2" sx={{ mt: 5, mb: 5 }}>
                    QUALITY FOCUS &nbsp;&nbsp;|
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 5, mb: 5 }}>
                    CUSTOMER CENTRIC &nbsp;&nbsp;|
                  </Typography>
                  <Typography variant="subtitle2" sx={{ mt: 5, mb: 5 }}>
                    INSIGHTS DRIVEN
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                className="flex justify-center">
                <img
                  src={NISL_Year_Logo}
                  alt="NISL_Year_Logo"
                  style={{ width: "70%" }}
                  className="hidden md:hidden lg:block xl:block"
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <MenuSection />
        <DesSection />
        <TabSection />
        <IndustrySection />
        <TechnologiesSection />
        <WorkSection />
        <ClientsExperienceSection />
      </Container>
    </Layout>
  );
}

export default Home;
