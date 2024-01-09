import React from "react";
import Logo from "../../../assets/image/Logo.png";
import INDIAFLAG from "../../../assets/image/india-flag-icon.png";
import USAFLAG from "../../../assets/image/united-states-flag-icon.png";
import Review from "../../../assets/image/Clutch-Review.webp";
import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import AddAlarmRoundedIcon from "@mui/icons-material/AddAlarmRounded";
import AddToQueueRoundedIcon from "@mui/icons-material/AddToQueueRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import GamepadRoundedIcon from "@mui/icons-material/GamepadRounded";
import GrassRoundedIcon from "@mui/icons-material/GrassRounded";

function Footer() {
  return (
    <Box className="pt-7" style={{ backgroundColor: "#F6F7FA" }}>
      <Container maxWidth="xl">
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="mb-4 hover:cursor-pointer">
              <ul>
                <li>
                  <Link to="/">
                    <img src={Logo} alt="Logo" style={{ width: "80%" }} />
                  </Link>
                </li>
              </ul>
              <ul className="mt-5">
                <li>
                  <Typography variant="h5">
                    Want to talk about your project ?
                  </Typography>
                </li>
              </ul>
              <ul className="mt-5">
                <li>
                  <Button variant="contained" size="large">
                    Schedule A Call
                  </Button>
                </li>
              </ul>
              <ul className="mt-5">
                <li>
                  <img src={Review} alt="Review" />
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="mb-4 hover:cursor-pointer">
              <ul>
                <li>
                  <Typography variant="h6">Services</Typography>
                </li>
              </ul>
              <ul className="mt-5">
                <li>
                  <Typography variant="subtitle1">
                    Custom Software Development
                  </Typography>
                  <Typography variant="subtitle1">
                    Web Application Development
                  </Typography>
                  <Typography variant="subtitle1">
                    Mobile Application Development
                  </Typography>
                  <Typography variant="subtitle1">QA & Testing</Typography>
                  <Typography variant="subtitle1">
                    Support & Maintenance
                  </Typography>
                  <Typography variant="subtitle1">
                    Staff Augmentation
                  </Typography>
                  <Typography variant="subtitle1">Cloud</Typography>
                  <Typography variant="subtitle1">DevOps</Typography>
                  <Typography variant="subtitle1">
                    Artificial Intelligence & Machine Learning
                  </Typography>
                </li>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="mb-4 hover:cursor-pointer">
              <ul>
                <li>
                  <Typography variant="h6">Technologies</Typography>
                </li>
              </ul>
              <ul className="mt-5">
                <Grid item xs={12} className="flex">
                  <Grid item xs={6}>
                    <li>
                      <Typography variant="subtitle1">ReactJS</Typography>
                      <Typography variant="subtitle1">AngularJS</Typography>
                      <Typography variant="subtitle1">NodeJS</Typography>
                      <Typography variant="subtitle1">PHP</Typography>
                      <Typography variant="subtitle1">.NET</Typography>
                      <Typography variant="subtitle1">ROR</Typography>
                      <Typography variant="subtitle1">JAVA</Typography>
                    </li>
                  </Grid>
                  <Grid item xs={6}>
                    <li>
                      <Typography variant="subtitle1">WordPress</Typography>
                      <Typography variant="subtitle1">CodeIgniter</Typography>
                      <Typography variant="subtitle1">Laravel</Typography>
                      <Typography variant="subtitle1">Android</Typography>
                      <Typography variant="subtitle1">iOS</Typography>
                      <Typography variant="subtitle1">React Native </Typography>
                      <Typography variant="subtitle1">Flutter</Typography>
                    </li>
                  </Grid>
                </Grid>
              </ul>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="mb-4 hover:cursor-pointer">
              <ul>
                <li>
                  <Typography variant="h6">Connect with us</Typography>
                </li>
              </ul>
              <ul className="mt-5">
                <Grid item xs={12} className="flex">
                  <Grid item xs={2}>
                    <li>
                      <img
                        src={USAFLAG}
                        alt="USAFLAG"
                        style={{ width: "80%" }}
                        className="mt-2"
                      />
                    </li>
                  </Grid>
                  <Grid item xs={10}>
                    <li>
                      <Typography variant="subtitle1">
                        43519 Wheadon Ter, Chantilly VA
                      </Typography>
                      <Typography variant="subtitle1">20152 - USA</Typography>
                      <Typography variant="subtitle2">
                        +1 (650) 209 8400
                      </Typography>
                    </li>
                  </Grid>
                </Grid>
              </ul>
              <ul className="mt-5">
                <Grid item xs={12} className="flex">
                  <Grid item xs={2}>
                    <li>
                      <img
                        src={INDIAFLAG}
                        alt="INDIAFLAG"
                        style={{ width: "80%" }}
                        className="mt-2"
                      />
                    </li>
                  </Grid>
                  <Grid item xs={10}>
                    <li>
                      <Typography variant="subtitle1">
                        104, Regent Square, Adajan, Surat
                      </Typography>
                      <Typography variant="subtitle1">
                        395009 – INDIA
                      </Typography>
                      <Typography variant="subtitle2">
                        +91 89800 00788
                      </Typography>
                    </li>
                  </Grid>
                </Grid>
              </ul>
              <ul className="mt-5">
                <Grid item xs={12} className="flex text-gray-500">
                  <AddAlarmRoundedIcon />
                  <AddToQueueRoundedIcon sx={{ ml: 2 }} />
                  <CalendarMonthRoundedIcon sx={{ ml: 2 }} />
                  <DevicesRoundedIcon sx={{ ml: 2 }} />
                  <GamepadRoundedIcon sx={{ ml: 2 }} />
                  <GrassRoundedIcon sx={{ ml: 2 }} />
                </Grid>
              </ul>
            </div>
          </Grid>

          <Box
            sx={{
              flexGrow: 1,
              ml: { lg: 10, md: 20, sm: 10, sx: 10 },
            }}></Box>
        </Grid>
      </Container>
      <hr className="mt-6" />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ p: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="text-white">
              <Typography variant="body2" className="text-stone-500 mt-4">
                &copy; 2023 All Right Reserved | WebBuildInfoTech.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="text-white">
              <Typography
                variant="body2"
                textAlign="right"
                className="text-stone-400 mt-4 flex-left ">
                <Typography variant="body2" sx={{ mr: 2 }}>
                  &nbsp; Privacy Policy &nbsp; | &nbsp; Terms & Conditions
                  &nbsp; | &nbsp; Sitemap &nbsp;
                </Typography>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
