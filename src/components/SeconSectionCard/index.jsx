import { Box, Typography } from "@mui/material";
import React from "react";

export default function SecondSectionCard({headerText, paragraphText, image}) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "393px",
        padding: "30px 40px 30px 30px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "30px",
        borderRadius: "4px",
        border: "1px solid #282D45",
        background: "#0E1330F",
      }}
    >
      <Box>
        <img src={image} alt={headerText} width={'100%'} />
      </Box>
      <Box>
        <Typography
          sx={{
            color: '#F6F6F7',
            fontFamily: "Satoshi",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: " 700",
            lineHeight: "32px",
            letterSpacing: "-0.72px",
          }}
        >
          {headerText}
        </Typography>
        <Typography
          sx={{
            color: '#8F9BB7',
            fontFamily: "Satoshi",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px",
          }}
        >
          {paragraphText}
        </Typography>
      </Box>
    </Box>
  );
}
