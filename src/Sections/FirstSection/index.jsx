import { Box, Typography } from "@mui/material";
import React from "react";
import "./FirstSection.css";
import FirstSectionCard from "../../components/FirstSectionCard";

export default function FirstSection() {
  return (
    <Box className={"FirstSectionWrapper"}>
      <div className="FirsSectionBlur"></div>
      <div className="FirsSectionBlur2"></div>
      <div className="container">
        <Typography className="FirstSectionHeading" sx={{fontSize: {xs: '50px', md: '64px', lineHeight: {xs: '0', md: '85px'}}}}>
          A CRM dashboard for engineering teams
        </Typography>
        <Typography className="FirstSectionSubtitle" sx={{padding: {xs: '20px 0', sm: '20px', md: '20px 280px'}}}>
          Rorem ipsum dolor sit amet consectetur. Gravida convallis orci
          ultrices non. Ultricies tempor at ut cursus mi. Aliquam sed amet vitae
          orci ac penatibus consectetur.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            className="btn text-white"
            style={{ background: "#7214FF", borderRadius: "20px" }}
            type="submit"
          >
            Get a demo
          </button>
          <button
            className="btn text-white"
            style={{
              background:
                "linear-gradient(261deg, rgba(21, 25, 52, 0.52) 14.6%, rgba(21, 25, 52, 0.08) 49.66%, rgba(21, 25, 52, 0.49) 87.77%)",
              borderRadius: "20px",
              border: " 1.2px solid #282D45",
            }}
            type="submit"
          >
            View pricing
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5
          }}
        >
          <FirstSectionCard />
        </Box>
      </div>
    </Box>
  );
}
