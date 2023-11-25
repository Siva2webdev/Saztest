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
// import SidebarDC from 'components/SidebarDC';

const AddBanner = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    visible: "",
    image: "",
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
    <Box m="1.5rem 2.5rem" ml="300px">
      <FlexBetween>
        <Header title="DASHBOARDBANNER DETAILS" />

        <Box></Box>
      </FlexBetween>
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

        <FormControl>
          <FormControlLabel
            label=" Visible"
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
          />
        </FormControl>

        <InputFileUpload />
        <TextField
          fullWidth
          name=" choose file"
          label="Choose file"
          variant="outlined"
          value={formData.select_channel_image}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal"></FormControl>

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "white", color: "black" }}>
            Reset
          </Button>

          <Button style={{ backgroundColor: "green" }}>Submit</Button>
        </ButtonGroup>
      </form>
      {/* <SidebarDC /> */}
    </Box>
  );
};

export default AddBanner;
