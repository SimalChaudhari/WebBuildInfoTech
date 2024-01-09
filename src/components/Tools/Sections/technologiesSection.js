import {
  Box,
  Button,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import React from "react";
import PropTypes from "prop-types";
import angular_Logo from "../../../assets/Logos/angular_Logo.png";
import React_Logo from "../../../assets/Logos/React_Logo.png";
import vue_Logo from "../../../assets/Logos/vue_Logo.png";
import nextjs_Logo from "../../../assets/Logos/nextjs_Logo.png";
import nuxt_js_Logo from "../../../assets/Logos/nuxt_js_Logo.png";
import node_js_Logo from "../../../assets/Logos/node_js_Logo.png";
import java_Logo from "../../../assets/Logos/java_Logo.png";
import dot_net_Logo from "../../../assets/Logos/dot_net_Logo.png";
import php_Logo from "../../../assets/Logos/php_Logo.png";
import laravel_Logo from "../../../assets/Logos/laravel_Logo.png";
import codeigniter_Logo from "../../../assets/Logos/codeigniter_Logo.png";
import Ruby_on_Rails_Logo from "../../../assets/Logos/Ruby_on_Rails_Logo.png";
import nestjs_Logo from "../../../assets/Logos/nestjs_Logo.png";
import android_Logo from "../../../assets/Logos/android_Logo.png";
import apple_Logo from "../../../assets/Logos/apple_Logo.png";
import flutter_Logo from "../../../assets/Logos/flutter_Logo.png";
import wordpress_Logo from "../../../assets/Logos/wordpress_Logo.png";
import mysq_Logo from "../../../assets/Logos/mysq_Logo.png";
import MS_SQL_Logo from "../../../assets/Logos/MS_SQL_Logo.svg";
import mongodb_Logo from "../../../assets/Logos/mongodb_Logo.png";
import SQLite_Logo from "../../../assets/Logos/SQLite_Logo.svg";
import postgresql_Logo from "../../../assets/Logos/postgresql_Logo.png";
import firebase_Logo from "../../../assets/Logos/firebase_Logo.png";
import realm_Logo from "../../../assets/Logos/realm_Logo.png";
import terraform_Logo from "../../../assets/Logos/terraform_Logo.png";
import CI_CD_Logo from "../../../assets/Logos/CI_CD_Logo.svg";
import AWS_Logo from "../../../assets/Logos/AWS_Logo.svg";
import jenkins_Logo from "../../../assets/Logos/jenkins_Logo.png";
import kubernetes_Logo from "../../../assets/Logos/kubernetes_Logo.png";
import Docker_Logo from "../../../assets/Logos/Docker_Logo.svg";
import microsoft_teams_Logo from "../../../assets/Logos/microsoft_teams_Logo.png";
import jira_Logo from "../../../assets/Logos/jira_Logo.png";
import asana_Logo from "../../../assets/Logos/asana_Logo.png";
import slack_Logo from "../../../assets/Logos/slack_Logo.png";
import ClickUp_Logo from "../../../assets/Logos/ClickUp_Logo.svg";
import trello_Logo from "../../../assets/Logos/trello_Logo.png";
import MondayDotCom_Logo from "../../../assets/Logos/MondayDotCom_Logo.svg";
import Pivotal_Logo from "../../../assets/Logos/Pivotal_Logo.svg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TechnologiesSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const btnStyle = {
    backgroundColor: "#0084ff",
    color: "white",
    padding: "12px 20px",
    boxShadow: "0 30px 40px -18px rgba(36,144,239,.2);",
    textTransform: "capitalize",
    transition: "transform 0.3s ease",

    "&:hover": {
      color: "#0084ff",
      border: "1px solid #0084ff",
      backgroundColor: "transparent",
    },
  };

  return (
    <Box textAlign="center" sx={{ my: isXs ? 1 : 10 }}>
      <Typography
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          my: 5,
        }}
        variant={isXs ? "h5" : "h4"}
        fontWeight="bold">
        Technologies & Platforms We Work With
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          // maxWidth: { xs: 320, sm: 480 },
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
        }}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}>
            {/* Include the provided Tabs component with scrollable behavior */}
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example">
              <Tab label="Front End" {...a11yProps(0)} />
              <Tab label="Back End" {...a11yProps(1)} />
              <Tab label="Mobile" {...a11yProps(2)} />
              <Tab label="CMS" {...a11yProps(3)} />
              <Tab label="Database" {...a11yProps(4)} />
              <Tab label="DevOps and Cloud" {...a11yProps(5)} />
              <Tab label="Project Management" {...a11yProps(6)} />
            </Tabs>
          </Box>
          {/* Include your CustomTabPanel components here */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              width: "70%",
            }}>
            <CustomTabPanel value={value} index={0}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={angular_Logo}
                        alt={angular_Logo}
                        title={angular_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Angular</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={React_Logo}
                        alt={React_Logo}
                        title={React_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">React</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={vue_Logo}
                        alt={vue_Logo}
                        title={vue_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Vue</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={nextjs_Logo}
                        alt={nextjs_Logo}
                        title={nextjs_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Next</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={nuxt_js_Logo}
                        alt={nuxt_js_Logo}
                        title={nuxt_js_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">NuxtJS</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={node_js_Logo}
                        alt={node_js_Logo}
                        title={node_js_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">NodeJS</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={java_Logo}
                        alt={java_Logo}
                        title={java_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Java</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={dot_net_Logo}
                        alt={dot_net_Logo}
                        title={dot_net_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">DotNet</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={php_Logo}
                        alt={php_Logo}
                        title={php_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">PHP</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={laravel_Logo}
                        alt={laravel_Logo}
                        title={laravel_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Laravel</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={codeigniter_Logo}
                        alt={codeigniter_Logo}
                        title={codeigniter_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Codeigniter</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={Ruby_on_Rails_Logo}
                        alt={Ruby_on_Rails_Logo}
                        title={Ruby_on_Rails_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Ruby on Rails</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={nestjs_Logo}
                        alt={nestjs_Logo}
                        title={nestjs_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Nest</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={android_Logo}
                        alt={android_Logo}
                        title={android_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Android</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={apple_Logo}
                        alt={apple_Logo}
                        title={apple_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">iOS</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={React_Logo}
                        alt={React_Logo}
                        title={React_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">React</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={flutter_Logo}
                        alt={flutter_Logo}
                        title={flutter_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Flutter</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={wordpress_Logo}
                        alt={wordpress_Logo}
                        title={wordpress_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Wordpress</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={codeigniter_Logo}
                        alt={codeigniter_Logo}
                        title={codeigniter_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Codeigniter</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={mysq_Logo}
                        alt={mysq_Logo}
                        title={mysq_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">MySQL</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={MS_SQL_Logo}
                        alt={MS_SQL_Logo}
                        title={MS_SQL_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">MS</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={mongodb_Logo}
                        alt={mongodb_Logo}
                        title={mongodb_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">MongoDB</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={SQLite_Logo}
                        alt={SQLite_Logo}
                        title={SQLite_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">SQLite</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={postgresql_Logo}
                        alt={postgresql_Logo}
                        title={postgresql_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">PostgreSQL</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={firebase_Logo}
                        alt={firebase_Logo}
                        title={firebase_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Firebase</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={realm_Logo}
                        alt={realm_Logo}
                        title={realm_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Realm</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={terraform_Logo}
                        alt={terraform_Logo}
                        title={terraform_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Terraform</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={CI_CD_Logo}
                        alt={CI_CD_Logo}
                        title={CI_CD_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">CI-CD</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={AWS_Logo}
                        alt={AWS_Logo}
                        title={AWS_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">AWS</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={jenkins_Logo}
                        alt={jenkins_Logo}
                        title={jenkins_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded "
                      />
                    </div>
                    <div class="tech-title">Jenkins</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={kubernetes_Logo}
                        alt={kubernetes_Logo}
                        title={kubernetes_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Kubernetes</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={Docker_Logo}
                        alt={Docker_Logo}
                        title={Docker_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">Docker</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              <Box>
                <ul class="tech-list">
                  <li>
                    <div class="tech-icon">
                      <img
                        src={microsoft_teams_Logo}
                        alt={microsoft_teams_Logo}
                        title={microsoft_teams_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Microsoft Team</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={jira_Logo}
                        alt={jira_Logo}
                        title={jira_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Jira</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={asana_Logo}
                        alt={asana_Logo}
                        title={asana_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Asana</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={slack_Logo}
                        alt={slack_Logo}
                        title={slack_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded"
                      />
                    </div>
                    <div class="tech-title">Slack</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={ClickUp_Logo}
                        alt={ClickUp_Logo}
                        title={ClickUp_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">ClickUp</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={trello_Logo}
                        alt={trello_Logo}
                        title={trello_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded "
                      />
                    </div>
                    <div class="tech-title">Trello</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={MondayDotCom_Logo}
                        alt={MondayDotCom_Logo}
                        title={MondayDotCom_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">MondayDotCom</div>
                  </li>
                  <li>
                    <div class="tech-icon">
                      <img
                        src={Pivotal_Logo}
                        alt={Pivotal_Logo}
                        title={Pivotal_Logo}
                        decoding="async"
                        class=" ls-is-cached lazyloaded svg_img"
                      />
                    </div>
                    <div class="tech-title">Pivotal</div>
                  </li>
                </ul>
              </Box>
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>

      <Button sx={{ ...btnStyle, my: 2 }} variant="outlined" size="large">
        Schedule a Developer Interview
      </Button>
    </Box>
  );
}

export default TechnologiesSection;
