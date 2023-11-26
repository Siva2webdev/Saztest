import React, { useState,useEffect } from "react";

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

import Sidebar from "screens/content";

import { ContentCopy } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import SidebarContent from "components/SidebarContent";

import InputFileUpload from "components/ChooseFile";

const AddRadio = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    title: "",

    visible: "",

    enter_stream_url: "",

    select_channel_image: "",

    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };
  const [audio_categorieslist, setaudio_categorieslist] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/audio_categories/find")
      .then((response) => response.json())
      .then((json) =>setaudio_categorieslist(json.data));
  }, []);
  console.log(audio_categorieslist);

  return (
    // <Box m="1.5rem 2.5rem" ml="250px">
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "250px"}>
      <FlexBetween>
        <Header title="ADD AUDIO STREAM" />

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
        {/*
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
        </FormControl> */}

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label="Visible"
          />
        </FormControl>

        {/* <TextField

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

      /> */}

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

        {/* <TextField

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

        

      />

      

      />

      

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

      /> */}

        <TextField
          fullWidth
          name="select_channel_image"
          label="Enter Stream URL"
          placeholder="stream for webtv-primary"
          variant="outlined"
          value={formData.select_channel_image}
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
{/* 
        <TextField
          fullWidth
          name="category"
          label="Select the category"
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
         <MenuItem >(Choose Category)</MenuItem>
            {audio_categorieslist.map((type) => (
              <MenuItem key={(type.id)} value={(type.id)}>
                {(type.title)}
                </MenuItem>
            ))}
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

export default AddRadio;
