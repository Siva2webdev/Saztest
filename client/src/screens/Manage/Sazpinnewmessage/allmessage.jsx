import React from "react";
import { useEffect, useState } from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Update,
  Edit,
  Delete
} from "@mui/icons-material";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,

} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";

import Navbar from "components/Navbar";

const Allmessage10 = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");

  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "title",

      headerName: "Title",

      flex: 1,
    },

    {
      field: "description",

      headerName: "Description",

      flex: 1,
    },

    {
      field: "created",

      headerName: "Created Date",

      flex: 1,
    },

    {
      field: "user_ids",

      headerName: "Users",

      flex: 1,
    },

    {
      field: "start_date",

      headerName: "Starting Date",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

    {
      field: "repeat_intervel",

      headerName: "Repeat nterval",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

    {
      field: "status",

      headerName: "Status",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },

  
  ];

  const [NewuserMessagelist, setNewuserMessagelist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/usernotificationmessage/get")
      .then((response) => response.json())
      .then((json) => setNewuserMessagelist(json.data));
  }, []);
  console.log(NewuserMessagelist);

  return (
    <Box m="1.5rem 3.5rem" ml="400px">
      <FlexBetween>{/* <Header title="ALL USERS LIST" /> */}</FlexBetween>

      {/* <Navbar/> */}

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="180px"
        gap="10px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <StatBox
          title="APP MESSAGE"
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

          //   icon={

          //     <Email

          //       sx={{ color: theme.palette.secondary[100], fontSize: "26px" }}

          //     />

          //   }
        />

        <DataGrid
          sx={{ mt: "-60px" }}
          rows={NewuserMessagelist}
          columns={columns}
        />
      </Box>
      <CustomColumnMenu />
    </Box>
  );
};

export default Allmessage10;
