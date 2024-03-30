import { useState } from 'react';
import React from "react";
import { Button, FormControl, InputLabel, Input, Typography } from '@mui/material';

export function MaterialUIForm(props) {
  const [formData, setFormData] = useState({
    // initialize form data state
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here, e.g., send data to a server
    console.log('Form submitted with data:', formData);
  };
  return (
    <div>
      <Typography variant="h5" component="h3">
          {props.formName}
        </Typography>
      <Typography component="p">{props.formDescription}</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className='inputPadding'>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl className='inputPadding'>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
