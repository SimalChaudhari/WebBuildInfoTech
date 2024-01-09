import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ct_img from "../../../assets/image/ct_img.webp";
import React from "react";

function ClientsExperienceSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ my: isXs ? 2 : 15 }} alignItems="center">
      <Grid container spacing={isXs ? 3 : 15}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <img src={ct_img} alt="ct_img" className="rounded-xl" />
          </Box>
        </Grid>
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
              textAlign: "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h5" : "h3"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}>
              Know About Our Client’s Experience
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              className="p_color"
              style={{ textAlign: "justify", lineHeight: "30px" }}>
              Since our inception, we have always acted as a partner to our
              clients, not a services provider. We place a huge value on strong
              long term relationships. With their trust & collaboration, we
              develop solutions that help them with their business outcomes.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={isXs ? 3 : 15} sx={{ my:2 }}>
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
              textAlign: "left",
              px: isXs ? 2 : 0,
            }}>
            <Typography
              variant={isXs ? "h5" : "h3"}
              fontWeight="bold"
              sx={{ mb: isXs ? 1 : 3 }}>
              Know About Our Client’s Experience
            </Typography>
            <Typography
              variant={isXs ? "body2" : "subtitle1"}
              fontWeight="semibold"
              className="p_color"
              style={{ textAlign: "justify", lineHeight: "30px" }}>
              Since our inception, we have always acted as a partner to our
              clients, not a services provider. We place a huge value on strong
              long term relationships. With their trust & collaboration, we
              develop solutions that help them with their business outcomes.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ClientsExperienceSection;
