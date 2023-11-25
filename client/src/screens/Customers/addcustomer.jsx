import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SidebarCustomers from "components/SidebarCustomers";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";

const Addcustomer = () => {
  const [formData, setFormData] = useState({
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
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePlaylistChange = (index, field, value) => {
    const updatedPlaylists = [...formData.playlists];
    updatedPlaylists[index][field] = value;
    setFormData((prevData) => ({ ...prevData, playlists: updatedPlaylists }));
  };

  const handleAddPlaylist = () => {
    setFormData((prevData) => ({
      ...prevData,
      playlists: [...prevData.playlists, { name: "", url: "" }],
    }));
  };

  const handleDeletePlaylist = (index) => {
    const updatedPlaylists = [...formData.playlists];
    updatedPlaylists.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, playlists: updatedPlaylists }));
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

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/packages/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPackages(res.data);
      });
  }, []);



  return (
    <Box m="1.5rem 2.5rem" ml="250px">
      <FlexBetween>
        <Header title="Sazpin New Customer Registration" />
        <Box></Box>
      </FlexBetween>

      <form onSubmit={handleSubmit}>
        {/* ... Your existing code ... */}
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
            <MenuItem value="17">(Choose package Type)</MenuItem>

            {packages.map((type) => (
            <MenuItem key={type.id} value={type.id}>
            {type.name}
            </MenuItem>
            ))}

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
          {formData.playlists.map((playlist, index) => (
            <div key={index} style={{ alignItems: "center" }}>
              <TextField
                fullWidth
                name={`name${index}`}
                label="Playlist Name"
                variant="outlined"
                value={playlist.name}
                onChange={(e) =>
                  handlePlaylistChange(index, "name", e.target.value)
                }
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleDeletePlaylist(index)}
                        color="secondary"
                      >
                        <Delete />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name={`url${index}`}
                label="URL"
                variant="outlined"
                value={playlist.url}
                onChange={(e) =>
                  handlePlaylistChange(index, "url", e.target.value)
                }
                margin="normal"
              />
            </div>
          ))}
          <IconButton onClick={handleAddPlaylist} color="primary">
            <Add />
          </IconButton>
        </div>

        {/* ... Your existing code ... */}
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
      g
      <SidebarCustomers />
    </Box>
  );
};

export default Addcustomer;
