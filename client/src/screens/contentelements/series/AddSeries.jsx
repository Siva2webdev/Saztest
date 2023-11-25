import React, { useState } from 'react';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box } from '@mui/material';
import SidebarContent from 'components/SidebarContent';
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import InputFileUpload from 'components/ChooseFile';

const AddSeries = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    visible: '',
    enter_stream_url: '',
    add_trailer: '',
    description: '',
    language: '',
    duration: '',
    year: '',
    studio: '',
    producer:'',
    director: '',
    actors: '',
    ratings: '',
    price: '',
    select_channel_image: '',
    select_the_category: ''

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

    
    <Box m="1.5rem 2.5rem" ml="250px">
    <FlexBetween>
    <Header title="ADD SERIES" />
    
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
      <TextField
        fullWidth
        name="visible"
        label="Visible"
        variant="outlined"
        value={formData.visible}
        onChange={handleChange}
        margin="normal"
      />
         <FormControl>
            <FormControlLabel
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
        name="enter_stream_url"
        label="Enter Stream Url"
        variant="outlined"
        value={formData.enter_stream_url}
        onChange={handleChange}
        margin="normal"
      />
      
      <TextField
        fullWidth
        name="add_trailer"
        label="Add Trailer"
        variant="outlined"
        value={formData.add_trailer}
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
        multiline
        rows={4}
      />
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel htmlFor="language">Language</InputLabel>
        <Select
          label="Language"
          name="language"
          value={formData.language}
          onChange={handleChange}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
          <MenuItem value="french">French</MenuItem>
          {/* Add more language options as needed */}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        name="duration"
        label="Duration"
        variant="outlined"
        value={formData.duration}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="year"
        label="Year"
        variant="outlined"
        value={formData.year}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="studio"
        label="Studio"
        variant="outlined"
        value={formData.studio}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="producer"
        label="Producer"
        variant="outlined"
        value={formData.producer}
        onChange={handleChange}
        margin="normal"
      />
        <TextField
        fullWidth
        name="director"
        label="Director"
        variant="outlined"
        value={formData.director}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="actors"
        label="Actors"
        variant="outlined"
        value={formData.actors}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        name="ratings"
        label="Ratings"
        variant="outlined"
        value={formData.ratings}
        onChange={handleChange}
        margin="normal"
      />
         <TextField
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
        value={formData.price}
        onChange={handleChange}
        margin="normal"
      />

      <InputFileUpload/>
         {/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select_Channel_Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
      /> */}
         <TextField
        fullWidth
        name="select_the_category"
        label="Select the Category"
        variant="outlined"
        value={formData.select_the_category}
        onChange={handleChange}
        margin="normal"
      />
      
      <ButtonGroup variant="contained" aria-label="outlined button group">
  <Button>Reset</Button>
  <Button>Submit</Button>
</ButtonGroup>
    </form>
    <SidebarContent />
    </Box>
  );
};

export default AddSeries;