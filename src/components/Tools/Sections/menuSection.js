import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import CGI from "../../../assets/image/CGI.webp";
import LT from "../../../assets/image/LT.webp";
import Tvs_next from "../../../assets/image/Tvs-next.webp";
import Biocon_Logo_Main from "../../../assets/image/Biocon-Logo-Main.webp";
import Infosys from "../../../assets/image/Infosys.webp";

const partners = [CGI, LT, Tvs_next, Biocon_Logo_Main, Infosys];

function MenuSection() {
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

  const btnStyle = {
    color: "white",
    backgroundColor: "#E9852A",
    padding: "12px 20px",
    width: "150px",

    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #E9852A",
      color: "#E9852A",
    },
  };
  return (
    <>
      <Box sx={{ py: 4 }} className="block sm:hidden">
        <p className="text-center text-xl lg:text-4xl md:text-3xl py-3 font-bold text-neutral-800 ">
          Trusted By{" "}
          <span className="animation_wrapper_color">1500+ Happy Clients</span>{" "}
          including these Fortune companies
        </p>
        <div className="flex justify-evenly my-2">
          <img
            src={partners[partnerIndex1]}
            alt={`Partner ${partnerIndex1}`}
            className="h-12 mx-3"
          />
          <img
            src={partners[partnerIndex2]}
            alt={`Partner ${partnerIndex2}`}
            className="h-12 mx-3"
          />
        </div>
      </Box>

      <Box sx={{ py: 4 }} className="hidden sm:block">
        <p className="text-center text-xl lg:text-4xl md:text-3xl py-3 font-bold text-neutral-800 ">
          Trusted By{" "}
          <span className="animation_wrapper_color">1500+ Happy Clients</span>{" "}
          including these Fortune companies
        </p>
        <ul className="flex flex-wrap justify-evenly my-4">
          <li>
            <img src={CGI} alt="CGI" className="h-12 mx-7 my-7" />
          </li>
          <img src={LT} alt="LT" className="h-12 mx-7 my-7" />
          <li>
            <img src={Tvs_next} alt="Tvs_next" className="h-12 mx-7 my-7" />
          </li>
          <li>
            <img
              src={Biocon_Logo_Main}
              alt="Biocon_Logo_Main"
              className="h-12 mx-7 my-7"
            />
          </li>
          <li>
            <img src={Infosys} alt="Infosys" className="h-12 mx-7 my-7" />
          </li>
          <li className="mx-7 my-7">
            <Button
              variant="contained"
              sx={{ ...btnStyle }}
              size="large"
              fullWidth>
              More
            </Button>
          </li>
        </ul>
      </Box>
    </>
  );
}

export default MenuSection;
