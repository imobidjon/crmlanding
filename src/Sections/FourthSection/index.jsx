import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { FourthSectionCard } from "../../components";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/Avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";
import DefaultContainer from '../../assets/DefaultContainer.png'

export default function FourthSection() {
  return (
    <Box sx={{ background: "#151934", pt: 15, pb: 30 }}>
      <div className="container">
        <Box
          sx={{
            mb: 10,
          }}
        >
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
            What our clients say
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Satoshi",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#8F9BB7",
              px: 40,
              mt: 3,
            }}
          >
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <FourthSectionCard
              Avatar={Avatar1}
              name={"Cameron Williamson"}
              quote={
                "Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus. "
              }
              job={"Web Designer"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FourthSectionCard
              Avatar={Avatar3}
              name={"Esther Howard"}
              quote={
                "At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus "
              }
              job={"Web Developer"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FourthSectionCard
              Avatar={Avatar2}
              name={"Jenny Wilson"}
              quote={
                "Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec."
              }
              job={"UI/UX Designer"}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 35,
            gap: '10px'
          }}
        >
          <button
            className="btn text-white"
            style={{
              background:
                "linear-gradient(261deg, rgba(21, 25, 52, 0.52) 14.6%, rgba(21, 25, 52, 0.08) 49.66%, rgba(21, 25, 52, 0.49) 87.77%)",
              borderRadius: "8px",
              border: " 1.2px solid #282D45",
            }}
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M19.5 12L5.5 12"
                stroke="#282D45"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 19L5.5 12L12.5 5"
                stroke="#282D45"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="btn text-white"
            style={{
              background:
                "linear-gradient(261deg, rgba(21, 25, 52, 0.52) 14.6%, rgba(21, 25, 52, 0.08) 49.66%, rgba(21, 25, 52, 0.49) 87.77%)",
              borderRadius: "8px",
              border: " 1.2px solid #282D45",
            }}
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M5.5 12H19.5"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 5L19.5 12L12.5 19"
                stroke="#8F9BB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Box>

        <Box sx={{
            mt: 25
        }}>
            <img src={DefaultContainer} alt={'BgImage'} width={'100%'} />
        </Box>
      </div>
    </Box>
  );
}
