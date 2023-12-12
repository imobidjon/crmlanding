import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#151934" }}>
      <div className="container">
        <div className="navbar-brand text-white d-flex align-items-center gap-2">
          <Box
            sx={{
              width: "34.466px",
              height: "34.383px",
              border: "4px solid #fff",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "14.756px",
                height: "14.72px",
                background: "#7214FF",
                borderRadius: "10px",
                position: "absolute",
                top: "-8px",
                right: "-8px",
              }}
            ></Box>
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            Product
          </Typography>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse align-items-center d-flex"
          id="navbarText"
        >
          <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Blog
              </a>
            </li>
          </ul>
          <Button
            variant="contained"
            sx={{ background: "#7214FF", borderRadius: "20px" }}
          >
            Get a demo
          </Button>
        </div>
      </div>
    </nav>
  );
}
