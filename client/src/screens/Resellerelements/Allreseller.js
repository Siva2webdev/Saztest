import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import SidebarContent from "components/SidebarContent";

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
import SidebarReseller from "components/SidebarResellers";

const Allreseller = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "nick",
      headerName: "Nick",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Created Date",
      flex: 0.5,
      sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "actions",
      headerName: "Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "action",
      headerName: "Force Action",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem" ml="300px">
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}


      </FlexBetween>

      <Box
        mt="20px"
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
          title="All Resellers"
          // value={data && data.totalCustomers}
          // increase="+14%"
          // description="Since last month"
          searchtab = {<div className="content">

          <div id="data_table_wrapper" className="dataTables_wrapper" role="grid">

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
          rows={[]}
          columns={columns}
        />
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
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
      </Box>

      <CustomColumnMenu />
    </Box>
  );
};

export default Allreseller;
