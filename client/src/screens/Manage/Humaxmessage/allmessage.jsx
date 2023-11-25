import React,{useEffect,useState} from "react";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import CustomColumnMenu from "components/DataGridCustomColumnMenu"

 

import {

  DownloadOutlined,

  Email,

  PointOfSale,

  PersonAdd,

  Traffic,
  Update,

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

 

const Allmessage7 = () => {

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

      // renderCell: (params) => params.value.length,

    },

    {

      field: "start_date",

      headerName: "Starting Date",

      flex: 1,

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    },

    {

        field: "repeat interval",
  
        headerName: "Repeat interval",
  
        flex: 1,
  
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
  
      },

      {

        field: "status",
  
        headerName: "Status",
  
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

  const [humaxusermessages, setHumaxusermessages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/humaxusermessagesRoutes")
      .then((response) => response.json())
      .then((json) => setHumaxusermessages(json));
  }, []);
  console.log(humaxusermessages);

  return (

 

    <Box m="1.5rem 3.5rem" ml="400px">

      <FlexBetween>

        {/* <Header title="ALL USERS LIST" /> */}

      </FlexBetween>

      {/* <Navbar/> */}

 

      <Box

        mt="50px"

        display="grid"

        gridTemplateColumns="repeat(12, 1fr)"

        gridAutoRows="200px"

        gap="20px"

        sx={{

          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },

        }}

      >

        {/* ROW 1 */}

        <StatBox

          title="APP MESSAGE"

 

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

         

            rows={humaxusermessages}

            columns={columns}

          />

      </Box>
      <CustomColumnMenu/>

    </Box>

  );

};

 

export default Allmessage7;