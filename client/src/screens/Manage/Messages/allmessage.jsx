// import React from "react";
import React, { useEffect, useState } from "react";

import FlexBetween from "components/FlexBetween";
// import DeleteIcon from '@mui/icons-material/Delete';

import Header from "components/Header";

import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import axios from "axios";



import {

  DownloadOutlined,

  Email,

  PointOfSale,

  PersonAdd,

  Traffic,
  Update,
  Edit,
  Delete,


} from "@mui/icons-material";

import {
  Container,

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



const Allmessage1 = () => {

  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");

  const [allcontent, setAllcontent] = useState([]);

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

        field: "repeat_interval",

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

      {
        field: "action",
        headerName: "Actions",
        flex:1,

        renderCell: (params) => {
          // const id = params.row.id; // Assuming 'id' is a unique identifier for the row

          // const handleEditAction = () => {
          //   // Ikkada Edit Action Logic Raasko
          //   console.log(`Edit action for ID `);
          //   // aah Edit Logic ikkada Add chesko
          // };
          const handleDeleteAction = async (id) => {
            if (
              window.confirm(`Do you want to delete item with ObjectId: ${id}?`)
            ) {
              try {
                const res = await axios.delete(
                  `http://localhost:5001/api/messages/delete/${id}`
                );

                if (res.status === 200) {
                  const updatedAllcontent = allcontent.filter(
                    (item) => item._id !== id
                  );
                  setAllcontent(updatedAllcontent);
                } else {
                  console.error("Failed to delete item.");
                }
              } catch (err) {
                console.error(err);
              }
            }
          };

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

                onClick={() => handleDeleteAction(params.row._id)}
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



  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/messages/find")
      .then((response) => response.json())
      .then((json) => setMessages(json.data));
  }, []);
  console.log(messages);



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

        gridAutoRows="500"

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

<Container sx={{height: 450}}>
<DataGrid
   // className={classes.root}
    // components={{
    //   LoadingOverlay: CustomLoadingOverlay,
    //   NoRowsOverlay: CustomNoRowsOverlay,
    //   ErrorOverlay: CustomErrorOverlay,
    // }}
    // loading={loading}
    // error={error}


    disableSelectionOnClick
    rows={messages}
    columns={columns}
    pageSize={8}
    checkboxSelection
    getRowId={(row) => String(row._id)}



   />
</Container>
      </Box>
      <CustomColumnMenu/>

    </Box>

  );

};



export default Allmessage1;