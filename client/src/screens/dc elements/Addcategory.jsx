import React, { useState } from "react";
// import { useMediaQuery } from "@uidotdev/usehooks";
// import { phone, tablet, laptop, desktop } from "./icons";

import {
  TextField,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Box,
  useMediaQuery,
} from "@mui/material";

// import FlexBetween from "components/FlexBetween";
// import Header from "components/Header";
import Sidebardc from "components/sidebardc";
// import { ForkRight } from "@mui/icons-material";
// import { useMediaQuery } from 'react-responsive'

const AddCategory = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  // const [passwordchecked, setPasswordChecked] = useState(false);
  const [visiblechecked, setVisibleChecked] = useState(true);
  // const theme = useTheme();
  // const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleReset = (e) => {

    e.preventDefault();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  const [formData, setFormData] = useState({
    title: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"}>
     {/* <Box m="1.5rem 0.5rem"  ml="300px" marginTop="120px" margin=" 0 auto" max-width="1210px" min-width="570px" width="80%" sx={{display:'flex', flexDirection:{xs:"column", md:"row"}, justifyContent:"space-between" }} */}
    

      {/* <Sidebardc /> */}

      <form onSubmit={handleSubmitForm} style={{ background: "#483d8b" }} >
        <h3 style={{ padding: 10 }}>MOD CATEGORY DETAILS</h3> <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginLeft: "10px" }}>Title:</label>
          <TextField
            fullWidth
            name="title"
            autofocus
            label="Title"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            style={{ marginLeft: "185px", marginRight: "29px" }}

          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginLeft: "10px" }}>Visible: </label>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  id="visible"
                  type="checkbox"
                  // checked={formData.Visible}
                  // onChange={handleChange}
                  checked={visiblechecked}
                  onChange={(e) => setVisibleChecked(e.target.checked)}
                  style={{ marginLeft: "170px" }}
                />
              }
            />
          </FormControl>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ marginLeft: "10px" }}>Image:</label>
          <input
            type="file"
            name="data[category][file]"
            className="form-control"
            placeholder="Image"
            id="CategoryFile"
            required="required"
            margin="normal"
            style={{ marginLeft: "170px", display: "flex", alignItems: "center"}}
          />
        </div>
        <div style={{  marginLeft: "940px" }}>
          <ButtonGroup variant="contained" aria-label="outlined button group" >
             {/* <Button
              style={{
                background: "white",
                color: "black",
                marginBottom: "10px",


              }}
              onClick={handleReset}
              type="reset"
            >
              Reset{" "}
            </Button>

            <Button
              style={{
                background: "green",
                marginBottom: "10px",
                color: "primary",
              }}
              type="submit"
            >
              Submit
            </Button>  */}
          </ButtonGroup>
        </div>
      </form>
      </Box>


  );
};

export default AddCategory;