import {useState,useEffect} from"react"
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
  const isNonMediumScreens = useMediaQuery(
    "(min-width: 400px, max-width: 1280px)"
  );

  const [formData, setFormData] = useState({
    Product: "",
    user: "",
    serial_number: "",
    mac_address: "",
    date_assigned: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            name="product"
            value={formData.category}
            onChange={handleChange}
          >


<MenuItem value="17">(Choose Product)</MenuItem>
            {products.map((type) => (
          <MenuItem key={type.id} value={type.id}>
            {type.model}
            </MenuItem>
          ))}
          </Select>
              <br></br>
          <Select
          fullWidth
            label="user"
            name="User"
            value={formData.user}
            onChange={handleChange}
            margin="normal"
            variant="outlined"

          >
            <MenuItem value="18">(Choose User)</MenuItem>
            </Select>

          <TextField
            fullWidth
            name="serial_number"
            label="Serial Number"
            variant="outlined"
            value={formData.select_channel_image}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            name="mac_address"
            label="Mac Address"
            variant="outlined"
            value={formData.select_channel_image}
            onChange={handleChange}
            margin="normal"
          />

<TextField
            label="Date Assigned"
            type="date"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </FormControl>
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Send</Button>
        </ButtonGroup>
      </form>
      <SidebarMonetize />
    </Box>
  );
};

export default AssignProducts;
