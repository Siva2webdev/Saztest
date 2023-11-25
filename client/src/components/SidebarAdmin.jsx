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
  Menu as MenuIcon,
  SortByAlpha,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";

function SidebarAdmin() {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            color: theme.palette.secondary[200],
            backgroundColor: theme.palette.background.alt,
            boxSizing: "border-box",
          },
        }}
      >
        <h1>
          <center>Administrators</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="Administrator" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/alladministrator">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="ALL ADMINISTRATOR" />
              </ListItem>
              <ListItem button component={Link} to="/addadministrator">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="ADD ADMINISTRATOR" />
              </ListItem>
              <ListItem button component={Link} to="/Playlist_Saz1">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Playlist_Saz1" />
              </ListItem>
              <ListItem button component={Link} to="/Playlist_Saz2">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Playlist_Saz2" />
              </ListItem>
              <ListItem button component={Link} to="/Playlist_Saz3">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Playlist_Saz3" />
              </ListItem>
              <ListItem button component={Link} to="/Saz1_MainURL">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Saz1_MainURL" />
              </ListItem>
              <ListItem button component={Link} to="/Saz2_MainURL">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Saz2_MainURL" />
              </ListItem>
              <ListItem button component={Link} to="/Saz3_MainURL">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Saz3_MainURL" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 2 */}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default SidebarAdmin;
