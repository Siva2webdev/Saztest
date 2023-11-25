import React, { useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
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
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Sidebar from "components/Sidebar";

const Dashboard = ({}) => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 400px,max-width:1280px)");
  // const { data, isLoading } = useGetDashboardQuery();
useEffect(()=>
{

  fetch("")
},[])
  const columns = [
    {
      field: "username",
      headerName: "UserName",
      flex: 1,
    },
    {
      field: "email",
      headerName: " Email",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Create Date",
      flex: 1,
    },
   
    {
      field: "package",
      headerName: "Package",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "reseller",
      headerName: "Reseller",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 3.5rem" ml="20px">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </FlexBetween>

      <Box
        mt="50px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="RECENT USERS"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <DataGrid sx={{ mt: "-60px" }} rows={[]} columns={columns} />
        <StatBox
          title="RECENT RESELLERS"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }

        />
        <DataGrid
          sx={{ mt: "-60px" }}
          //  sx={{mt:"10px"}}
          rows={[]}
          columns={columns}
        />

        <StatBox
          title="RECENT CHANNELS"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <DataGrid sx={{ mt: "-60px" }} rows={[]} columns={columns} />
        <StatBox
          title="RECENT APP UPDATES"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <DataGrid sx={{ mt: "-60px" }} rows={[]} columns={columns} />
        <StatBox
          title="RECENT MESSAGES"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <DataGrid sx={{ mt: "-60px" }} rows={[]} columns={columns} />

        <StatBox
          title="OPEN SUPPORT TICKETS"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <DataGrid sx={{ mt: "-60px" }} rows={[]} columns={columns} />
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
              mt: "20px",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        ></Box>
        <CustomColumnMenu />
      </Box>
    </Box>
  );
};

export default Dashboard;
