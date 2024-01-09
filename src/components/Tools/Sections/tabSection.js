import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import EarbudsBatteryRoundedIcon from "@mui/icons-material/EarbudsBatteryRounded";
import AppSettingsAltRoundedIcon from "@mui/icons-material/AppSettingsAltRounded";
import ManageSearchRoundedIcon from "@mui/icons-material/ManageSearchRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const boxStyle = {
    // borderBottom: "5px solid #0087F5",
    background: "#f9f9ff",
  };
  const tabStyle = {
    // color: "#F48220",
    // borderBottom: "50px solid #0087F5",
  };

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
    <Box
      sx={{
        ...boxStyle,
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
      }}>
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className="inline-flex"
        sx={{ ...tabStyle, borderRight: 1, borderColor: "divider" }}>
        <Tab
          icon={<MiscellaneousServicesIcon sx={{ mr: 2 }} />}
          label="Custom Software Development "
          {...a11yProps(0)}
        />
        <Tab
          label="Web Application Development"
          icon={<LaptopRoundedIcon sx={{ mr: 2 }} />}
          {...a11yProps(1)}
        />
        <Tab
          label="Mobile App Development"
          icon={<AppSettingsAltRoundedIcon sx={{ mr: 2 }} />}
          {...a11yProps(2)}
        />
        <Tab
          label="Support and Maintenance"
          icon={<EarbudsBatteryRoundedIcon sx={{ mr: 2 }} />}
          {...a11yProps(3)}
        />
        <Tab
          label="QA & Testing"
          icon={<ManageSearchRoundedIcon sx={{ mr: 2 }} />}
          {...a11yProps(4)}
        />
        <Tab
          label="AIML"
          icon={<MemoryIcon sx={{ mr: 2 }} />}
          {...a11yProps(5)}
        />
        <Tab
          label="Cloud"
          icon={<CloudIcon sx={{ mr: 2 }} />}
          {...a11yProps(6)}
        />
        <Tab
          label="DevOps"
          icon={<AllInclusiveIcon sx={{ mr: 2 }} />}
          {...a11yProps(7)}
        />
        <Tab
          icon={<SupervisorAccountIcon sx={{ mr: 2 }} />}
          label="Staff Augmentation"
          {...a11yProps(8)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* <Box sx={{ px: 10, mt: 5 }}> */}
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Custom Software Solutions to drive your niche & strategic business
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            With industry and technology expertise we help you develop your
            custom software to help you digitalize your processes, enhance your
            operations, drive strategic business outcomes.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Product Engineering
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Digital Transformation
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              MVP Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Enterprise Applications
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Integration Services
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Build your Web application with cutting-edge technologies and
            battle-tested tools.
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            We leverage long-standing experience in building and offering custom
            web application helping you implement the right technologies in
            areas that are best suited to bring your business value.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Website Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              E-Commerce Web App Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Software Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Web Application Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Web Application Support & Maintenance
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Progressive Web Apps
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Mobile App Development That Turns Your Ideas Into Reality
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            To make an app with the capability of earning billions, you need a
            reliable tech partner
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Android App Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              iOS App Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              React Native Cross Platform App Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Flutter Cross Platform App Development
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Mobile App Support & Maintenance
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Mobile App Testing
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Many times, one focuses only on the development, but it is the
            maintenance that keeps it going!
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            We aspire to keep your software/app running with 100% efficiency.
            And for that, post-launch service is as crucial as quality
            development. We understand your system, source codes so identifying
            glitches becomes faster and scaling up becomes easy and
            cost-efficient.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Modifications & Technical Improvements
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Bug & Glitch Removal
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Performance Improvements
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Enhance Customer Experience, Enhance Returns.
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            Get faster & assured quality testing solutions with our 10,000+ test
            cases & over 1000+ automation scripts!
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Automation Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Manual Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Security Software Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Performance Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Compatibility Software Testing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              API Testing
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            In today’s rapidly evolving landscape, data and AI is paramount.
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            Vision of Narola's AIML service is to bring out innovative,
            unpredictable solutions that can solve to complex business
            challenges beyond the capabilities of human.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Business Analytics
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Data Analytics & Engineering
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Predictive & Cognitive Analytics
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Recommendation Engine
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Chatbots
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Natural Language Processing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Visual Search & Image Recognition
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Voice based AI
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            End-to-End Cloud Service with industry specific expertise
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            Cloud is your platform for Digitalisation journey - maximize the
            business outcomes of cloud adoption with us!
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Cloud Migration Services
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Cloud Automation
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Cloud Security
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Highly Available and Fault Tolerant Infra
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Continuous Monitoring
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            It's time to consider opting for DevOps to improve your company’s
            productivity.
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            Vision of Narola's AIML service is to bring out innovative,
            unpredictable solutions that can solve to complex business
            challenges beyond the capabilities of human.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Managed DevOps Services
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              DevOps Infrastructure Automation
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Cloud Computing
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Continuous Integration and Continuous Deployment (CI/CD)
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              DevOps Automation Service
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              DevOps Implementation service
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Security & Compliance
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Microservices in DevOps
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Box>
          <Typography variant="h4" fontWeight="semibold">
            Hire Skilled IT Experts at the Click of a Button
          </Typography>
          <Typography fontWeight="subtitle1" sx={{ mt: 4 }}>
            Our Staff Augmentation services will give a big boost to your
            existing team and will help you achieve your business goals quickly.
          </Typography>
          <Grid container justifyContent="left" sx={{ mt: 4 }}>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Hire a Dedicated Team
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 2 }}>
              <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
              Hire a Developer
            </Grid>
          </Grid>
          <Button
            variant="contained"
            size="large"
            sx={{ ...btnStyle, mt: 3 }}
            endIcon={<ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />}>
            Get more info
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function TabSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const [isSm, setIsSm] = useState(isXs);

  useEffect(() => {
    setIsSm(isXs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXs]);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
    <Box sx={{ mb: 7 }}>
      <Typography
        sx={{
          mb: {
            sm: 3,
            xs: 3,
            lg: 4,
          },
        }}
        variant={isSm ? "h4" : "h3"}
        fontWeight="bold"
        textAlign="center">
        Services We Offer
      </Typography>
      <div className="hidden md:block">
        <VerticalTabs textAlign="left" />
      </div>
      <div className="md:hidden">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header">
              <Typography variant="h6">
                <MiscellaneousServicesIcon sx={{ mr: 2 }} />
                Custom Software Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Custom Software Solutions to drive your niche & strategic
                  business
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  With industry and technology expertise we help you develop
                  your custom software to help you digitalize your processes,
                  enhance your operations, drive strategic business outcomes.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Product Engineering
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Digital Transformation
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    MVP Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Enterprise Applications
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Integration Services
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header">
              <Typography variant="h6">
                <LaptopRoundedIcon sx={{ mr: 2 }} /> Web Application Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Build your Web application with cutting-edge technologies and
                  battle-tested tools.
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  We leverage long-standing experience in building and offering
                  custom web application helping you implement the right
                  technologies in areas that are best suited to bring your
                  business value.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Website Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    E-Commerce Web App Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Software Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Web Application Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Web Application Support & Maintenance
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Progressive Web Apps
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}>
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header">
              <Typography variant="h6">
                <AppSettingsAltRoundedIcon sx={{ mr: 2 }} /> Mobile App
                Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Mobile App Development That Turns Your Ideas Into Reality
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  To make an app with the capability of earning billions, you
                  need a reliable tech partner
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Android App Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    iOS App Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    React Native Cross Platform App Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Flutter Cross Platform App Development
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Mobile App Support & Maintenance
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Mobile App Testing
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}>
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header">
              <Typography variant="h6">
                <EarbudsBatteryRoundedIcon sx={{ mr: 2 }} /> Support and
                Maintenance
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Many times, one focuses only on the development, but it is the
                  maintenance that keeps it going!
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  We aspire to keep your software/app running with 100%
                  efficiency. And for that, post-launch service is as crucial as
                  quality development. We understand your system, source codes
                  so identifying glitches becomes faster and scaling up becomes
                  easy and cost-efficient.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Modifications & Technical Improvements
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Bug & Glitch Removal
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Performance Improvements
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}>
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header">
              <Typography variant="h6">
                <ManageSearchRoundedIcon sx={{ mr: 2 }} /> QA and Testing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Enhance Customer Experience, Enhance Returns.
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Get faster & assured quality testing solutions with our
                  10,000+ test cases & over 1000+ automation scripts!
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Automation Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Manual Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Security Software Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Performance Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Compatibility Software Testing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    API Testing
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}>
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header">
              <Typography variant="h6">
                <MemoryIcon sx={{ mr: 2 }} /> AIML
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  In today’s rapidly evolving landscape, data and AI is
                  paramount.
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Vision of Narola's AIML service is to bring out innovative,
                  unpredictable solutions that can solve to complex business
                  challenges beyond the capabilities of human.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Business Analytics
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Data Analytics & Engineering
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Predictive & Cognitive Analytics
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Recommendation Engine
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Chatbots
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Natural Language Processing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Visual Search & Image Recognition
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Voice based AI
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}>
            <AccordionSummary
              aria-controls="panel7d-content"
              id="panel7d-header">
              <Typography variant="h6">
                <CloudIcon sx={{ mr: 2 }} /> Cloud
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  End-to-End Cloud Service with industry specific expertise
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Cloud is your platform for Digitalisation journey - maximize
                  the business outcomes of cloud adoption with us!
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Cloud Migration Services
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Cloud Automation
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Cloud Security
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Highly Available and Fault Tolerant Infra
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Continuous Monitoring
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}>
            <AccordionSummary
              aria-controls="panel8d-content"
              id="panel8d-header">
              <Typography variant="h6">
                <AllInclusiveIcon sx={{ mr: 2 }} /> Devops
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  It's time to consider opting for DevOps to improve your
                  company’s productivity.
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Vision of Narola's AIML service is to bring out innovative,
                  unpredictable solutions that can solve to complex business
                  challenges beyond the capabilities of human.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Managed DevOps Services
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    DevOps Infrastructure Automation
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Cloud Computing
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Continuous Integration and Continuous Deployment (CI/CD)
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    DevOps Automation Service
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    DevOps Implementation service
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Security & Compliance
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Microservices in DevOps
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}>
            <AccordionSummary
              aria-controls="panel9d-content"
              id="panel9d-header">
              <Typography variant="h6">
                <SupervisorAccountIcon sx={{ mr: 2 }} /> Staff Augmentation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Hire Skilled IT Experts at the Click of a Button
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 2 }}>
                  Our Staff Augmentation services will give a big boost to your
                  existing team and will help you achieve your business goals
                  quickly.
                </Typography>
                <Grid container justifyContent="left" sx={{ mt: 1 }}>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Hire a Dedicated Team
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ p: 2 }}>
                    <CheckRoundedIcon className="bg-green-300 text-black rounded-full p-0.5 mr-4" />{" "}
                    Hire a Developer
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ ...btnStyle, mt: 3 }}
                  endIcon={
                    <ArrowRightAltRoundedIcon sx={{ fontSize: "1.5rem" }} />
                  }>
                  Get more info
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </Box>
  );
}

export default TabSection;
