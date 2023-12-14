import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CardImage from "../../assets/CardImage.png";
import Card from "../../assets/Card.png";
import Card2 from "../../assets/Card2.png";

export default function ThirdSectionCard() {
  return (
    <div>
      <Box
        sx={{
          borderRadius: "10px",
          border: "1px solid #282D45",
          background: "#0E1330",
          position: "relative",
          paddingBottom: '20px',
          mt: 8
        }}
      >
        <Box
          sx={{
            width: "187px",
            height: "233px",
            background: "#7214FF",
            filter: "blur(250px)",
            borderRadius: "50%",
            position: "absolute",
            bottom: "-10px",
            left: "-10px",
          }}
        ></Box>
        <Box
          sx={{
            width: "211px",
            height: "263px",
            background: "#32CAFD",
            filter: "blur(250px)",
            borderRadius: "50%",
            position: "absolute",
            top: "-10px",
            right: "-10px",
          }}
        ></Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                p: "150px 50px",
              }}
            >
              <Typography
                sx={{
                  color: "#F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "48px",
                  fontStyle: "normal",
                  fontWeight: " 700",
                  lineHeight: "56px",
                  letterSpacing: "-1.44px",
                }}
              >
                Transparent, audited, &open source
              </Typography>
              <Typography
                sx={{
                  color: "#8F9BB7",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "24px",
                  mt: "25px",
                  mb: "35px",
                }}
              >
                Torem ipsum dolor sit amet consectetur. Nulla quisque
                scelerisque eget quis. Eu amet amet eu interdum.
              </Typography>
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
                Browse all feature
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ mt: "50px" }}>
              <img
                src={CardImage}
                alt={"CardImage"}
                width={"100%"}
                style={{ maxWidth: "527px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                p: "0 50px",
              }}
            >
              <img
                src={Card}
                alt={"CardImage"}
                width={"100%"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                p: "0 50px",
              }}
            >
              <img
                src={Card2}
                alt={"CardImage"}
                width={"100%"}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
