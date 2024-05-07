import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import img from "./../images/avatar.jpg";
import { Avatar, Tooltip, Typography, styled, useTheme } from "@mui/material";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleOutlined,
  // eslint-disable-next-line no-unused-vars
  PersonOutlineOutlined,
  PersonOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// eslint-disable-next-line react/prop-types
const SideBar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  let Array1 = [
    { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
    { text: "MangeTeam", icon: <PeopleOutlined />, path: "/team" },
    {
      text: "Contacts Information",
      icon: <ContactsOutlined />,
      path: "/contacts",
    },
    { text: "Invoices", icon: <ReceiptOutlined />, path: "/invoices" },
  ];
  let Array2 = [
    { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];
  let Array3 = [
    { text: "Bar Cart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "Pie chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    {
      text: "Line Chart",
      icon: <TimelineOutlined />,
      path: "/line",
    },
    { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
  ];
  return (
    <Drawer variant="permanent" open={open} className="scroll-box">
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <Avatar
        src={img}
        sx={{
          mx: "auto",
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: "2px solid grey",
          transition: ".25s",
        }}
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: ".25s" }}
      >
        Abdulrahman
      </Typography>
      <Typography
        variant=""
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: ".25s",
          color: theme.palette.info.main,
        }}
      >
        Admin
      </Typography>
      <Divider />
      <List>
        {Array1.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item, index) => (
          <ListItem
            key={open ? null : index}
            disablePadding
            sx={{ display: "block" }}
          >
            <Tooltip title={item.text}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Tooltip title={open ? null : item.text}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    location.pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[300]
                      : null,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
