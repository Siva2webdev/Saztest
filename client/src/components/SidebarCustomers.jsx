//DropDownBar

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  CssBaseline,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ThemeProvider,
  useTheme,
  IconButton,


  useMediaQuery,
} from "@mui/material";
import {
  PlaylistAddCircle,
  LiveTv,
  ListAlt,
  Inbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
  Sort,
  Theaters,
  AddCircleSharp,
  AutoAwesomeMotionSharp,
  RadioTwoTone,
  FastRewind,
  TheatersTwoTone,
  MusicNote,
  PlaylistAdd,
  LibraryMusic,
  OndemandVideo,
  Layers,
  ChevronLeft,
  ChevronRight,

  Menu as MenuIcon,
  SortByAlpha,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

function SidebarCustomers( drawerWidth) {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  // Define click handlers for each dropdown
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };
  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };

  return (
    <ThemeProvider theme={theme}>
      <Drawer
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        anchor="left"
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
          },
        }}
      >
        <h1>
          <center>Customers</center>
        </h1>
        <List>
          <ListItem button component={Link} to="/Customers/sazpinnewcustomers">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary="Sazpin New Customers" />
          </ListItem>

          <ListItem button component={Link} to="/Customers/addcustomer">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary="Add Customers" />
          </ListItem>
          <ListItem button component={Link} to="/Customers/Customer_Saz1">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary=" Customer_Saz1" />
          </ListItem>
          <ListItem button component={Link} to="/Customers/Customer_Saz2">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary=" Customer_Saz2" />
          </ListItem>
          <ListItem button component={Link} to="/Customers/Customer_Saz3">
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary=" Customer_Saz3" />
          </ListItem>
        </List>
      </Drawer>
     
               {isSmallScreen && (
      <IconButton
        color="inherit"
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        sx={{
          position: 'fixed',
          top: '2%',
          left: isSidebarOpen ? drawerWidth : 0.5,
          transform: 'translateY(-50%)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      )}
 
 
 
    </ThemeProvider>

  );
}

export default SidebarCustomers;





