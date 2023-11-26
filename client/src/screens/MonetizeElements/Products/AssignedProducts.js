import React, { useState } from "react";
import FlexBetween from "components/FlexBetween";
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
  FormControlLabel,
  Checkbox,
  FormControl,
  checked,
  setChecked,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import BreakdownChart from "components/BreakdownChart";
// import OverviewChart from "components/OverviewChart";
// import { useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import SidebarMonetize from "components/SidebarMonetize";
 
const AssignedProducts = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const { data, isLoading } = useGetDashboardQuery();
 
  const columns = [
    <FormControl>
      <FormControlLabel
        control={
          <Checkbox
            id="agree"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
      />
    </FormControl>,
 
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1,
    },
    {
      field: "serial#",
      headerName: "Serial#",
      flex: 1,
      // sortable: false,
      // renderCell: (params) => params.value.length,
    },
    {
      field: "mac address",
      headerName: "Mac Address",
      flex: 1,
      // renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
    {
      field: "sale price",
      headerName: "Sale Price",
      flex: 1,
    },
    {
      field: "assigned date",
      headerName: "Assigned Date",
    },
    {
      field: "invoice",
      headerName: "Invoice",
    },
  ];
 
  return (
    // <Box m="1.5rem 2.5rem">
    //   <FlexBetween>
    //     <Header title="Live TV" subtitle="Welcome to your Live TV" />
 
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
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"}>
    {/* <Box m="1.5rem 2.5rem" ml="250px"> */}
      <FlexBetween>
        {/* <Header title="ADD MOVIE" /> */}
 
        <Box></Box>
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
          title="AssignedProducts"
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
        sx={{ mt: isSmallScreen ? "10px" : "60px" }}
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
        {/* <SidebarMonetize /> */}
      </Box>
 
      <CustomColumnMenu />
    </Box>
  );
};
 
export default AssignedProducts;