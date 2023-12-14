import { Box, Typography } from "@mui/material";
import React from "react";
import Email from "../../assets/Email.png";
import Event from "../../assets/Event.png";
import Files from "../../assets/Files.png";
import Documents from "../../assets/Documents.png";
import { ThirdSectionCard } from "../../components";

export default function ThirdSection() {
  return (
    <Box sx={{ background: "#151934" }}>
      <div className="container">
        <Box >
          <Typography
            sx={{
              textAlign: "center",
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
            Essential apps that protect your
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={Email} alt="Email" width={"42px"} height={'30px'} style={{objectFit: 'cover'}} />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Satoshi",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "56px",
                letterSpacing: "-1.44px",
                background:
                  "var(--Linear-gradient, linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Email,
            </Typography>
          </Box>

          <Box  sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={Event} alt="Event" width={"31.278px"} height={'30px'} style={{objectFit: 'cover'}} />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Satoshi",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "56px",
                letterSpacing: "-1.44px",
                background:
                  "var(--Linear-gradient, linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Events,
            </Typography>
          </Box>

          <Box sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={Files} alt="Files" width={"37.935px"} height={'30px'} style={{objectFit: 'cover'}} />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Satoshi",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "56px",
                letterSpacing: "-1.44px",
                background:
                  "var(--Linear-gradient, linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Files,
            </Typography>
          </Box>

          <Box  sx={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src={Documents} alt="Documents" width={"22.85px"} height={'30px'} style={{objectFit: 'cover'}} />
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Satoshi",
                fontSize: "48px",
                fontStyle: "normal",
                fontWeight: " 700",
                lineHeight: "56px",
                letterSpacing: "-1.44px",
                background:
                  "var(--Linear-gradient, linear-gradient(180deg, #F6F6F7 0%, #7E808F 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Documents
            </Typography>
          </Box>
        </Box>

        <ThirdSectionCard />
      </div>


    </Box>
  );
}
