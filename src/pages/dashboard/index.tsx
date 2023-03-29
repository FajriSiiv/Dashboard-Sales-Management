import styled from "@emotion/styled";
import { SignalCellularAltOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { minWidth, Stack } from "@mui/system";
import React from "react";
import { theme } from "../../theme";

const BoxContainer = styled(Box)(({ theme }: any) => ({
  background: theme.palette.bgComponent.main,
  minWidth: "200px",
  minHeight: "100px",
  borderRadius: "10px",
  // padding: "14px 14px 0 14px",
  color: theme.palette.primary.main,
}));

const BoxCard = styled(Box)(({ theme }: any) => ({
  background: theme.palette.bgDesign.main,
  padding: "10px",
  borderRadius: "10px",
}));

const Dashboard = () => {
  return (
    <Box>
      <Stack direction="row">
        <BoxContainer sx={{ padding: "14px" }}>
          <Typography variant="h6">Today's Sales</Typography>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.colorFont.main }}
          >
            Sales Summary
          </Typography>

          <Stack direction="row" gap="30px" mt={3}>
            <BoxCard>
              <SignalCellularAltOutlined
                sx={{ fontSize: "40px", color: "#FEB95A" }}
              />
              <Typography variant="h6">$5k</Typography>
              <Typography variant="body1">Total Sales</Typography>
              <Typography variant="caption" sx={{ color: "#FEB95A" }}>
                +10% from yesterday
              </Typography>
            </BoxCard>
            <BoxCard>
              <SignalCellularAltOutlined
                sx={{ fontSize: "40px", color: "#FEB95A" }}
              />
              <Typography variant="h6">$5k</Typography>
              <Typography variant="body1">Total Sales</Typography>
              <Typography variant="caption" sx={{ color: "#FEB95A" }}>
                +10% from yesterday
              </Typography>
            </BoxCard>
          </Stack>
        </BoxContainer>
      </Stack>
    </Box>
  );
};

export default Dashboard;
