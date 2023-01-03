import { Box, Typography } from "@mui/material";
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <Box className="footer">
      <Typography variant="caption" component="div" sx={{ color: "white" }}>
        Made By Lekai Zheng
      </Typography>
      <Typography variant="caption" sx={{ color: "white" }}>
        Copyright &#169; xxx.com 2022
      </Typography>
    </Box>
  );
}
