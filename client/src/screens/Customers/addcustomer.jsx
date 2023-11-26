import React, { useState, useEffect } from "react";
// import axios from 'axios';
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
  Typography,
  IconButton,
  InputAdornment,
  useMediaQuery
} from "@mui/material";
import { Input } from "@mui/material";
import { CloudUpload, Delete, Add, AddOutlined } from "@mui/icons-material";
// import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SidebarCustomers from "components/SidebarCustomers";
import App from "App";

const Addcustomer = () => {
  const [checked, setChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [formData, setFormData] = useState([{
    title: "",
    visible: "",
    stream_for_webtv: "",
    backup_stream_1: "",
    choose_payment_type: "",
    backup_stream_3: "",
    backup_stream_4: "",
    backup_stream_5: "",
    choose_package: "",
    select_channel_image: "",
    select_the_category: "",

    user_name: "",
    name: "",
    url: "",
    playlists: [
      {
        name: "",
        url: "",
      },]
  }]);

  // const handleAddField = () => {
  //   setFormData([...formData, { name: '' }]);
  // };

  // const handleRemoveField = (index) => {
  //   const newFormData = [...formData];
  //   newFormData.splice(index, 1);
  //   setFormData(newFormData);
  // };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };




  const [paymentTypes, setPaymentTypes] = useState([]);

  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/payment_types/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPaymentTypes(res.data);
      });
  }, []);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/countries/list")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCountries(res.countrydata);
      });
  }, []);

  const label = { inputProps: { label: 'Checkbox demo' } };



  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"}>
    {/* m="1.5rem 2.5rem" ml="250px"> */}
      <FlexBetween>
        <Header title="Sazpin New Customer Registration" />

        <Box></Box>
      </FlexBetween>
      <form onSubmit={handleSubmit}>
        <h3>
          <u>Product Selection</u>
        </h3>

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Choose Package</InputLabel>
          <Select
            label="Choose Package"
            name="choose_package"
            value={formData.choose_package}
            onChange={handleChange}
          >
            <MenuItem value="farisi">farisi turkish</MenuItem>
            <MenuItem value="6">FRANCE</MenuItem>
            <MenuItem value="8">FRANCE Plus</MenuItem>
            <MenuItem value="4">Full package</MenuItem>
            <MenuItem value="12">Humax Vejo Arab TV</MenuItem>
            <MenuItem value="18">Leo Player</MenuItem>
            <MenuItem value="14">Lite Tv</MenuItem>
            <MenuItem value="1">Sazpin Basic Plan</MenuItem>
            <MenuItem value="11">Sazpin basisc no german</MenuItem>
            <MenuItem value="13">Sazpin New Song</MenuItem>
            <MenuItem value="7">test</MenuItem>
            <MenuItem value="10">TimeShift Package</MenuItem>
            <MenuItem value="3">Turkish Basic Plan</MenuItem>

            {/* Add more language MenuItems as needed */}

            {/* Select2 */}
          </Select>
        </FormControl>




        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            Choose Payment Type
          </InputLabel>
          <Select
            label="Choose Payment Type"
            name="choose_payment_type"
            value={formData.choose_payment_type}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Payment Type)</MenuItem>

            {paymentTypes.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.name}
              </MenuItem>
            ))}





          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined" margin="normal">

          <InputLabel htmlFor="select_the_category">Reseller</InputLabel>
          <Select
            label="Reseller"
            name="reseller"
            value={formData.reseller}
            onChange={handleChange}
          >
            <MenuItem value="17">(Choose Reseller)</MenuItem>





          </Select>
        </FormControl>

        <TextField
          fullWidth
          name="macaddress"
          label="MacAddress"
          variant="outlined"
          value={formData.macaddress}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="deviceKey"
          label="Device KEY"
          variant="outlined"
          value={formData.deviceid}
          onChange={handleChange}
          margin="normal"
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Membership End Date" />
        </LocalizationProvider>



        <div>
        <div  style={{  alignItems: 'center' }}>
          <TextField
            fullWidth
            name="name"
            label="Playlist Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            // onChange={(event) => {
            //   const newFormData = [...formData];
            //   newFormData[index].name = event.target.value;
            //   setFormData(newFormData);
            // }
          // }
            margin="normal"
            InputProps={{
              endAdornment: (
                <React.Fragment>
                  <InputAdornment position="end">
                  <IconButton
                    color="secondary"
                    // onClick={() => handleRemoveField(index)}
                  >
                    <Delete />
                  </IconButton>
                  </InputAdornment>
                </React.Fragment>
              ),
            }}
          />

          <TextField
            fullWidth
            name={`url`}
            label="URL"
            variant="outlined"
            value={formData.url}
            onChange={handleChange}
            // onChange={(event) => {
            //   const newFormData = [...formData];
            //   newFormData[index].url = event.target.value;
            //   setFormData(newFormData);
            // }}
            margin="normal"
          />
        </div>
      <IconButton color="primary" >
        <Add />
      </IconButton>
    </div>


    <h3><u>Personal details</u></h3>


        <TextField
          fullWidth
          name="first_name"
          label="First Name"
          variant="outlined"
          value={formData.first_name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="last_name"
          label="Last Name"
          variant="outlined"
          value={formData.last_name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="email_address"
          label="Email Address"
          variant="outlined"
          value={formData.email_address}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="address1"
          label="Address1"
          variant="outlined"
          value={formData.address1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="address2"
          label="Address2"
          variant="outlined"
          value={formData.address2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="city_name"
          label="City Name"
          variant="outlined"
          value={formData.city_name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="zipcode"
          label="Postal / Zipcode"
          variant="outlined"
          value={formData.zipcode}
          onChange={handleChange}
          margin="normal"
        />


        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">Country</InputLabel>
          <Select
            label="country"
            name="select_the_category"
            // value={formData.country}
            onChange={handleChange}
          >
            <MenuItem >(Choose Payment Type)</MenuItem>
            {countries.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.name)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="phone_work"
          label="Phone Number(Work)"
          variant="outlined"
          value={formData.phone_work}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="phone_home"
          label="Phone Number(Home)"
          variant="outlined"
          value={formData.phone_home}
          onChange={handleChange}
          margin="normal"
        />
        <h3>
          <u>Extra Settings</u>
        </h3>
        <TextField
          fullWidth
          name="cat_pass"
          label="Category Password"
          variant="outlined"
          value={formData.cat_pass}
          onChange={handleChange}
          margin="normal"
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            STB's per Household
          </InputLabel>
          <Select
            label="stb's_per_household"
            name="stbs_per_household"
            value={formData.stbs_per_household}
            onChange={handleChange}
          >
            <MenuItem value="One">STB One</MenuItem>
          </Select>
        </FormControl>

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button color="error">Hide Prompts</Button>
          <Button type="submit" color="success">
            Submit
          </Button>
        </ButtonGroup>
      </form>
      {/* <SidebarContent /> */}
      {/* <SidebarCustomers /> */}
    </Box>
  );
};

export default Addcustomer;