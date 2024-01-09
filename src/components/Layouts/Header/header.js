import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  SwipeableDrawer,
  Button,
  OutlinedInput,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material/";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LOGO from "../../../assets/image/Logo.png";
import { Link, useLocation } from "react-router-dom";

function ResponsiveAppBar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const { pathname } = useLocation();

  const btnStyle = {
    color: "#0084ff",
    border: "1px solid #0084ff",
    backgroundColor: "transparent",
    padding: "12px 20px",
    // width: "150px",

    "&:hover": {
      backgroundColor: "#0084ff",
      color: "white",
    },
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation">
      <Box
        sx={{
          flexGrow: 1,
          background: "#fff",
          color: "#000",
          display: { xs: "flex", md: "none" },
          justifyContent: { xs: "space-between", md: "flex-end" },
          alignItems: "center",
        }}>
        <Link to="/">
          <img
            src={LOGO}
            alt="LOGO"
            style={{ padding: "15px 0px 15px 40px", width: "80%" }}
          />
        </Link>
        <IconButton
          sx={{ mr: 3 }}
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer("top", false)}
          color="inherit">
          <Close />
        </IconButton>
      </Box>
      <Typography
        textAlign="left"
        variant="h6"
        sx={{
          padding: "15px 0px 15px 40px",
          background: "#fff0",
          color: "#000",
        }}>
        <Box className="font-bold mr-12" display="flex" flexDirection="column">
          <Link
            className={
              pathname === "/" ? `ml-2 my-2 text-blue-600` : `ml-2 my-2`
            }
            to="/">
            SERVICES
          </Link>
          <Link
            className={
              pathname === "/aboutUs" ? `ml-2 my-2 text-blue-600` : `ml-2 my-2`
            }
            to="/">
            INDUSTRIES
          </Link>
          <Link
            className={
              pathname === "/ourServices"
                ? `ml-2 my-2 text-blue-600`
                : `ml-2 my-2`
            }
            to="/">
            TECHNOLOGIES
          </Link>
          <Link
            className={
              pathname === "/caseStudies"
                ? `ml-2 my-2 text-blue-600`
                : `ml-2 my-2`
            }
            to="/">
            CAREER
          </Link>
          <Link
            className={
              pathname === "/blog" ? `ml-2 my-2 text-blue-600` : `ml-2 my-2`
            }
            to="/">
            COMPANY
          </Link>
          <OutlinedInput
            className={`my-3`}
            id="full-name"
            placeholder="Search"
            fullWidth
          />
          <Link className={`my-3`}>
            <Button sx={{...btnStyle}} variant="outlined" size="large" fullWidth>
              CONTACT
            </Button>
          </Link>
        </Box>
      </Typography>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: "#fff0",
        color: "#000",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <Link to="/">
              <img
                src={LOGO}
                alt="LOGO"
                style={{ padding: "15px 40px 15px 0px", width: "80%" }}
              />
            </Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            <Link to="/">
              <img
                src={LOGO}
                alt="LOGO"
                style={{ padding: "15px 40px 15px 0px", width: "80%" }}
              />
            </Link>
          </Typography>

          <>
            <Box
              className="font-bold"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end" },
              }}>
              <Box>
                <Link
                  className={pathname === "/" ? `ml-10 text-blue-600` : `ml-10`}
                  to="/">
                  SERVICES
                </Link>
                <Link
                  className={
                    pathname === "/aboutUs" ? `ml-10 text-blue-600` : `ml-10`
                  }
                  to="/">
                  INDUSTRIES
                </Link>
                <Link
                  className={
                    pathname === "/ourServices"
                      ? `ml-10 text-blue-600`
                      : `ml-10`
                  }
                  to="/">
                  TECHNOLOGIES
                </Link>
                <Link
                  className={
                    pathname === "/caseStudies"
                      ? `ml-10 text-blue-600`
                      : `ml-10`
                  }
                  to="/">
                  CAREER
                </Link>
                <Link
                  className={
                    pathname === "/blog" ? `ml-10 text-blue-600` : `ml-10`
                  }
                  to="/">
                  COMPANY
                </Link>

                <SearchRoundedIcon className={`ml-10`} />
                <Link className={`ml-10`}>
                  <Button sx={{...btnStyle}} variant="outlined" size="large" className={`ml-10`}>
                    CONTACT
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "none", lg: "flex" },
                justifyContent: { md: "flex-end" },
              }}
              style={{ justifyContent: "right" }}>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              style={{ justifyContent: "right" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer("top", true)}
                color="inherit">
                <Menu />
              </IconButton>
              <SwipeableDrawer
                anchor="top"
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
                onOpen={toggleDrawer("top", true)}>
                {list("top")}
              </SwipeableDrawer>
            </Box>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
