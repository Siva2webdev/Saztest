import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu"
import { useState,useEffect } from "react";
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

  IconButton

} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import Navbar from "components/Navbar";

const SazpinNewCustomers = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
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
      field: "mail",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "disable/enable",
      headerName: "Disable/Enable",
      flex: 1,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "createddate",
      headerName: "Created Date",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
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
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
      {
        field: "kick",
        headerName: "Kick",
        flex: 1,
        // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
      },
  ];


  const [sazpinNewCustomers, setSazpinNewCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/masa_new_users/find")
      .then((response) => response.json())
      .then((json) => setSazpinNewCustomers(json.data));
  }, []);
  console.log(sazpinNewCustomers);


  return (

    <Box m="1.5rem 3.5rem" ml="250px">
      <FlexBetween>
        {/* <Header title="ALL USERS LIST" /> */}
      </FlexBetween>
      <Navbar/>

      <Box
        mt="50px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="160px"
        gap="80px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="ALL USERS LIST"

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

            rows={sazpinNewCustomers}

            columns={columns}
          />



      </Box>


      <CustomColumnMenu/>
    </Box>
  );
};

export default SazpinNewCustomers;