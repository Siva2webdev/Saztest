import React, { useState } from 'react';

import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox ,Box } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';
const AddBillingType = () => {

 

  const [formData, setFormData] = useState({

    BillingTypeName : '',

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

    </FlexBetween>
    
    <form onSubmit={handleSubmit} >

        <h3>BILLING TYPE ADD</h3> <br/>
        <label> Billing Type Name :</label>

      <TextField

        fullWidth

        name="title"

        label=" Billing Type Name"

        variant="outlined"

        value={formData.title}

        onChange={handleChange}

        margin="normal"

      />

      <ButtonGroup variant="contained"  aria-label="outlined button group">

  <Button style={{ backgroundColor: "white", color:'black' }} >Reset</Button>

  <Button style={{ backgroundColor: "green"}}>Submit</Button>

</ButtonGroup>

    </form>

    </Box>

  );

};

export default AddBillingType;