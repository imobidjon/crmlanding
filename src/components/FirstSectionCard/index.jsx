import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "../../assets/FirstSectionCardProfileImage.png";
import Calendar from "../../assets/Calendar.png";
import Chevron from "../../assets/chevron-down.png";
import Activity from "../../assets/Activity.png";
import Chart from "../../assets/Chart.png";
import Document from "../../assets/Document.png";
import Shield from "../../assets/Shield Fail.png";
import BigChart from "../../assets/BigChart.png";

export default function FirstSectionCard() {
  return (
    <Box
      sx={{
        borderRadius: "6px",
        border: "1px solid#282D45",
        background: " #0E1330",
        width: "808px",
      }}
    >
      <Box
        sx={{
          borderRadius: " 5px 5px 0px 0px",
          border: "1px solid #282D45",
          background: " #282D45",
          pl: "15px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="10"
          viewBox="0 0 42 10"
          fill="none"
        >
          <circle cx="5" cy="5" r="5" fill="#0E1330" />
          <circle cx="21" cy="5" r="5" fill="#0E1330" />
          <circle cx="37" cy="5" r="5" fill="#0E1330" />
        </svg>
      </Box>
      <Box sx={{ px: 6, py: 4 }}>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              mb: { xs: "10px", md: "none" },
            }}
          >
            <img
              src={Image}
              alt="FirstSectionCardProfileImage"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography
                sx={{
                  color: "#F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: " 700",
                  lineHeight: "20px" /* 100% */,
                  letterSpacing: "-0.6px",
                }}
              >
                Hello Sajeeb!
              </Typography>
              <Typography
                sx={{
                  color: "#8F9BB7",
                  fontFamily: "Satoshi",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: " 400",
                  lineHeight: "22px" /* 100% */,
                }}
              >
                We hope you’re having a great night.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "inline-flex",
              padding: "7px 12px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              borderRadius: "4px",
              border: "1px solid  #282D45",
              width: {xs: '100%', md: '130px'}
            }}
          >
            <img
              src={Calendar}
              alt="Calendar"
              style={{
                width: "20px",
              }}
            />
            <Typography
              sx={{
                color: "#F6F6F7",
                fontFamily: "Satoshi",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: " 400",
                lineHeight: "22px",
              }}
            >
              Today
            </Typography>
            <img
              src={Chevron}
              alt="Calendar"
              style={{
                width: "20px",
              }}
            />
          </Box>
        </Box>
        <Divider sx={{ border: "1px solid #282D45", my: 4 }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "110px",
                borderRadius: "4px",
                background: "#060B27",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                pb: 2,
                pt: 1,
                pl: 3,
              }}
            >
              <img src={Activity} alt="Activity" width={"24px"} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: " #F6F6F7",
                    fontFamily: "Satoshi",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  Total Revenue
                </Typography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(183, 255, 196, 0.10)",
                    padding: "3px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      color: " #41E88D",
                      fontFamily: "Satoshi",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "10px",
                    }}
                  >
                    +15%
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: " #F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "32px",
                  letterSpacing: "-0.72px",
                }}
              >
                $59,158
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "110px",
                borderRadius: "4px",
                background: "#060B27",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                pb: 2,
                pt: 1,
                pl: 3,
              }}
            >
              <img src={Document} alt="Activity" width={"24px"} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: " #F6F6F7",
                    fontFamily: "Satoshi",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  Subscribers
                </Typography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(183, 255, 196, 0.10)",
                    padding: "3px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      color: " #41E88D",
                      fontFamily: "Satoshi",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "10px",
                    }}
                  >
                    +11%
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: " #F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "32px",
                  letterSpacing: "-0.72px",
                }}
              >
                2,984
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "110px",
                borderRadius: "4px",
                background: "#060B27",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                pb: 2,
                pt: 1,
                pl: 3,
              }}
            >
              <img src={Shield} alt="Activity" width={"24px"} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: " #F6F6F7",
                    fontFamily: "Satoshi",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  Conversations
                </Typography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(255, 167, 190, 0.10)",
                    padding: "3px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      color: " #F6285F",
                      fontFamily: "Satoshi",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "10px",
                    }}
                  >
                    -5%
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: " #F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "32px",
                  letterSpacing: "-0.72px",
                }}
              >
                698
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                width: "100%",
                height: "110px",
                borderRadius: "4px",
                background: "#060B27",
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
                pb: 2,
                pt: 1,
                pl: 3,
              }}
            >
              <img src={Chart} alt="Activity" width={"24px"} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  sx={{
                    color: " #F6F6F7",
                    fontFamily: "Satoshi",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "20px",
                  }}
                >
                  Popup sales
                </Typography>
                <Box
                  sx={{
                    borderRadius: "10px",
                    background: "rgba(183, 255, 196, 0.10)",
                    padding: "3px 5px",
                  }}
                >
                  <Typography
                    sx={{
                      color: " #41E88D",
                      fontFamily: "Satoshi",
                      fontSize: "10px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "10px",
                    }}
                  >
                    +15%
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: " #F6F6F7",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "32px",
                  letterSpacing: "-0.72px",
                }}
              >
                $658
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <img width={"100%"} src={BigChart} alt="BigChart" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
