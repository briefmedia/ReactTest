import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const MultiPhone = ({ phoneNumbers, setPhoneNumbers }) => {
  const [newPhoneType, setNewPhoneType] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const updatePhoneNumber = (index) => (field) => (value) => {
    phoneNumbers[index][field] = value;

    setPhoneNumbers([...phoneNumbers]);
  };

  const handleAddNewNumber = () => {
    if (!newPhoneType) return;

    setPhoneNumbers([
      ...phoneNumbers,
      {
        type: newPhoneType,
        number: newPhoneNumber,
      },
    ]);

    resetNewPhoneNumber();
  };

  const resetNewPhoneNumber = () => {
    setNewPhoneType("");
    setNewPhoneNumber("");
  };

  return (
    <Box sx={{ my: 2 }}>
      <Typography sx={{ mb: 1 }} variant="body2">
        Phone Numbers
      </Typography>

      {phoneNumbers.length
        ? phoneNumbers.map((phoneNumber, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <FormControl sx={{ minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Type
                </InputLabel>
                <Select
                  sx={{ minWidth: 90 }}
                  value={phoneNumber.type}
                  onChange={(e) =>
                    updatePhoneNumber(index)("type")(e.target.value)
                  }
                  autoWidth
                  label="Type"
                >
                  <MenuItem value="Home">Home</MenuItem>
                  <MenuItem value="Cell">Cell</MenuItem>
                  <MenuItem value="Work">Work</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ ml: 2 }}
                label="Phone Number"
                value={phoneNumber.number}
                onChange={(e) =>
                  updatePhoneNumber(index)("number")(e.target.value)
                }
                placeholder="Phone Number"
              />
            </Box>
          ))
        : null}

      <Stack direction="row" alignItems={"center"}>
        <FormControl sx={{ minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
          <Select
            sx={{ minWidth: 90 }}
            value={newPhoneType}
            onChange={(e) => setNewPhoneType(e.target.value)}
            autoWidth
            label="Type"
          >
            <MenuItem value="Home">Home</MenuItem>
            <MenuItem value="Cell">Cell</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ ml: 2 }}
          label="Phone Number"
          value={newPhoneNumber}
          onChange={(e) => setNewPhoneNumber(e.target.value)}
          onBlur={handleAddNewNumber}
          placeholder="Phone Number"
        />
        <Button sx={{ ml: 1 }} onClick={handleAddNewNumber}>
          Add New
        </Button>
      </Stack>
    </Box>
  );
};

export default MultiPhone;
