import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Radio,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
  RadioGroup,
  FormLabel
} from "@mui/material";
import Header from "components/Header";
import FlexBetween from "components/FlexBetween";
const Addreseller = () => {
  const [value, setValue] = useState();
  // const [checked, setChecked] = useState(false);
  // const [checked1, setChecked1] = useState(false);
  // const [checked2, setChecked2] = useState(false);
  // const [checked3, setChecked3] = useState(false);
  const [formData, setFormData] = useState({
    monthly: "",
    quarterly: "",
    halfyearly: "",
    yearly: "",
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
        <Header title="Reseller Registration Form" />

        <Box></Box>
      </FlexBetween>
      <h4>LOGIN DETAILS</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Reseller Module</InputLabel>
          <Select label="Reseller Module" required>
            <MenuItem value="choose">(Choose Module)</MenuItem>
            <MenuItem value="humax">Humax</MenuItem>
            <MenuItem value="france">France</MenuItem>
            <MenuItem value="Shahid">Shahid</MenuItem>
            <MenuItem value="Shahidm5">Shahid M5</MenuItem>
            <MenuItem value="Shahidnew">Shahid New</MenuItem>
            <MenuItem value="zoomtak">Zoomtak</MenuItem>
            <MenuItem value="masaplus">MasaPlus</MenuItem>
            <MenuItem value="masanew">Masa New</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="End of Membership Date"
          type="date"
          variant="outlined"
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Customer Limit"
          // type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <h4>PERSONAL DETAILS</h4>
        <TextField
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Address1"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Address2"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField 
          label="City" 
          variant="outlined" 
          margin="normal" 
          fullWidth
        />

        <TextField
          label="Postal/Zip Code"
          variant="outlined"
          margin="normal"
          fullWidth
        />
                <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Country</InputLabel>
          <Select label="country">
            <MenuItem value="choose">(Choose Module)</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Phone(Work)"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Phone(Home)"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <h4>PAYMENT SETTINGS</h4>
        <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="monthly" control={<Radio />} label="Monthly 10 Fixed" />
    <FormControlLabel value="quarterly" control={<Radio />} label="Quarterly 30 Fixed" />
    <FormControlLabel value="halfyearly" control={<Radio />} label="Half Yearly 50 Fixed" />
    <FormControlLabel value="yearly" control={<Radio />} label="Yearly 50 Fixed" />
  </RadioGroup>
</FormControl>
        <br></br><br></br>
        <ButtonGroup style={{float: 'right'}} variant="contained" aria-label="outlined button group">
          <Button>Hide Prompts</Button>
          <Button color="success">Register</Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default Addreseller;
