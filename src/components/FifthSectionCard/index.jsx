import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function FifthSectionCard({ image, title, paragraph, date }) {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "25px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "19px",
        alignSelf: "stretch",
        borderRadius: "10px",
        border: "1px solid #282D45",
        background: "#0E1330",
        width: '395px',
        height: '100%'
      }}
    >
      <Box>
        <img src={image} alt={title} width={"342px"} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Satoshi",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: " 700",
            lineHeight: "32px",
            letterSpacing: "-0.72px",
            color: "#f6f6f7",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
            color: "#8F9BB7",
            mt: 2
          }}
        >
          {paragraph}
        </Typography>
        <Divider sx={{ border: "1px solid #282D45", my: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Satoshi",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "22px",
              color: "#8F9BB7",
            }}
          >
            {date}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Satoshi",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "22px",
              color: "#8F9BB7",
            }}
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 8L20 12L16 16"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
