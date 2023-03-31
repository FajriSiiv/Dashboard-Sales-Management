import {
  ArrowDownward,
  NotificationAdd,
  Notifications,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import MenuDropdown from "../components/MenuDropdown";
import { theme } from "../theme";
import Sidebar from "./sidebar";

const BoxContainer = styled(Box)(({ theme }: any) => ({
  border: "1px solid #2C2D33",
  background: theme.palette.bgDesign.main,
  color: theme.palette.colorFont.main,
  width: "13%",
  padding: "50px 20px",
}));

function Layout({ children }: { children: React.ReactNode }) {
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <Stack direction="row" minHeight="100vh">
      <BoxContainer>
        <Sidebar />
      </BoxContainer>
      <Box
        sx={{
          padding: "17px 27px",
          background: theme.palette.bgDesign.main,
          width: "100%",
        }}
      >
        <Stack direction="column">
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Box sx={{ width: "800px" }}>
                <TextField
                  size="small"
                  fullWidth
                  sx={{
                    border: "none",
                    bgcolor: theme.palette.bgComponent.main,
                    borderRadius: "8px",
                    padding: "5px 0px",
                    "& fieldset": { border: "none" },
                    "& input": { color: "#D2D2D2" },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: theme.palette.colorFont.main }} />
                      </InputAdornment>
                    ), // <== adjusted this
                    disableUnderline: true, // <== added this
                  }}
                  placeholder="Search here..."
                />
              </Box>
              <Box>
                <Stack direction="row" gap={2} alignItems="center">
                  <Badge
                    color="error"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    sx={{ color: "white" }}
                  >
                    <NotificationsOutlined />
                  </Badge>
                  <Stack direction="row" alignItems="center">
                    <Avatar sx={{ bgcolor: "red" }}>OP</Avatar>
                    <MenuDropdown />
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ padding: "23px 0" }}>{children}</Box>
        </Stack>
      </Box>
    </Stack>
  );
}

export default Layout;
