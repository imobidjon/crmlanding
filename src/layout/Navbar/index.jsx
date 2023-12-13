import { Box, Typography } from "@mui/material";
import React from "react";
import './navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: "#151934", borderBottom: '1px solid #1e2c41' }}>
        <div className="container">
          <a
            className="navbar-brand text-white d-flex align-items-center gap-2"
            href="/"
          >
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
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white active"
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
            <form className="d-flex justify-content-center" role="search">
              <button
                className="btn text-white"
                style={{ background: "#7214FF", borderRadius: "20px" }}
                type="submit"
              >
                Get a demo
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
