import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import media_enatirnment from "../../../assets/image/media_enatirnment.jpg";
import Education_banner from "../../../assets/image/Education_banner.webp";
import real_estate_banner from "../../../assets/image/real_estate_banner.png";
import sports_banner from "../../../assets/image/sports_banner.png";
import Fitness_banner from "../../../assets/image/Fitness_banner.png";
import Transport_And_Logistics_banner_1 from "../../../assets/image/Transport_And_Logistics_banner_1.webp";
import Lifestyle_banner from "../../../assets/image/Lifestyle_banner.png";
import fintech_banner from "../../../assets/image/fintech_banner.webp";
import Healthcare_banner_1 from "../../../assets/image/Healthcare_banner_1.webp";
import Retail_Ecommerce_banner from "../../../assets/image/Retail_Ecommerce_banner.png";
import travel_and_hospitality_banner from "../../../assets/image/travel_and_hospitality_banner.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  smallmobile: {
    breakpoint: { max: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function IndustrySection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const images = [
    {
      src: media_enatirnment,
      alt: "media_enatirnment",
      title: "Media & Entertainment",
    },
    {
      src: Education_banner,
      alt: "Education_banner",
      title: "Education Banner",
    },
    {
      src: real_estate_banner,
      alt: "real_estate_banner",
      title: "Real Estate Banner",
    },
    { src: sports_banner, alt: "sports_banner", title: "Sports Banner" },
    { src: Fitness_banner, alt: "Fitness_banner", title: "Fitness Banner" },
    {
      src: Transport_And_Logistics_banner_1,
      alt: "Transport_And_Logistics_banner_1",
      title: "Transport & Logistics Banner 1",
    },
    {
      src: Lifestyle_banner,
      alt: "Lifestyle_banner",
      title: "Lifestyle Banner",
    },
    { src: fintech_banner, alt: "fintech_banner", title: "Fintech Banner" },
    {
      src: Healthcare_banner_1,
      alt: "Healthcare_banner_1",
      title: "Healthcare Banner 1",
    },
    {
      src: Retail_Ecommerce_banner,
      alt: "Retail_Ecommerce_banner",
      title: "Retail & Ecommerce Banner",
    },
    {
      src: travel_and_hospitality_banner,
      alt: "travel_and_hospitality_banner",
      title: "Travel & Hospitality Banner",
    },
  ];

  const btnStyle = {
    color: "#0084ff",
    border: "1px solid #0084ff",
    backgroundColor: "transparent",
    padding: "12px 20px",
    boxShadow: "0 30px 40px -18px rgba(36,144,239,.2);",
    textTransform: "capitalize",
    transition: "transform 0.3s ease",

    "&:hover": {
      backgroundColor: "#0084ff",
      color: "white",
      transform: "scale(1.1)",
    },
  };
  return (
    <Box textAlign="center" sx={{ my: { lg: 10, md: 7, sm: 2 } }}>
      <Typography variant={isXs ? "h5" : "h3"} sx={{ my: 5 }} fontWeight="bold">
        Diverse Industry Experience to accelerate Your Business Outcomes
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          px: { lg: 25, md: 7, sm: 2 },
        }}>
        For over <b>18 years,</b> we have worked closely with{" "}
        <b>1500+ clients all over the world</b> belonging to different fields.
        We are aware of the business problems and expectations of your industry
        and the associated audience. That will help us in understanding your
        requirements easily and developing a unique solution for you quickly.
      </Typography>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style">
          {images.map((image, index) => {
            return (
              <>
                <div className="industry_slide_item color">
                  <div className="slider" key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg h-72 mb-3 industry_slide_image"
                    />
                    <Typography className="text-left">{image.title}</Typography>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
      <Button sx={{ ...btnStyle, mb: 2 }} variant="outlined" size="large">
        Talk To Our Industry Expert
      </Button>
    </Box>
  );
}

export default IndustrySection;
