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

function Sidebarmanage() {
  // Define state and click handlers for each dropdown
  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);
  const [openDropdown4, setOpenDropdown4] = useState(false);
  const [openDropdown5, setOpenDropdown5] = useState(false);
  const [openDropdown6, setOpenDropdown6] = useState(false);
  const [openDropdown7, setOpenDropdown7] = useState(false);
  const [openDropdown8, setOpenDropdown8] = useState(false);
  const [openDropdown9, setOpenDropdown9] = useState(false);
  const [openDropdown10, setOpenDropdown10] = useState(false);
  const [openDropdown11, setOpenDropdown11] = useState(false);
  const [openDropdown12, setOpenDropdown12] = useState(false);
  const [openDropdown13, setOpenDropdown13] = useState(false);
  const [openDropdown14, setOpenDropdown14] = useState(false);
  const [openDropdown15, setOpenDropdown15] = useState(false);
  const [openDropdown16, setOpenDropdown16] = useState(false);
  const [openDropdown17, setOpenDropdown17] = useState(false);
  const [openDropdown18, setOpenDropdown18] = useState(false);
  const [openDropdown19, setOpenDropdown19] = useState(false);
  const [openDropdown20, setOpenDropdown20] = useState(false);
  const [openDropdown21, setOpenDropdown21] = useState(false);
  const [openDropdown22, setOpenDropdown22] = useState(false);
  const [openDropdown23, setOpenDropdown23] = useState(false);
  const [openDropdown24, setOpenDropdown24] = useState(false);
  const [openDropdown25, setOpenDropdown25] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const theme = useTheme();
  // Define click handlers for each dropdown
  const handleDropdown1Click = () => {
    setOpenDropdown1(!openDropdown1);
  };
  const handleDropdown2Click = () => {
    setOpenDropdown2(!openDropdown2);
  };

  const handleDropdown3Click = () => {
    setOpenDropdown3(!openDropdown3);
  };

  const handleDropdown4Click = () => {
    setOpenDropdown4(!openDropdown4);
  };
  const handleDropdown5Click = () => {
    setOpenDropdown5(!openDropdown5);
  };
  const handleDropdown6Click = () => {
    setOpenDropdown6(!openDropdown6);
  };
  const handleDropdown7Click = () => {
    setOpenDropdown7(!openDropdown7);
  };
  const handleDropdown8Click = () => {
    setOpenDropdown8(!openDropdown8);
  };
  const handleDropdown9Click = () => {
    setOpenDropdown9(!openDropdown9);
  };
  const handleDropdown10Click = () => {
    setOpenDropdown10(!openDropdown10);
  };
  const handleDropdown11Click = () => {
    setOpenDropdown11(!openDropdown11);
  };
  const handleDropdown12Click = () => {
    setOpenDropdown12(!openDropdown12);
  };
  const handleDropdown13Click = () => {
    setOpenDropdown13(!openDropdown13);
  };

  const handleDropdown14Click = () => {
    setOpenDropdown14(!openDropdown14);
  };

  const handleDropdown15Click = () => {
    setOpenDropdown15(!openDropdown15);
  };

  const handleDropdown16Click = () => {
    setOpenDropdown16(!openDropdown16);
  };

  const handleDropdown17Click = () => {
    setOpenDropdown17(!openDropdown17);
  };

  const handleDropdown18Click = () => {
    setOpenDropdown18(!openDropdown18);
  };

  const handleDropdown19Click = () => {
    setOpenDropdown19(!openDropdown19);
  };

  const handleDropdown20Click = () => {
    setOpenDropdown20(!openDropdown20);
  };

  const handleDropdown21Click = () => {
    setOpenDropdown21(!openDropdown21);
  };

  const handleDropdown22Click = () => {
    setOpenDropdown22(!openDropdown22);
  };

  const handleDropdown23Click = () => {
    setOpenDropdown23(!openDropdown23);
  };

  const handleDropdown24Click = () => {
    setOpenDropdown24(!openDropdown24);
  };

  const handleDropdown25Click = () => {
    setOpenDropdown25(!openDropdown25);
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
          <center>Manage</center>
        </h1>
        <List>
          {/* Dropdown 1 */}
          <ListItem button onClick={handleDropdown1Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="DEVICE UPDATES" />
            {openDropdown1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/DeviceUpdate/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/DeviceUpdate/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 2 */}
          <ListItem button onClick={handleDropdown2Click}>
            <ListItemIcon>
              <Theaters />
            </ListItemIcon>
            <ListItemText primary="SAZPIN DEVICE UPDATES" />
            {openDropdown2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/SazpinUpdate/Update">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/SazpinUpdate/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 3 */}
          <ListItem button onClick={handleDropdown3Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="SHAHID APP UPDATES" />
            {openDropdown3 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown3} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Shahidupdate/Update">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Updates" />
              </ListItem>
              <ListItem button component={Link} to="/Shahidupdate/Addupdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          {/* Dropdown 4 */}
          <ListItem button onClick={handleDropdown4Click}>
            <ListItemIcon>
              <AutoAwesomeMotionSharp />
            </ListItemIcon>
            <ListItemText primary="ZOOMTAK APP UPDATES" />
            {openDropdown4 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown4} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Zoomtak/Updates">
                <ListItemIcon>
                  <AddCircleSharp />
                </ListItemIcon>
                <ListItemText primary="Updates" />
              </ListItem>
              <ListItem button component={Link} to="/Zoomtak/Addupdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown5Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="HUMAX DEVICE UPDATES" />
            {openDropdown5 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown5} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Humaxdevice/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/Humaxdevice/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown6Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MASAPLUS DEVICE UPDATES" />
            {openDropdown6 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown6} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Plusdevice/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/Plusdevice/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown7Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MASANEW DEVICE UPDATES" />
            {openDropdown7 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown7} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Newdevice/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/Newdevice/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown8Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MASANEW2023 UPDATES" />
            {openDropdown8 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown8} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/New2023/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/New2023/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown9Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="_DEVICE UPDATES" />
            {openDropdown9 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown9} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/_DeviceUpdates/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/_Deviceupdates/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown10Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHID NEW DEVICE UPDATES" />
            {openDropdown10 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown10} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Shahidnew/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/Shahidnew/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown11Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHID M5 UPDATES" />
            {openDropdown11 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown11} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShahidM5/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/ShahidM5/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown12Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MULTIUSER DEVICE UPDATES" />
            {openDropdown12 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown12} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Multiuser/Update">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
              <ListItem button component={Link} to="/Multiuser/AddUpdate">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Update" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown13Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MESSAGES" />
            {openDropdown13 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown13} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Message/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="Allmessage" />
              </ListItem>
              <ListItem button component={Link} to="/Message/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown14Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="FRANCE MESSAGES" />
            {openDropdown14 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown14} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/France/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/France/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown15Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHID MESSAGE" />
            {openDropdown15 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown15} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Shahid/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/Shahid/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown16Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="MULTIUSER MESSAGE" />
            {openDropdown16 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown16} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Multi/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="All Message" />
              </ListItem>
              <ListItem button component={Link} to="/Multi/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown17Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHID M5 MESSAGE" />
            {openDropdown17 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown17} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShahidM5/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/ShahidM5/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown18Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="ZOOMTAK MESSAGE" />
            {openDropdown18 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown18} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Zoomtak/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/Zoomtak/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown19Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="HUMAX MESSAGE" />
            {openDropdown19 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown19} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Humax/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/Humax/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown20Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="HUMAX APP IMAGE" />
            {openDropdown20 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown20} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/App/AllImage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllImage" />
              </ListItem>
              <ListItem button component={Link} to="App/AddImage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Image" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown21Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SAZPINPLUS MESSAGE" />
            {openDropdown21 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown21} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Sazpinplus/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/Sazpinplus/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown22Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SAZPINNEW MESSAGE" />
            {openDropdown22 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown22} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/SazpinNew/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="All Message" />
              </ListItem>
              <ListItem button component={Link} to="/SazpinNew/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown23Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="LIVE MESSAGE" />
            {openDropdown23 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown23} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/LiveMessage/AppMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AppMessage" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown24Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="SHAHIDNEW MESSAGE" />
            {openDropdown24 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown24} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/ShahidNew/AllMessage">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="AllMessage" />
              </ListItem>
              <ListItem button component={Link} to="/ShahidNew/AddMessage">
                <ListItemIcon>
                  <ListAlt />
                </ListItemIcon>
                <ListItemText primary="Add Message" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleDropdown25Click}>
            <ListItemIcon>
              <LiveTv />
            </ListItemIcon>
            <ListItemText primary="INVENTORY" />
            {openDropdown25 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDropdown25} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/Inventory/All">
                <ListItemIcon>
                  <PlaylistAddCircle />
                </ListItemIcon>
                <ListItemText primary="All" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </ThemeProvider>
  );
}

export default Sidebarmanage;
