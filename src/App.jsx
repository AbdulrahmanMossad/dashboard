import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import TopBar from "./components/TopBar";
import CssBaseline from "@mui/material/CssBaseline";
import SideBar from "./components/SideBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { Outlet } from "react-router-dom";
// const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function MiniDrawer() {
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") !== null
      ? localStorage.getItem("currentMode")
      : "light"
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />
        <SideBar open={open} handleDrawerClose={handleDrawerClose} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          {/* outlet in react-dom for make this area changable */}

          <Outlet />

          {/* /////////////////////////////////////////////////////// */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
