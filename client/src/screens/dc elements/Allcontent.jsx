import React from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import { DataGrid } from "@mui/x-data-grid";

// import SidebarContent from "components/SidebarContent"

import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Delete,
  Edit,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Container,
} from "@mui/material";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

// import 'react-pro-sidebar/dist/css/styles.css'

import { Link } from "react-router-dom";

import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppinCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOffOutlined,
  PointOfSaleOutlined,
  CalendarTodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  ContentCopyOutlined,
} from "@mui/icons-material";

import { TocOutlinedIcon } from "@mui/icons-material/TocOutlined";

import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";

import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

import {} from "@mui/icons-material";

import { useState, useEffect } from "react";

import { Menu as MenuIcon, IconButton } from "@mui/material";

import Navbar from "components/Navbar";
import Sidebardc from "components/sidebardc";

const Allcontent = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width:1280px)"
  );

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <Avatar
          alt="User Avatar"
          // src={`${params.value}`}
          sx={{ width: 50, height: 50 }} // Customize the width and height of the avatars
        />
      ),

      // headerName: "Image",

      // flex: 1,
      // width:200,
      renderCell: (dashboard_contents) => {
        return (
          <div>
            <Avatar alt="Movie Name" src={dashboard_contents.row.image}>
              {" "}
              {dashboard_contents.row.image}
            </Avatar>
          </div>
        );
      },
    },

    {
      field: "title",

      headerName: "title ID",

      flex: 1,
    },

    {
      field: "created",

      headerName: "Data Added",

      flex: 1,
    },

    {
      field: "Active Status",

      headerName: "# Active",

      flex: 0.5,

      sortable: false,

      // renderCell: (params) => params.value.length,
    },

    {
      field: "action",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        // const id = params.row.id; // Assuming 'id' is a unique identifier for the row

        // const handleEditAction = () => {
        //   // Ikkada Edit Action Logic Raasko
        //   console.log(`Edit action for ID `);
        //   // aah Edit Logic ikkada Add chesko
        // };
        // const handleDeleteAction = () => {
        //   // Ikkada Delete Action Logic Raasko
        //   console.log(`Delete action for ID `);
        //   // aah Delete Logic ikkada Add chesko
        // }

        return (
          <div>
            <IconButton
              // onClick={handleEditAction}
              aria-label="Edit"
              color="primary"
            >
              <Edit />
            </IconButton>

            <text>|</text>

            <IconButton
              // onClick={handleDeleteAction}
              aria-label="Delete"
              color="secondary"
            >
              <Delete />
            </IconButton>
          </div>
        );
      },
    },
  ];
  const [allcontent, setAllcontent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/dashboard_contents/find")
      .then((response) => response.json())
      .then((json) => setAllcontent(json.data));
  }, []);
  console.log(allcontent);

  return (
    // <Box m="1.5rem 2.5rem" ml="300px">

    <Box
      m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"}
      ml={isSmallScreen ? "10px" : "300px"}
    >
      <Navbar />

      <FlexBetween>
        <Box></Box>
      </FlexBetween>

      <Box
        // mt="20px"

        ml="0px"
        display="grid"
        // gridTemplateColumns="repeat(12, 1fr)"

        // gridAutoRows="360px"

        // gap="20px"

        mt={isSmallScreen ? "10px" : "50px"}
        gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(12, 1fr)"}
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <StatBox
          title="CATEGORY LISTING"
          // value={data && data.totalCustomers}

          // increase="+14%"

          // description="Since last month"

          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Container sx={{ height: 450 }}>
          <DataGrid
            sx={{ mt: isSmallScreen ? "10px" : "60px" }}
            // loading={isLoading || !data}

            // getRowId={(row) => row._id}

            // rows={(data && data.transactions) || []}

            rows={allcontent}
            columns={columns}
          />
        </Container>
      </Box>

      <CustomColumnMenu />

      {/* <Sidebardc/> */}

      <FlexBetween>
        <IconButton
          onClick={() => setIsSidebarContentOpen(!isSidebarContentOpen)}
        >
          <MenuIcon />
        </IconButton>
      </FlexBetween>
    </Box>
  );
};

export default Allcontent;
