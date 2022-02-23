import { Grid, Paper, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import SelectSkills from "../components/SelectSkills";

import { addUser } from "../redux/ducks/users";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const paperStyle = {
  padding: 10,
  height: "70vh",
  width: "40vw",
  margin: "30px auto",
};

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [skills, setSkills] = useState();

  const navigate = useNavigate();

  const handleClick = () => {
    if (name && skills) {
      dispatch(
        addUser({
          name,
          date,
          skills,
        })
      );
      navigate("/");
    } else {
      alert("please fill the fields first");
    }
  };

  const users = useSelector((state) => state.users.users);

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        sx={{ mt: 5 }}
      >
        <Grid item>
          <Typography variant="h6">Add user</Typography>
        </Grid>
        <Grid sx={{ mt: 5, width: "50%" }} item>
          <TextField
            variant="outlined"
            label="Name"
            value={name}
            fullWidth
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Grid>
        <Grid sx={{ mt: 5, width: "50%" }} item>
          <Typography> date of birth</Typography>
        </Grid>
        <Grid sx={{ my: 5, width: "50%" }} item>
          <SelectSkills setSkills={setSkills} />
        </Grid>
        <Grid
          item
          sx={{
            width: "50%",
          }}
        >
          <Button
            onClick={handleClick}
            size="large"
            color="primary"
            variant="contained"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
