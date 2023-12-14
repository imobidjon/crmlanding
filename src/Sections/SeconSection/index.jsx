import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { SecondSectionCard } from "../../components";
import Image1 from "../../assets/SeconSectionCard1.png";
import Image2 from "../../assets/SeconSectionCard2.png";
import Image3 from "../../assets/SeconSectionCard3.png";

import Image4 from "../../assets/SeconSectionCard4.png";
import Image5 from "../../assets/SeconSectionCard5.png";
import Image6 from "../../assets/SeconSectionCard6.png";

export default function SecondSection() {
  return (
    <Box sx={{ background: "#151934", py: {xs: 3, md: 12} }}>
      <div className="container">
        <Box
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
            justifyContent: "space-between",
            alignItems: "center",
            mb: { xs: 2, md: 7 },
            pt: { xs: 1, md: 5 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Satoshi",
              fontSize: "56px",
              fontStyle: "normal",
              fontWeight: " 700",
              lineHeight: "64px",
              letterSpacing: "-1.68px",
              background:
                "var(--Linear-gradient, linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Powerful features to help you <br />
            manage all your leads
          </Typography>
          <Typography
            sx={{
              color: "#8F9BB7",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              width: "392px",
            }}
          >
            Apsum dolor sit amet consectetur. Aliquam elementum elementum in
            ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
            vel.
          </Typography>
        </Box>

        <Grid container rowSpacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"User information"}
              paragraphText={
                "Borem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image1}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"Deal tracking"}
              paragraphText={
                "Worem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"Pipeline management"}
              paragraphText={
                "Dorem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image3}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"Reporting dashboard"}
              paragraphText={
                "Yarem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image4}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"Meeting scheduling"}
              paragraphText={
                "Bem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image5}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SecondSectionCard
              headerText={"Email tracking"}
              paragraphText={
                "Keem ipsum dolor sit amet consectetur. Turpis tristique nulla posuere et amet arcu dictum ultricies convallis."
              }
              image={Image6}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
