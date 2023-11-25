import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu"

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
import Navbar from "components/Navbar";

const Customer_Saz2 = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "ID",
      headerName: "ID",
      flex:0.7,
    },
    {
      field: "Customer ID",
      headerName: "Customer ID",
      flex: 1.1,
    },
    {
      field: "Module Name",
      headerName: "Module Name",
      flex: 1.1,
    },
    {
      field: "DeviceType",
      headerName: "DeviceType",
      flex: 1,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 0.7,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
        field: "isTrail",
        headerName: "isTrail",
        flex: 0.7,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "Active/InActive",
        headerName: "Active/InActive",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "Expiry Date",
        headerName: "Expiry Date",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "Created Date",
        headerName: "Created Date",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
  ];

  return (

    <Box m="1.5rem 3.5rem" ml="250px">
      <FlexBetween>
        {/* <Header title="Customer_Saz2" /> */}
      </FlexBetween>
      <Navbar/>

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
          title="Customer_Saz2"

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
        
        //   icon={
        //     <Email
        //       sx={{ color: theme.palette.secondary[100], fontSize: "26px" }}
        //     />
        //   }
        />
               <DataGrid   sx={{mt:"-60px"}} 
         
            rows={[]}
            columns={columns}
          />
        

     
      </Box>
  

      <CustomColumnMenu/>
    </Box>
  );
};

export default Customer_Saz2 ;