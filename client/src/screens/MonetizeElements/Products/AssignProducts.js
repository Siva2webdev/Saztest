import {useState,useEffect} from"react"
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
  useMediaQuery,
  Snackbar,
  Alert,
} from "@mui/material";
// import Sidebar from "screens/content";
import { ContentCopy } from "@mui/icons-material";
import FlexBetween from "components/FlexBetween";

import Header from "components/Header";
// import SidebarContent from "components/SidebarContent";
// import InputFileUpload from "components/ChooseFile";
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import Democontainer from "/screens/MonetizeElements/AssignProducts.js";
import SidebarMonetize from "components/SidebarMonetize";

const AssignProducts = () => {
  const [checked, setChecked] = useState(false);
  const { _id } = useParams();
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );

  const [formData, setFormData] = useState({
    product: "",
    user: "",
    serial_number: "",
    mac_address: "",
    date_assigned: "",
    created:"",
  });
  const handleReset = () => {
    setFormData({
      Product: "",
    user: "",
    serial_number: "",
    mac_address: "",
    date_assigned: "",
    created:"",
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

  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/product_assignments/list/${_id}`)
        .then((response) => {
          const productData = response.data;
          setFormData({
            Product: productData.Product,
            user: productData.user,
            serial_number: productData.serial_number,
            mac_address: productData.mac_address,
            date_assigned: productData.date_assigned,
            created: productData.created,
            date: productData.date,
            available: productData.available,
            description: productData.description,
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
    const apiUrl = `http://localhost:5001/api/product_assignments/patch/${_id}`; // Edit
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
    const apiUrl = "http://localhost:5001/api/product_assignments/post"; // Add
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

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/products/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      });
  }, []);




  return (
    <Box m="1.5rem 2.5rem" ml="250px" >
      <FlexBetween>
        <Box></Box>
      </FlexBetween>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="product">Product</InputLabel>

          <Select
            label="Product"
            name="Product"
            value={formData.product}
            onChange={handleChange}
          >


<MenuItem value="17">(Choose Product)</MenuItem>
            {products.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.model}
            </MenuItem>
          ))}
          </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel htmlFor="user">User</InputLabel>

          <Select
          label="User"
          name="user"
          value={formData.user}
          onChange={handleChange}

          >
            <MenuItem value="18">(Choose User)</MenuItem>
            </Select>

          <TextField
            fullWidth
            name="serial_number"
            label="Serial Number"
            variant="outlined"
            value={formData.serial_number}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            name="mac_address"
            label="Mac Address"
            variant="outlined"
            value={formData.mac_address}
            onChange={handleChange}
            margin="normal"
          />

<TextField
            label="Date Assigned"
            name="created"
            type="date"
            variant="outlined"
            value={formData.created}
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button type="submit">Send</Button>
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
      <SidebarMonetize />
    </Box>
  );
};

export default AssignProducts;
