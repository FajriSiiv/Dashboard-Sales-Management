import { Box, Button, ListItemButton, Stack, styled } from "@mui/material";
import React from "react";
import {
  FavoriteOutlined,
  HistoryOutlined,
  Home,
  LeaderboardOutlined,
  LogoutOutlined,
  MessageOutlined,
  PersonOutline,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
  StarBorderRounded,
  WaterfallChartOutlined,
} from "@mui/icons-material";

const ButtonBox = styled(Box)(({ theme }: any) => ({
  padding: "10px 14px",
  // background: theme.palette.secondary.main,
  borderRadius: "10px",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  transition: "all .2s",
  fontWeight: 500,
  "&:hover": {
    background: theme.palette.secondary.main,
    color: theme.palette.bgDesign.main,
  },
}));

const Sidebar = () => {
  return (
    <Box width="100%">
      <Stack direction="column" gap="14px">
        <ButtonBox>
          <Home /> Dashboard
        </ButtonBox>
        <ButtonBox>
          <PersonOutline /> Profile
        </ButtonBox>
        <ButtonBox>
          <LeaderboardOutlined /> Leaderboard
        </ButtonBox>
        <ButtonBox>
          <ShoppingCartOutlined /> Order
        </ButtonBox>
        <ButtonBox>
          <ShoppingBagOutlined /> Product
        </ButtonBox>
        <ButtonBox>
          <WaterfallChartOutlined /> Sales Report
        </ButtonBox>
        <ButtonBox>
          <MessageOutlined /> Message
        </ButtonBox>
        <ButtonBox>
          <StarBorderRounded /> Favorite
        </ButtonBox>
        <ButtonBox>
          <HistoryOutlined /> History
        </ButtonBox>
        <ButtonBox>
          <LogoutOutlined /> Sign Out
        </ButtonBox>
      </Stack>
    </Box>
  );
};

export default Sidebar;
