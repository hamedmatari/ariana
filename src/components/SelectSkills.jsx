import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skills = ["React", "Vue", "Redux", "Nestjs", "MaterialUI", "HTML"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectSkills({ setSkills }) {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setSkills(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {skills.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
// import React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Menu, Switch, FormControlLabel, Button } from "@mui/material";
// import MenuItem from "@mui/material/MenuItem";
// import { useState } from "react";

// const skills = ["React", "Vue", "Redux", "Nestjs", "Material UI", "HTML"];
// let inputValue = [];

// export default function SelectSkills() {
//   const [input, setInput] = useState([
//     {
//       name: "react",
//       checked: false,
//     },
//     {
//       name: "vue",
//       checked: true,
//     },
//     {
//       name: "html",
//       checked: false,
//     },
//     {
//       name: "css",
//       checked: false,
//     },
//     {
//       name: "materialUI",
//       checked: false,
//     },
//   ]);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const submit = () => {
//     setAnchorEl(null);
//     input.forEach((item) => {
//       if (item.checked) {
//         inputValue.push(item.name);
//       } else {
//         inputValue = inputValue.filter((item) => item !== item.name);
//       }
//     });
//     console.log();
//   };

//   const handleSwitch = (e) => {
//     setInput((prvState) =>
//       prvState.map((item) =>
//         item.name === e.target.name
//           ? { name: item.name, checked: !item.checked }
//           : item
//       )
//     );
//   };
//   return (
//     <Box>
//       <TextField
//         fullWidth
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}
//         id="outlined-read-only-input"
//         label="User skills"
//         value={inputValue}
//         InputProps={{
//           readOnly: true,
//         }}
//       />
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           "aria-labelledby": "basic-button",
//         }}
//       >
//         {input.map((item) => (
//           <MenuItem key={item.name}>
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={item.checked}
//                   onChange={handleSwitch}
//                   name={item.name}
//                 />
//               }
//               label={item.name}
//             />
//           </MenuItem>
//         ))}
//         <Button onClick={submit} sx={{ ml: 7 }}>
//           add
//         </Button>
//       </Menu>
//     </Box>
//   );
// }
