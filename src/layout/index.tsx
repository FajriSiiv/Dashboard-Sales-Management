import { Box, Stack, styled, useTheme } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";

const BoxContainer = styled(Box)(({ theme }: any) => ({
  border: "1px solid #2C2D33",
  background: theme.palette.bgDesign.main,
  color: theme.palette.colorFont.main,
  width: "13%",
  padding: "50px 20px",
}));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction="row" height="100vh">
      <BoxContainer>
        <Sidebar />
      </BoxContainer>
      <Box>
        <Stack direction="column">
          <Box>Search</Box>
          <Box>{children}</Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Layout;
