import styled from "@emotion/styled";
import {
  LocalAtmOutlined,
  PersonAddAltOutlined,
  ShoppingBagOutlined,
  SignalCellularAltOutlined,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { minWidth, Stack } from "@mui/system";
import React from "react";
import StackedColumnChart from "../../components/dashboard/BarChart/VertikalChartBar";
import SplineAreaChart from "../../components/dashboard/customer-chart";
import Earnings from "../../components/dashboard/earning";
import TableRank from "../../components/dashboard/table-rank/TableRank";
import VisitorChart from "../../components/dashboard/visitor-chart";
import { theme } from "../../theme";

const BoxContainer = styled(Box)(({ theme }: any) => ({
  background: theme.palette.bgComponent.main,
  minWidth: "200px",
  minHeight: "220px",
  borderRadius: "10px",
  // padding: "14px 14px 0 14px",
  color: theme.palette.primary.main,
  overflow: "hidden",
}));

const BoxCard = styled(Box)(({ theme }: any) => ({
  background: theme.palette.bgDesign.main,
  padding: "10px 20px",
  borderRadius: "10px",
}));

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <BoxContainer sx={{ padding: "14px" }}>
            <Typography variant="h6">Today's Sales</Typography>
            <Typography
              variant="caption"
              sx={{ color: theme.palette.colorFont.main }}
            >
              Sales Summary
            </Typography>

            <Stack
              direction="row"
              gap="30px"
              mt={3}
              justifyContent="space-around  "
            >
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
                <ShoppingBagOutlined
                  sx={{ fontSize: "40px", color: "#A9DFD8" }}
                />
                <Typography variant="h6">500</Typography>
                <Typography variant="body1">Total Order</Typography>
                <Typography variant="caption" sx={{ color: "#A9DFD8" }}>
                  +8% from yesterday
                </Typography>
              </BoxCard>
              <BoxCard>
                <LocalAtmOutlined sx={{ fontSize: "40px", color: "#F2C8ED" }} />
                <Typography variant="h6">9</Typography>
                <Typography variant="body1">Product Sold</Typography>
                <Typography variant="caption" sx={{ color: "#F2C8ED" }}>
                  +2% from yesterday
                </Typography>
              </BoxCard>
              <BoxCard>
                <PersonAddAltOutlined
                  sx={{ fontSize: "40px", color: "#20AEF3" }}
                />
                <Typography variant="h6">12</Typography>
                <Typography variant="body1">New Customer</Typography>
                <Typography variant="caption" sx={{ color: "#20AEF3" }}>
                  +3% from yesterday
                </Typography>
              </BoxCard>
            </Stack>
          </BoxContainer>
        </Grid>
        <Grid item xs={4}>
          <BoxContainer sx={{ padding: "14px 0" }}>
            <Box sx={{ height: "180px", position: "relative" }}>
              <StackedColumnChart />
            </Box>
            <hr
              style={{
                border: "0.2px solid #ffffff2e",
              }}
            />
            <Stack
              width="100%"
              direction="row"
              sx={{
                textAlign: "center",
                color: theme.palette.colorFont.main,
              }}
              mt={2}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="50%"
                gap={2}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    bgcolor: "#A9DFD8",
                  }}
                ></Box>
                <Typography>Volume</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="50%"
                gap={2}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    bgcolor: "#2B2B36",
                  }}
                ></Box>
                <Typography>Service</Typography>
              </Stack>
            </Stack>
          </BoxContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "14px" }}>
        <Grid item xs={8}>
          <BoxContainer>
            <Box>
              <TableRank />
            </Box>
          </BoxContainer>
        </Grid>
        <Grid item xs={4}>
          <BoxContainer sx={{ padding: "14px 0" }}>
            <Box sx={{ height: "260px", position: "relative" }}>
              <SplineAreaChart />
            </Box>
            <hr
              style={{
                border: "0.2px solid #ffffff2e",
              }}
            />
            <Stack
              width="100%"
              direction="row"
              sx={{
                textAlign: "center",
                color: theme.palette.colorFont.main,
              }}
              mt={2}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="50%"
                gap={2}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    bgcolor: "#A9DFD8",
                  }}
                ></Box>
                <Typography>Last Month</Typography>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width="50%"
                gap={2}
              >
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    bgcolor: "#F2C8ED",
                  }}
                ></Box>
                <Typography>This Month</Typography>
              </Stack>
            </Stack>
          </BoxContainer>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "14px" }}>
        <Grid item xs={4}>
          <BoxContainer sx={{ height: "320px" }}>
            <Stack direction="column" gap="5px" sx={{ padding: "10px 15px" }}>
              <Typography fontWeight="700" variant="h6">
                Earnings
              </Typography>
              <Typography variant="caption" color="#87888C">
                Total Expense
              </Typography>
              <Typography variant="h5" fontWeight="700" color="#A9DFD8">
                $6078.05
              </Typography>
              <Typography variant="caption" color="#87888C">
                Profit is 48% More than last Month
              </Typography>
            </Stack>
            <Earnings />
          </BoxContainer>
        </Grid>
        <Grid item xs={8}>
          <BoxContainer sx={{ height: "320px" }}>
            <VisitorChart />
          </BoxContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
