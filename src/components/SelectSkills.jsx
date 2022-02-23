import React, { useEffect, useState } from "react";
import {
  MenuItem,
  Menu,
  Switch,
  FormControlLabel,
  Button,
  Box,
  TextField,
} from "@mui/material";

let inputValue = [];

export default function SelectSkills({ setSkills }) {
  const [input, setInput] = useState([
    {
      name: "react",
      checked: false,
    },
    {
      name: "vue",
      checked: false,
    },
    {
      name: "html",
      checked: false,
    },
    {
      name: "css",
      checked: false,
    },
    {
      name: "materialUI",
      checked: false,
    },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    inputValue = [];
  }, [inputValue]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addBtn = () => {
    setAnchorEl(null);
    inputValue = input.filter((item) => item.checked).map((item) => item.name);
    setSkills(inputValue);
  };

  const handleSwitch = (e) => {
    setInput((prvState) =>
      prvState.map((item) =>
        item.name === e.target.name
          ? { name: item.name, checked: !item.checked }
          : item
      )
    );
  };

  return (
    <Box>
      <TextField
        fullWidth
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        id="outlined-read-only-input"
        label="User skills"
        value={inputValue}
        InputProps={{
          readOnly: true,
        }}
      />
      <Menu
        id="basic-menu"
        sx={{ mx: { md: 2, xs: 0 }, mt: { md: "15px", xs: "60px" } }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {input.map((item, ind) => (
          <MenuItem sx={{ px: 0 }} key={item.name}>
            <FormControlLabel
              sx={{
                width: "100%",
                height: "100%",
                pl: 3,
                pr: 8,
              }}
              control={
                <Switch
                  checked={item.checked}
                  onChange={handleSwitch}
                  name={item.name}
                />
              }
              label={item.name}
            />
          </MenuItem>
        ))}
        <Button onClick={addBtn} fullWidth>
          add
        </Button>
      </Menu>
    </Box>
  );
}
