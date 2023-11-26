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
} from "@mui/icons-material";
import {
  Box,
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
import SidebarAllCategories from "components/SidebarAllCategories";

const SongCategoryList = () => {
  const theme = useTheme();
  // const isNonMediumScreens = useMediaQuery("(min-width: 400px)");
  // const isNonMobile = useMediaQuery("(min-width:1280px)");
  // const { data, isLoading } = useGetDashboardQuery();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [isSidebarContentOpen, setIsSidebarContentOpen] = useState(true);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
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
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  const [songcategorylist, setSongcategorylist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/song_categories/find")
      .then((response) => response.json())
      .then((json) => setSongcategorylist(json.data));
  }, []);
  console.log(songcategorylist);

  return (
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "310px"}>
    {/* m="1.5rem 2.5rem" ml="350px"> */}
      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>

      {/* <SidebarAllCategories /> */}
      <FlexBetween>{/* <Header title="Movie Category"  /> */}</FlexBetween>

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
          title="SONG CATEGORY"
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
          rows={songcategorylist}
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

export default SongCategoryList;
