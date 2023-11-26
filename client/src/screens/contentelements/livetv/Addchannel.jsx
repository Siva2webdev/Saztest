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
  useMediaQuery,
} from "@mui/material";
// import { Input } from '@mui/material';
// import { CloudUpload } from '@mui/icons-material';
import SidebarContent from "components/SidebarContent";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from "components/ChooseFile";

const Addchannel = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
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
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "250px"}>
      <FlexBetween>
        <Header title="ADD CHANNEL" />

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

        <TextField
          fullWidth
          name="stream_for_webtv"
          label="Stream for Webtv"
          variant="outlined"
          value={formData.stream_for_webtv}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="backup_stream_1"
          label="Backup Stream 1"
          variant="outlined"
          value={formData.backup_stream_1}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_2"
          label="Backup Stream 2"
          variant="outlined"
          value={formData.backup_stream_2}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_3"
          label="Backup Stream 3"
          variant="outlined"
          value={formData.backup_stream_3}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_4"
          label="Backup Stream 4"
          variant="outlined"
          value={formData.backup_stream_4}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_5"
          label="Backup Stream 5"
          variant="outlined"
          value={formData.backup_stream_5}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="backup_stream_6"
          label="Backup Stream 6"
          variant="outlined"
          value={formData.backup_stream_6}
          onChange={handleChange}
          margin="normal"
        />

        <InputFileUpload />
        {/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select Channel Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      /> */}

        {/* <TextField
        fullWidth
        name="select_channel_image"
        label={<SelectImageSection/>}
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
          
      /> */}
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="select_the_category">
            Select the Category
          </InputLabel>
          <Select
            label="Select the Category"
            name="select_the_category"
            value={formData.select_the_category}
            onChange={handleChange}
          >
            <MenuItem value="english">OSN TEST</MenuItem>
            <MenuItem value="spanish">KURDISH</MenuItem>
            <MenuItem value="african">AFRICAN</MenuItem>
            <MenuItem value="arabic">ARABIC</MenuItem>
            <MenuItem value="sports">SPORTS</MenuItem>
            <MenuItem value="kids">KIDS</MenuItem>
            <MenuItem value="news">NEWS</MenuItem>
            <MenuItem value="religion">RELIGION</MenuItem>
            <MenuItem value="music">MUSIC</MenuItem>
            <MenuItem value="turkish">TURKISH</MenuItem>
            <MenuItem value="iraq">IRAQ</MenuItem>
            <MenuItem value="maghreb">MAGHREB</MenuItem>
            <MenuItem value="german">GERMAN</MenuItem>
            <MenuItem value="france">FRANCE</MenuItem>
            <MenuItem value="hd_channels">HD channels</MenuItem>
            <MenuItem value="farsi">Farsi</MenuItem>
            <MenuItem value="important">Important</MenuItem>
            <MenuItem value="problem">Problem</MenuItem>
            <MenuItem value="afghanistan">AFGHANISTAN</MenuItem>
            <MenuItem value="christian">Christian</MenuItem>

            {/* Add more language options as needed */}
          </Select>
        </FormControl>

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Reset</Button>
          <Button>Submit</Button>
        </ButtonGroup>
      </form>
      <SidebarContent />
    </Box>
  );
};

export default Addchannel;
