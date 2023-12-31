// import React from "react";
import React, { useEffect, useState } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import CustomColumnMenu from "components/DataGridCustomColumnMenu"
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import StatBox from "components/StatBox";
import Navbar from "components/Navbar";
const Allmessage4 = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1800px)");
  const [allcontent, setAllcontent] = useState([]);
  const [multiusermessage, setMultiusermessage] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:5001/api/multi_user_messages/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMultiusermessage(res.data);
      });
  };
  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const openDeleteDialog = (_id) => {
    setDeleteDialogOpen(true);
    setDeleteItemId(_id);
  };
  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setDeleteItemId(null);
  };
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
    },
    {
        field: "repeat_interval",
        headerName: "Repeat nterval",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
      },
      {
        field: "action",
        headerName: "Actions",
        flex: 1,
        renderCell: (params) => {
          const _id = params.row._id;
          const handleEditAction =        (_id) =>
        {
          navigate(`/Multi/AddMessage/${params.row._id}`);
          console.log(`Edit action for ID ${_id}`);
        };
        const handleDeleteAction = (_id) => {
          // Open the delete confirmation dialog
          openDeleteDialog(_id);
        };

        const handleDeleteConfirmation = () => {
          // Assuming you have an API endpoint for deleting by ID
          axios
            .delete(`http://localhost:5001/api/multi_user_messages/delete/${deleteItemId}`)
            .then((response) => {
              console.log(`Item with ID ${deleteItemId} deleted successfully.`);
              closeDeleteDialog(); // Close the dialog
              fetchData();
              // You might want to refresh your data after a successful delete
            })
            .catch((error) => {
              console.error(
                `Error deleting item with ID ${deleteItemId}:`,
                error
              );
            });
        };
          return (
            <div>
              <IconButton
                onClick={handleEditAction}
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
              <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
              <DialogTitle>Confirm Delete</DialogTitle>
              <DialogContent>
                Are you sure you want to delete this item?
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDeleteDialog} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleDeleteConfirmation} color="secondary">
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
            </div>
          );
        },
      },
  ];
  return (
    <Box m="1.5rem 3.5rem" ml="400px">
      <FlexBetween>
      </FlexBetween>
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
            rows={multiusermessage}
            columns={columns}
          />
      </Box>
      <CustomColumnMenu/>
    </Box>
  );
};
export default Allmessage4;