import React, { useState, useEffect } from "react";
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
// import Sidebar from 'screens/content';
// import { ContentCopy } from '@mui/icons-material';
import FlexBetween from "components/FlexBetween";

import Header from "components/Header";
import SidebarContent from "components/SidebarContent";
import InputFileUpload from "components/ChooseFile";

const Addmovie = () => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    visible: "",
    stream_for_webtv: "",
    stream_for_ios_mobile: "",
    stream_for_android: "",
    android_setup_box: "",
    custom_linux_box: "",
    dreambox: "",
    pc: "",
    add_trailer: "",
    description: "",
    language: "",
    duration: "",
    year: "",
    studio: "",
    producer: "",
    director: "",
    actors: "",
    ratings: "",
    price: "",
    select_channel_image: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/api/videos/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      // You can handle success here, e.g., redirect to a success page
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle and display the error
    });
    console.log(formData);
  };


  const [categories, setCategories] = useState([]);

  // Make an API request to fetch payment types data from your server
  useEffect(() => {
    fetch("http://localhost:5001/api/categories/find")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      });
  }, []);

  return (
    <Box m="1.5rem 2.5rem" ml="250px">
      <FlexBetween>
        <Header title="ADD MOVIE" />

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
          name="stream_for_webtv"
          label="Stream for Webtv"
          variant="outlined"
          value={formData.stream_for_webtv}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="stream_for_ios_mobile"
          label="Stream for IOS mobile"
          variant="outlined"
          value={formData.stream_for_ios_mobile}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="stream_for_android"
          label="Stream for Android"
          variant="outlined"
          value={formData.stream_for_android}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="android_setup_box"
          label="Android Setup box"
          variant="outlined"
          value={formData.android_setup_box}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="custom_linux_box"
          label="Custom linux box"
          variant="outlined"
          value={formData.custom_linux_box}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="dreambox"
          label="Dreambox"
          variant="outlined"
          value={formData.dreambox}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="pc"
          label="PC"
          variant="outlined"
          value={formData.pc}
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
        <TextField
          fullWidth
          name="language"
          label="Language"
          variant="outlined"
          value={formData.language}
          onChange={handleChange}
          margin="normal"
        />
        {/* <FormControl fullWidth variant="outlined" margin="normal">
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
        {/* </Select> */}
        {/* </FormControl> */}

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

        <InputFileUpload />
        {/* <TextField
        fullWidth
        name="select_channel_image"
        label="Select_Channel_Image"
        variant="outlined"
        value={formData.select_channel_image}
        onChange={handleChange}
        margin="normal"
      /> */}
        {/* <TextField
        fullWidth
        name="category"
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={handleChange}
        margin="normal"
      /> */}
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <MenuItem value="">(Choose Category Type)</MenuItem>
            {categories.map((type) => (
              <MenuItem key={type.id} value={type.id}>
                {type.title}
              </MenuItem>
               ))}

            {/* Add more language options as needed */}
          </Select>
        </FormControl>

        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Reset</Button>
          <Button type="submit">Submit</Button>
        </ButtonGroup>
      </form>
      <SidebarContent />
    </Box>
  );
};

export default Addmovie;