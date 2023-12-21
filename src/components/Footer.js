import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-2.png";

const Footer = () => {
  return (
    <Box mt={"70px"} bgcolor={"#fff3f4"}>
      <Stack alignItems={"center"} px={"40px"} pt={"20px"}>
        <img src={Logo} alt="logo" width={"200px"} height={"200px"} />
      </Stack>
    </Box>
  );
};

export default Footer;
