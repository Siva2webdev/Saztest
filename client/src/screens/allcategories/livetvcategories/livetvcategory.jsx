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
  Edit,
  Delete,

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
import {} from "@mui/icons-material";
import { useState, useEffect } from "react";
import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
import SidebarAllCategory from "components/SidebarAllCategories";
import SidebarAllCategories from "components/SidebarAllCategories";

const LiveTvCategory = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width:300px, max-width:1280px)");
  const isNonMobile = useMediaQuery("(min-width:300px, max-width:1280px)");


  const [videocategories, setvideocategories] = useState([]);

  //  const getData=async()=>
  //  {

  //   await axios.get("http://localhost:5001/api/videos/video").then((res)=>
  //   {
  //     setMovies(res.data.movies)
  //   }
  //  }
 useEffect(   ()=>
  {
 fetch("http://localhost:5001/api/video_categories/find")
.then(res=>res.json())
.then(res=>{console.log(res)
setvideocategories(res.data)});


  },[])





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

      headerName: "Image",

      flex: 1,
      width:200,
      renderCell:(video_categories)=>{
        return(
          <div>

            <Avatar alt="Movie Name" src={video_categories.row.image}>  {video_categories.row.image}</Avatar>
            </div>
        )
      }

    },

    {
      field: "shahid_image",
      headerName: "Shahid Image",
      flex: 1,
    },
    {
      field: "france_image",
      headerName: "France Image",
      flex: 1,
    },
    {
      field: "humax_image",
      headerName: "HumaxImage",
      flex: 1,
      //   sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "zomtak_image",
      headerName: "ZomtakImage",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "masa_plus_image",
      headerName: "MasaPlusImage",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "activestatus",
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

  return (
    <Box m="1.5rem 2.5rem" ml="350px">
      <SidebarAllCategories />
      <FlexBetween>{/* <Header title="Live TV Category"  /> */}</FlexBetween>

      <Box
        mt="10px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="LIVE TV CATEGORY"
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
        <Container sx={{height: 450}}>
<DataGrid
   


    disableSelectionOnClick
    rows={videocategories}
    columns={columns}
    pageSize={8}
    checkboxSelection
    getRowId={(row) => String(row._id)}



   />
</Container>
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

export default LiveTvCategory;
