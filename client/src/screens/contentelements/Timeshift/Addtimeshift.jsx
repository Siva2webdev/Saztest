import React, { useState } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box , useMediaQuery} from '@mui/material';
import { Input } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import SidebarContent from 'components/SidebarContent';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';

// import SelectImageSection from 'components/ChooseFile';


const AddTimeShift = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    visible: '',
    // stream_for_webtv: '',
    stream_URL: '',
    server_IP: '',
    comments: '',
    original_stream: '',
    Fall_back_stream1: '',
    Fall_back_stream2: '',
    comments: '',
    select_channel_image: ''


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

<SidebarContent/>

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
      {/* <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      /> */}
         <FormControl>
            <FormControlLabel
            label="Visible"
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
        name="stream_URL"
        label="Stream_URL"
        variant="outlined"
        value={formData.stream_for_webtv}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        name="server_IP"
        label="Server_IP"
        variant="outlined"
        value={formData.backup_stream_1}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="comments"
        label="Comments"
        variant="outlined"
        value={formData.backup_stream_2}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="original_stream"
        label="Original Stream"
        variant="outlined"
        value={formData.backup_stream_3}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="fallback_stream_1"
        label="Fall Back Stream 1"
        variant="outlined"
        value={formData.backup_stream_4}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="fallback_stream_2"
        label="Fallback Stream 2"
        variant="outlined"
        value={formData.backup_stream_5}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="comments"
        label="Comments"
        variant="outlined"
        value={formData.backup_stream_6}
        onChange={handleChange}
        margin="normal"
      />
         <TextField
        fullWidth
        name="select_channel_image"
        label="Select Channel Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      />
      {/* <TextField
        fullWidth
        name="select_the_category"
        label="Select the Category"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
          
      /> */}

{/* <TextField
        fullWidth
        name="select_channel_image"
        placeholder={<SelectImageSection/>}
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={3}
          
      /> */}
      <InputFileUpload/>
        <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="select_the_category">Select the Category</InputLabel>
        <Select
          label="Select the category"
          name="select_the_category"
          value={formData.select_the_category}
          onChange={handleChange}
        >
          <MenuItem value="Choose Category">CHOOSE CATEGORY</MenuItem>
          <MenuItem value="TS-ARABIC">TS-ARABIC</MenuItem>
          <MenuItem value="FARSI">FARSI</MenuItem>
          <MenuItem value="خرزة زرقا">خرزة زرقا</MenuItem>
        

          {/* Add more language options as needed */}
        </Select>
      </FormControl>
      
<SidebarContent/>


      <ButtonGroup variant="contained" aria-label="outlined button group">
  <Button>Reset</Button>
  <Button>Submit</Button>
</ButtonGroup>
    </form>
    <SidebarContent />
    </Box>
  );
};

export default AddTimeShift;
