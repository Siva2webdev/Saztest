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
  Search,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import StatBox from "components/StatBox";

const RadioList = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 400px, max-width: 1280px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const columns = [
    {
      field: "image",
      headerName: "Image",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "dateAdded",
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
      field: "actions",
      headerName: "Actions",
      flex: 1,
    },
  ];

  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "250px"}>
      <FlexBetween>
        <Box></Box>
      </FlexBetween>

      <Box
        display="grid"
        gridAutoRows="160px"
        mt={isSmallScreen ? "10px" : "50px"}
        gridTemplateColumns={isSmallScreen ? "1fr" : "repeat(12, 1fr)"}
        gap={isSmallScreen ? "10px" : "20px"}
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        
        <StatBox 
          title="AUDIO STREAM LISTING"
          searchtab={
            <div className="content">
              <div id="data_table_wrapper" className="dataTables_wrapper" role="grid">
                <div className="dataTables_filter" id="data_table_filter">
                  <label
                    style={{
                      display: "flex",
                      flexDirection: isSmallScreen ? "column" : "row",
                      alignItems: "center",
                    }}
                  >
                    Search
                    <input
                      type="text"
                      aria-controls="data_table"
                      style={{
                        width: isSmallScreen ? "100%" : "auto",
                        margin: isSmallScreen ? "10px 0" : "0 10px",
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          }
          icon={<Search sx={{ color: theme.palette.secondary[300], fontSize: "26px" }} />}
        />

        <DataGrid
          sx={{ mt: isSmallScreen ? "10px" : "-60px" }}
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

export default RadioList;
