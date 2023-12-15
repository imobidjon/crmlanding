import { Box, Typography } from "@mui/material";
import React from "react";
import Quote from "../../assets/Quote.png";
import Mask from '../../assets/Mask group.png'

export default function FourthSectionCard({ Avatar, name, quote, job }) {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          border: "1px solid  #282D45",
          background: " #0E1330",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          position: "absolute",
          gap: "25px",
          width: "343px",
          padding: "25px",
          zIndex: "100000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src={Avatar}
              alt={name}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px",
                  color: "#F6F6F7",
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Satoshi",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "12px",
                  color: "#8F9BB7",
                }}
              >
                {job}
              </Typography>
            </Box>
          </Box>
          <Box>
            <img src={Quote} alt="Quote" width={"57px"} height={"41px"} />
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#F6F6F7",
            }}
          >
            {quote}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "10px",
          width: "392px",
          height: "110px",
          position: "absolute",
          left: "-25px",
          bottom: "-240px",
        }}
      >
        <img src={Mask} alt="Mask" width={'100%'} />
      </Box>
    </Box>
  );
}
