import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FifthSectionCard } from "../../components";
import BlogImage1 from "../../assets/Blog image.png";
import BlogImage2 from "../../assets/Blog image2.png";
import BlogImage3 from "../../assets/Blog image3.png";

export default function FifthSection() {
  return (
    <Box sx={{ background: "#151934", py: 5 }}>
      <div className="container">
        <Box
          sx={{
            mb: 10,
            display: { xs: "block", md: "flex" },
            justifyContent: { md: "space-between" },
            alignItems: "center",
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
            Product in the news
          </Typography>

          <button
            className="btn text-white"
            style={{ background: "#7214FF", borderRadius: "20px" }}
            type="submit"
          >
            Browse all news
          </button>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <FifthSectionCard
              image={BlogImage3}
              title={"Product Mail is taking on Gmail by betting on privacy"}
              paragraph={
                "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna."
              }
              date={"February 8, 2023"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FifthSectionCard
              image={BlogImage2}
              title={"Wants You To Sign Out Of Google Workspace Forever"}
              paragraph={
                "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna."
              }
              date={"February 8, 2023"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FifthSectionCard
              image={BlogImage1}
              title={"The Best Email Encryption Services for 2023"}
              paragraph={
                "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna."
              }
              date={"February 8, 2023"}
            />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
