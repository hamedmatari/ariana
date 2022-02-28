import React, { useState } from "react";
import {
  MenuItem,
  Menu,
  Switch,
  FormControlLabel,
  Button,
  Box,
  TextField,
} from "@mui/material";

export default function SelectSkills({ selectedSkills, setSelectedSkills }) {
  const [skills, setSkills] = useState([
    {
      name: "React",
      checked: false,
    },
    {
      name: "Vue",
      checked: false,
    },
    {
      name: "HTML",
      checked: false,
    },
    {
      name: "CSS",
      checked: false,
    },
    {
      name: "MaterialUI",
      checked: false,
    },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const addBtn = () => {
    setAnchorEl(null);
    setSelectedSkills(
      skills.filter((item) => item.checked).map((item) => item.name)
    );
  };

  const handleSwitch = (e) => {
    setSkills((prvState) =>
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
        value={selectedSkills}
        InputProps={{
          readOnly: true,
        }}
      />
      <Menu
        id="basic-menu"
        sx={{ mt: 1 }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {skills.map((item) => (
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
