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
} from "@mui/material";

import { Input } from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

import SidebarContent from "components/SidebarContent";

import FlexBetween from "components/FlexBetween";

import Header from "components/Header";

import InputFileUpload from "components/ChooseFile";

import SidebarDC from "components/sidebardc";

const Seriesnamesortablelist = () => {
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
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
    <Box m="1.5rem 2.5rem" ml="350px">
      <FlexBetween>
        <Header title="SERIES SORTABLE LIST" />

        <Box></Box>
      </FlexBetween>

      <Box
        mt="20px"
        ml="0px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
      ></Box>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="title"
          label="2الوسم"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
          margin="normal"
          disabled
        />

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="title"
            label="طلعت روحي"
            variant="outlined"
            value={formData.title}
            onChange={handleChange}
            margin="normal"
            disabled
          />

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="title"
              label="طلعت روحي"
              variant="outlined"
              value={formData.title}
              onChange={handleChange}
              margin="normal"
              disabled
            />

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="title"
                label="طلعت روحي"
                variant="outlined"
                value={formData.title}
                onChange={handleChange}
                margin="normal"
                disabled
              />

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  name="title"
                  label="حوبتي"
                  variant="outlined"
                  value={formData.title}
                  onChange={handleChange}
                  margin="normal"
                  disabled
                />

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    name="title"
                    label="بطلوع الروح"
                    variant="outlined"
                    value={formData.title}
                    onChange={handleChange}
                    margin="normal"
                    disabled
                  />

                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      name="title"
                      label="النقطة العامية"
                      variant="outlined"
                      value={formData.title}
                      onChange={handleChange}
                      margin="normal"
                      disabled
                    />

                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        name="title"
                        label="3العاصوف"
                        variant="outlined"
                        value={formData.title}
                        onChange={handleChange}
                        margin="normal"
                        disabled
                      />

                      <form onSubmit={handleSubmit}>
                        <TextField
                          fullWidth
                          name="title"
                          label="بيت الشدة"
                          variant="outlined"
                          value={formData.title}
                          onChange={handleChange}
                          margin="normal"
                          disabled
                        />

                        <form onSubmit={handleSubmit}>
                          <TextField
                            fullWidth
                            name="title"
                            label="الكبير اوي"
                            variant="outlined"
                            value={formData.title}
                            onChange={handleChange}
                            margin="normal"
                            disabled
                          />

                          {/* <ButtonGroup variant="contained" aria-label="outlined button group">



  <Button>Reset</Button>



  <Button>Submit</Button>



</ButtonGroup> */}
                        </form>
                      </form>
                    </form>
                  </form>
                </form>
              </form>
            </form>
          </form>
        </form>
      </form>

      {/* <SidebarDC /> */}
    </Box>
  );
};

export default Seriesnamesortablelist;
