import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";
const AddMessage4 = () => {
  const [checked, setChecked] = useState(false);
  const [passchecked, setPassChecked] = useState(false);
  const { _id } = useParams();
  const [visiblechecked, setVisibleChecked] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    user_ids: "",
    start_date: "",
    repeat_interval: "",
    is_active: "",
    created: "",
    modified: "",
  });
  const handleReset = () => {
    setFormData({
      id: "",
      title: "",
      description: "",
      user_ids: "",
      start_date: "",
      repeat_interval: "",
      is_active: "",
      created: "",
      modified: "",
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const [multi_users, setMultiusers] = useState([]);
  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/multi_users/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMultiusers(res.data);
      });
  }, []);
  useEffect(() => {
    if (_id) {
      axios
        .get(`http://localhost:5001/api/multi_user_messages/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            title: productData.title,
            description: productData.description,
            user_ids: productData.user_ids,
            start_date: productData.start_date,
            repeat_interval: productData.repeat_interval,
            is_active: productData.is_active,
            created: productData.created,
            modified: productData.modified,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/multi_user_messages/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Product updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/multi_user_messages/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Product added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
  return (
    <Box m="1.5rem 2.5rem" ml="400px">
      <FlexBetween>
        <Box></Box>
      </FlexBetween>
      <h3>APPMESSAGE ADD </h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          variant="outlined"
          value={formData.description}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Customers">Customers</InputLabel>
          <Select
            label="Customers"
            name="Customers"
            value={formData.Customers}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Customer)</MenuItem>
            {multi_users.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.device_id}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
        <label>Active :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={visiblechecked}
                onChange={(e) => setVisibleChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <TextField
          fullWidth
          name="start_date"
          label="Startdate"
          variant="outlined"
          value={formData.start_date} 
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="repeat_interval"
          label="Repeat Intervels"
          variant="outlined"
          value={formData.repeat_interval}
          onChange={handleChange}
          margin="normal"
        />
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "White", color: "black" }}>
            Reset
          </Button>
          <Button type="submit" style={{ backgroundColor: "green" }}>Submit</Button>
        </ButtonGroup>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default AddMessage4;
