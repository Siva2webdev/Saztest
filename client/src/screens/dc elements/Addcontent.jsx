import React,{useState} from "react";
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
import InputFileUpload from "components/ChooseFile";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

// import SidebarMonetize from "components/SidebarMonetize";
import Sidebardc from "components/sidebardc";
// import Sidebardc from 'components/sidebardc';

const AddContent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const[checked,setChecked]=useState(true);
  const [formData, setFormData] = useState({
    BillingTypeName: "",
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
    <Box m={isSmallScreen ? "1rem" : "1.5rem 2.5rem"} ml={isSmallScreen ? "10px" : "300px"}>
    {/* <Box m="1.5rem 2.5rem" ml="300px"> */}
      <FlexBetween></FlexBetween>

      <form onSubmit={handleSubmit}>
        <h3>CATEGORY DETAILS</h3> <br />
        {/* <label> Billing Type Name :</label> */}
        <TextField
          fullWidth
          name="Title"
          label=" Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          name="select_the_category"
          label="Select_the_category"
          variant="outlined"
          value={formData.select_the_category}
          onChange={handleChange}
          margin="normal"
        />


<TextField
          fullWidth
          name="stream_url"
          label="Stream_url"
          variant="outlined"
          value={formData.stream_url}
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
          name="image"
          label="image"
          variant="outlined"
          value={formData.image}
          onChange={handleChange}
          margin="normal"
        />
        <InputFileUpload/>


        <ButtonGroup variant="contained" aria-label="outlined button group">
          <Button style={{ backgroundColor: "white", color: "black" }}>
            Reset
          </Button>

          <Button style={{ backgroundColor: "green" }}>Submit</Button>
        </ButtonGroup>
      </form>
      {/* <Sidebardc/> */}
    </Box>
  );
};

export default AddContent;
