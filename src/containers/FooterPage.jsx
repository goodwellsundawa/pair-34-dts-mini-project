import React from "react";

import { Box, Toolbar, Typography } from "@mui/material";

const FooterPage = () => {
  return (
    <Box style={{ height: "1em" }}>
      <Toolbar
        style={{
          backgroundColor: "#1976d2",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography component="div" style={{ color: "white" }}>
          &copy; Copyright Pair-34 2022
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default FooterPage;
