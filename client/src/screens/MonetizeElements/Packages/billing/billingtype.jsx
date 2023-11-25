import React from "react";
import { useState,useEffect } from "react";
import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import SidebarContent from "components/SidebarContent";

import Navbar from "components/Navbar";


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
  IconButton,

} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

// import BreakdownChart from "components/BreakdownChart";

// import OverviewChart from "components/OverviewChart";

// import { useGetDashboardQuery } from "state/api";

import StatBox from "components/StatBox";
import SidebarPackages from "components/SidebarMonetize";



const Billingtype = () => {



  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery(

    "(min-width: 400px, max-width: 1280px)"

  );

  // const { data, isLoading } = useGetDashboardQuery();


  const columns = [

    // {

    //   field: "image",

    //   headerName: "Image",

    //   flex: 1,

    // },

    {

      field: "name",

      headerName: "Name",

      flex: 1,

    },

    // {

    //   field: "category",

    //   headerName: "Category",

    //   flex: 1,

    // },

    // {

    //   field: "dateAdded",

    //   headerName: "Date Added",

    //   flex: 1,

    // },

    // {

    //   field: "actionStatus",

    //   headerName: "Action Status",

    //   flex: 0.5,

    //   sortable: false,

    //   // renderCell: (params) => params.value.length,

    // },

    {

      field: "actions",

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

      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,

    },

  ];

  const [billingTypes, setBillingTypes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/adons_billing_types/getadonsbillingtypes")
      .then((response) => response.json())
      .then((json) => setBillingTypes(json.adonsBillingTypesdata1));
  }, []);
  console.log(billingTypes);

  return (

    // <Box m="1.5rem 2.5rem">

    //   <FlexBetween>

    //     <Header title="Movies" subtitle="Welcome to your Movies" />



    //     <Box>

    //       <Button

    //         sx={{

    //           backgroundColor: theme.palette.secondary.light,

    //           color: theme.palette.background.alt,

    //           fontSize: "14px",

    //           fontWeight: "bold",

    //           padding: "10px 20px",

    //         }}

    //       >

    //         <DownloadOutlined sx={{ mr: "10px" }} />

    //         Download Reports

    //       </Button>

    //     </Box>

    //   </FlexBetween>

    <Box m="1.5rem 2.5rem" ml="250px">

<Navbar/>

      <FlexBetween>

        {/* <Header title="ADD MOVIE" /> */}



        <Box></Box>

      </FlexBetween>



      <Box

        mt="20px"

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

          title="Billingtype"

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

          // value={data && data.totalCustomers}

          // increase="+14%"

          // description="Since last month"

          icon={

            <Email

              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}

            />

          }

        />

        <DataGrid

          // loading={isLoading || !data}

          // getRowId={(row) => row._id}

          // rows={(data && data.transactions) || []}

          rows={billingTypes}

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

        <SidebarPackages />

      </Box>



      <CustomColumnMenu />

    </Box>

  );

};



export default Billingtype;

