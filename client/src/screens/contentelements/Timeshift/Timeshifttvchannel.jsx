import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import SidebarContent from "components/SidebarContent";
import { useState, useEffect } from "react";

import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
  Delete,
  Edit,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  IconButton,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";

const AddTimeShiftTvChannel = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  // const { data, isLoading } = useGetDashboardQuery();

  const columns = [
    {
      field: "kameraImage",

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
      field: "streamName",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Date Added",
      flex: 1,
    },
    {
      field: "activeStatus",
      headerName: "Active Status",
      flex: 0.5,
      sortable: false,
    },
    {
      field: "action",
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
      }
    }
  ];
  const [timeshiftlist, settimeshiftlistlist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/videolives/get")
      .then((response) => response.json())
      .then((json) => settimeshiftlistlist(json.data));
  }, []);
  console.log(timeshiftlist);
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
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}

        <Box></Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        // gridAutoRows="460px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="CHANNEL LISTING"
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
          rows={timeshiftlist}
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

<SidebarContent/>


   




      <CustomColumnMenu />
    </Box>
  );
};

export default AddTimeShiftTvChannel;
