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
  NativeSelect,
  useMediaQuery
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
const AddShowsNames = () => {
  const [passchecked, setPassChecked] = useState(false);
  const [visiblechecked, setVisibleChecked] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [age, setAge] = React.useState("");

  const handleChangeShows = (event) => {
    setAge(event.target.value);
  };

  const [formData, setFormData] = useState({
    title: "",

    // visible: '',

    // stream_for_webtv: '',

    // stream_for_ios_mobile: '',

    // stream_for_android: '',

    // android_setup_box: '',

    // custom_linux_box: '',

    // dreambox: '',

    // pc: '',

    // add_trailer: '',

    // description: '',

    // language: '',

    // duration: '',

    // year: '',

    // studio: '',

    // producer:'',

    // director: '',

    // actors: '',

    // ratings: '',

    // price: '',

    // select_channel_image: '',

    // category: ''
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
    <Box  m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "350px"}>
     {/* m="1.5rem 2.5rem" ml="350px"> */}
      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>SHOW SUB CATEGORY DETAILS</h3> <br />
        <label>ShowsCategory :</label>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChangeShows}
          >
            <MenuItem value={10}>(Choose Category)</MenuItem>
            <MenuItem value={20}>ers</MenuItem>
            <MenuItem value={30}>طبخ</MenuItem>
            <MenuItem value={40}>إسلاميات</MenuItem>
            <MenuItem value={50}>ترفيه</MenuItem>
            <MenuItem value={60}>صحة وجمال</MenuItem>
          </Select>
        </FormControl>
        <br />
        <label>Title :</label>
        <TextField
          fullWidth
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <label>Password Protected :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={passchecked}
                onChange={(e) => setPassChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <br />
        <label>Visible :</label>
        <br />
        <FormControl>
          <FormControlLabel
            control={
              <Checkbox
                id="agree"
                checked={visiblechecked}
                onChange={(e) => setVisibleChecked(e.target.checked)}
              />
            }
          />
        </FormControl>
        <div>
          <label>Image :</label>
          <br />
        </div>
        <br />
        <div className="col-md-9">
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            required="required"
          ></input>
        </div>
        <br />
        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button>Reset</Button>

          <Button>Submit</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default AddShowsNames;
