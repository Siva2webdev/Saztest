
import React, { useState , useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import Joi from 'joi';
import { TextField, Button, ButtonGroup, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox ,Box ,Snackbar,Alert} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Header from 'components/Header';
const AddBillingType = () => {
 
 
  const { _id } = useParams();
  const [formData, setFormData] = useState({
    id : "",
    name : "",
 
  });
 
  const [successMessage, setSuccessMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // const [validationError, setValidationError] = useState(null);
  // const validationSchema = Joi.object({
  //   // id: Joi.string().regex(/^[0-9]+$/, "id").required(),
  //   id: Joi.string().empty(''),
  //   // name: Joi.string().empty('').min(3).max(30).default('default value').label('Billing Type Name'),
  //   name: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(30).required().label('Billing Type Name'),
  //   // name: Joi.string().empty('').label('Billing Type Name'),
  // });
 
  const handleReset = () =>
  {
    setFormData({
      id: "",
      name: "",
    });
  };
 
 
  const handleChange = (e) => {
 
    const { name, value } = e.target;
 
    setFormData({ ...formData, [name]: value });
 
  };
 
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
 
  const handleSubmit = (e) => {
 
    e.preventDefault();
    // const validationResult = validationSchema.validate(formData, {
    //   abortEarly: false,
    // });
 
    // if (validationResult.error) {
    //   setValidationError(validationResult.error.details);
    //   return;
    // }
 
    // setValidationError(null);
 
    // console.log(formData);
    // axios
    //   .post('http://localhost:5001/api/adons_billing_types/post', formData)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
    if (_id) {
      // If _id is defined, it's an edit operation
      const apiUrl = `http://localhost:5001/api/adons_billing_types/patch/${_id}`; // Edit
      axios
        .patch(apiUrl, formData) // Use axios.patch for the PATCH request
        .then((response) => {
          setSuccessMessage("Billing Type updated successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      // If _id is not defined, it's an add operation
      const apiUrl = "http://localhost:5001/api/adons_billing_types/post"; // Add
      axios
        .post(apiUrl, formData) // Use axios.post for the POST request
        .then((response) => {
          setSuccessMessage("Billing Type added successfully!");
          setSnackbarOpen(true);
          handleReset();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
 
  useEffect(() => {
    if (_id) {
      // If a product ID is available in the URL, fetch product data and pre-fill the form
      //if you want to fetch the data with name if Name is Unique then use name also..
      axios
        .get(`http://localhost:5001/api/adons_billing_types/getadonsbillingtypes/${_id}`)
        .then((response) => {
          const adonsbillingtypeData = response.data;
          setFormData({
            name: adonsbillingtypeData.name,
          });
        })
        .catch((error) => {
          console.error('Error fetching product data:', error);
        });
    }
  }, [_id]);
 
 
 
  return (
 
    <Box m="1.5rem 2.5rem" ml="250px">
 
      <FlexBetween>
 
    </FlexBetween>
   
    <form onSubmit={handleSubmit} >
 
        <h3>BILLING TYPE ADD</h3> <br/>
        <label> Billing Type Name :</label>
 
      <TextField
 
        fullWidth
 
        name="name"
 
        label=" Billing Type Name"
 
        variant="outlined"
 
        value={formData.name}
 
        onChange={handleChange}
 
        margin="normal"
 
      />
      {/* {validationError && (
          <div style={{ color: 'red' }}>
            {validationError.map((error) => (
              <div>{error.message}</div>
            ))}
            </div>
      )} */}
 
      <ButtonGroup variant="contained"  aria-label="outlined button group">
 
  <Button type="reset" onClick={handleReset} style={{ backgroundColor: "white", color:'black' }} >Reset</Button>
 
  <Button type="submit" style={{ backgroundColor: "green"}}>Submit</Button>
 
</ButtonGroup>
 
    </form>
    <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
 
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
 
  );
 
};
 
export default AddBillingType;