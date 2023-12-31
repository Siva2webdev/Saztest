import React from "react";
import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
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
  Avatar,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

// import Sidebar from "components/Sidebar";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

// import { SettingsOutlined,ChevronLeft,ChevronRightOutlined,HomeOutlined ,ShoppinCartOutlined,Groups2Outlined,ReceiptLongOutlined,PublicOffOutlined,PointOfSaleOutlined,CalendarTodayOutlined,CalendarMonthOutlined,AdminPanelSettingsOutlined,TrendingUpOutlined, ContentCopyOutlined} from '@mui/icons-material';
// import {TocOutlinedIcon} from '@mui/icons-material/TocOutlined';
// import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
// import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
// import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
// import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import {} from "@mui/icons-material";
import { useState, useEffect } from "react";
// import SidebarContent from "components/SidebarContent";
import { Menu as MenuIcon, IconButton } from "@mui/material";
import SidebarAllCategory from "components/SidebarAllCategories";

const RadioCategory = () => {
  const theme = useTheme();
  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const isNonMobile = useMediaQuery("(min-width:600px)");
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
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
 
        headerName: "Image",
 
        flex: 1,
        width:200,
        renderCell:(movies)=>{
          return(
            <div>
 
              <Avatar alt="Movie Name" src={movies.row.kameraImage}>  {movies.row.kameraImage}</Avatar>
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
      headerName: "Action",
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
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  ];
  const [audiocategory, setaudiocategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/audio_categories/find")
      .then((response) => response.json())
      .then((json) => setaudiocategory(json.data));
  }, []);
  console.log(audiocategory);
  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"}>
    {/* m="1.5rem 2.5rem" ml="350px"> */}
      <FlexBetween>{/* <Header title="Audio Category"/> */}</FlexBetween>

      <Box
          // mt="20px"
          mt={isSmallScreen ? "10px" : "50px"}
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          // gap="20px"
          gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="AUDIO CATEGORY"
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
          sx={{ mt: isSmallScreen ? "30px" : "60px" }}
          rows={audiocategory}
          columns={columns}
        />
      </Box>

      <CustomColumnMenu />

      {/* <SidebarAllCategory /> */}
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

export default RadioCategory;
