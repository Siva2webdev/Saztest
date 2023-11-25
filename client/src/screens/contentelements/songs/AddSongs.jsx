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

import Sidebar from "screens/content";

import { ContentCopy, Label } from "@mui/icons-material";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import SidebarContent from "components/SidebarContent";

import InputFileUpload from "components/ChooseFile";

const AddSong = () => {
  const [checked, setChecked] = useState(false);
  const[checked1, setChecked1] = useState(false);

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

  const [AddSongs, setaddSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/api/song_categories/find")
      .then((response) => response.json())
      .then((json) => setaddSongs(json.data));
  }, []);
  console.log(AddSongs);


  return (
    <Box m="1.5rem 2.5rem" ml="250px">
      <FlexBetween>
        <Header title="ADD SONG STREAM" />

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
        //   fullWidth
          name="visible"
          label="Visible"
        //   variant="outlined"
        //   value={formData.visible}
        //   onChange={handleChange}
          margin="normal"
        /> */}



        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            }
            label = "Visible"
          />
        </FormControl>




        <TextField
          fullWidth
          name="IsYoutubeUrl"
          label="Is Youtube Url?"
          variant="outlined"
          value={formData.IsYoutubeUrl}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
              />
            }
          />
        </FormControl>
        {/* </FormControlLabel> */}

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

      /> */}

        {/* <TextField

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

        {/* <TextField
          fullWidth
          name="category"
          label="Select the category"
          variant="outlined"
          value={formData.category}
          onChange={handleChange}
          margin="normal"
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
             {/* <MenuItem ></MenuItem> */}
             {AddSongs.map((type) => (
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

export default AddSong;
