import React, { useState } from "react";
import { Typography, Stack, TextField, Button, Box } from "@mui/material";
import axios from "axios";

export default function CreditCard() {
  const [formData, setFormData] = useState({
    id: 2,
    SSN: "",
    income: "",
    address1: "",
    address2: "",
    zip_code: "",
    city: "",
    // Username: 10,
  });

  function handleOnChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  function addData(event) {
    event.preventDefault();
    axios.post("http://127.0.0.1:8000/api/user/", formData).then((res) => {
      alert("Thanks for applying!");
    });
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" align="center" sx={{ m: 5 }}>
        Apply Your Credit Card
      </Typography>
      <form onSubmit={addData}>
        <Stack
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          spacing={2}
        >
          <TextField
            label="SSN"
            value={formData.SSN}
            name="SSN"
            onChange={handleOnChange}
          />
          <TextField
            label="Income"
            value={formData.income}
            name="income"
            onChange={handleOnChange}
          />
          <TextField
            label="Address line 1"
            value={formData.address1}
            name="address1"
            onChange={handleOnChange}
          />
          <TextField
            label="Address line 2"
            value={formData.address2}
            name="address2"
            onChange={handleOnChange}
          />
          <TextField
            label="ZIP"
            value={formData.zip_code}
            name="zip_code"
            onChange={handleOnChange}
          />
          <TextField
            label="City"
            value={formData.city}
            name="city"
            onChange={handleOnChange}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ width: "210px" }}
          >
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
