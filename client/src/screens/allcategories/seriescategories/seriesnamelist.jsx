import React from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import { DataGrid } from "@mui/x-data-grid";

// import SidebarContent from "components/SidebarContent"

import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import axios from "axios";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Edit,
  Delete
} from "@mui/icons-material";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar
} from "@mui/material";

import Sidebar from "components/Sidebar";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

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

import { } from "@mui/icons-material";

import { useState, useEffect } from "react";

import SidebarContent from "components/SidebarContent";

import { Menu as MenuIcon, IconButton } from "@mui/material";

import SidebarAllCategory from "components/SidebarAllCategories";

import SidebarAllCategories from "components/SidebarAllCategories";

// import SidebarAllCategories from 'components/SidebarAllCategories'

const Seriesnamelist = () => {
  const theme = useTheme();

  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px,max-width:1280px)"
  );
  const [allcontent, setAllcontent] = useState([]);

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

      flex: 1,
      width: 200,
      renderCell: (mod_categories) => {
        return (
          <div>

            <Avatar alt="Movie Name" src={mod_categories.row.image}>  {mod_categories.row.image}</Avatar>
          </div>
        )
      }

    },

    {
      field: "title",

      headerName: "Title",

      flex: 1,
    },

    {
      field: "activeStatus",

      headerName: "Active Status",

      flex: 1,
    },

    {
      field: "createdate",

      headerName: "Created Date",

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

        // Delete Action
        const handleDeleteAction = async (id) => {
          if (
            window.confirm(`Do you want to delete item with ObjectId: ${id}?`)
          ) {
            try {
              const res = await axios.delete(
                `http://localhost:5001/api/mod_categories/delete/${id}`
              );

              if (res.status === 200) {
                const updatedAllcontent = allcontent.filter(
                  (item) => item._id !== id
                );
                setAllcontent(updatedAllcontent);
              } else {
                console.error("Failed to delete item.");
              }
            } catch (err) {
              console.error(err);
            }
          }
        };

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
              onClick={() => handleDeleteAction(params.row._id)}
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



  const [seriesnamelist, setSeriesnamelist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/mod_categories/find")
      .then((response) => response.json())
      .then((json) => setSeriesnamelist(json.data));
  }, []);
  console.log(seriesnamelist);

  return (
    <Box m="1.5rem 2.5rem" ml="310px">
      <SidebarAllCategories />

      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>

      <Box
        mt="20px"
        ml="0px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <StatBox
          title="VOD CATEGORY"
          // value={data && data.totalCustomers}

          // increase="+14%"

          // description="Since last month"

          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
          searchtab={
            <div className="content">
              <div
                id="data_table_wrapper"
                className="dataTables_wrapper"
                role="grid"
              >
                <div className="dataTables_filter" id="data_table_filter">
                  <label>
                    Search &nbsp;&nbsp;
                    <input type="text" aria-controls="data_table" />
                  </label>
                </div>
              </div>
            </div>
          }
        />

        <DataGrid
          // loading={isLoading || !data}

          // getRowId={(row) => row._id}

          // rows={(data && data.transactions) || []}

          rows={seriesnamelist}
          columns={columns}
        />
      </Box>

      <CustomColumnMenu />

      {/* <SidebarAllCategory/> */}

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

export default Seriesnamelist;
