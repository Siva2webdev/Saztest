import React, { useState } from "react";
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
} from "@mui/material";
import { Input } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";

const Addadminstrator = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    visible: "",
    stream_for_webtv: "",
    backup_stream_1: "",
    backup_stream_2: "",
    backup_stream_3: "",
    backup_stream_4: "",
    backup_stream_5: "",
    backup_stream_6: "",
    select_channel_image: "",
    select_the_category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box m="1.5rem 2.5rem" ml="310px">
      <FlexBetween>
        <Header title="Adminstrator Registration Form" />

        <Box></Box>
      </FlexBetween>
      <h3>Login Details </h3>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="User Name"
          label="User Name"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        {/*
         <FormControl>
            <FormControlLabel
            label = " Visible"
              control={
                <Checkbox
                  id="agree"
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                />

              }
             />

          </FormControl> */}

        <TextField
          fullWidth
          name="PassWord"
          label="PassWord"
          variant="outlined"
          value={formData.PassWord}
          onChange={handleChange}
          margin="normal"
        />

        <h3>Personal Details </h3>

        <TextField
          fullWidth
          name="First Name"
          label="First Name"
          variant="outlined"
          value={formData.backup_stream_1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Last Name"
          label="Last Name"
          variant="outlined"
          value={formData.backup_stream_2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Email Address"
          label="Email Address"
          variant="outlined"
          value={formData.backup_stream_3}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Address1"
          label="Address1"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Address2"
          label="Address2"
          variant="outlined"
          value={formData.Address2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="City"
          label="City"
          variant="outlined"
          value={formData.City}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Postal"
          label="Postal/ZipCode"
          variant="outlined"
          value={formData.Zip}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="Country">Country</InputLabel>
          <Select
            label="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
          >
            <MenuItem value="select country">select country</MenuItem>
            <MenuItem value="AFGHANISTIAN">AFGHANISTAN</MenuItem>
            <MenuItem value="Albania"> Albania</MenuItem>
            <MenuItem value="Algeria">Algeria</MenuItem>
            <MenuItem value="Antigua and Barbuda">
              {" "}
              Antigua and Barbuda
            </MenuItem>
            <MenuItem value="Bangladesh"> Bangladesh</MenuItem>
            <MenuItem value="Belegium"> Belgium</MenuItem>
            <MenuItem value="Brizil"> Brazil</MenuItem>
            <MenuItem value="Bulgaria">Bulgaria</MenuItem>
            <MenuItem value="Colombia">Colombia</MenuItem>
            <MenuItem value="Croatia"> Croatia</MenuItem>
            <MenuItem value="Denmark">Denmark</MenuItem>
            <MenuItem value="Egypt">Egypt</MenuItem>
            <MenuItem value="Estonia">Estonia</MenuItem>
            <MenuItem value="Finland">Finland</MenuItem>
            <MenuItem value="FRANCE">FRANCE</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Japan"> Japan</MenuItem>

            <MenuItem value="Malaysia"> Malaysia</MenuItem>

            {/* Add more language options as needed */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="Phone(work)"
          label="Phone(work)"
          variant="outlined"
          value={formData.Address1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="Phone(Home)"
          label="Phone(Home)"
          variant="outlined"
          value={formData.Address2}
          onChange={handleChange}
          margin="normal"
        />

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "White", color: "black" }}>
            Hide Prompts
          </Button>
          <Button style={{ backgroundColor: "green" }}>Register</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default Addadminstrator;
