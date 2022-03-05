import {
  Grid,
  Paper,
  Button,
  Typography,
  Snackbar,
  TextField,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";

import { useState, forwardRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addUser, deleteUser, editUser } from "../redux/ducks/users";

import SelectSkills from "../components/SelectSkills";

import { useNavigate } from "react-router-dom";

import DateAdapter from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { differenceInYears } from "date-fns";

const paperStyle = {
  padding: 10,
  height: "70vh",
  width: 400,
  margin: "30px auto",
};
const gridItemStyle = {
  mt: 5,
  width: "90%",
};

export default function AddUser({ edit, user, setModalState }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [date, setDate] = useState(null);
  const [age, setAge] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [id, setID] = useState(null);

  const lastID = useSelector((state) => state.users.lastID);
  console.log(useSelector((state) => state.users.users));

  useEffect(() => {
    if (user) {
      setName(user.name);
      setSkills(user.skills);
      setDate(user.date);
      setAge(user.age);
      setID(user.id);
    }
  }, [user]);

  document.title = "Add user | Ariana";

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(
      deleteUser({
        id,
      })
    );
    setModalState(false);
  };
  const handleEdit = () => {
    if (name && skills.length >= 1 && date) {
      dispatch(
        editUser(
          {
            name,
            date,
            skills,
            age,
          },
          id
        )
      );
      setModalState(false);
    } else {
      setOpenSnack(true);
    }
  };
  const handleSubmit = () => {
    if (name && skills.length >= 1 && date) {
      dispatch(
        addUser({
          name,
          date,
          skills,
          age,
        })
      );
      navigate("/");
    } else {
      setOpenSnack(true);
    }
  };

  return (
    <Paper elevation={10} style={paperStyle}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <Grid align="center" item sx={{ display: "flex" }}>
          {edit === true ? (
            <>
              <Typography variant="h6">Edit user</Typography>
              <ModeEditIcon sx={{ ml: 1, mt: 0.9 }} fontSize="medium" />
            </>
          ) : (
            <>
              <Typography variant="h6">Add user</Typography>
              <PersonAddAltRoundedIcon sx={{ ml: 1 }} fontSize="large" />
            </>
          )}
        </Grid>
        <Grid sx={gridItemStyle} item>
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
        <Grid sx={{ mt: 5, width: "90%", display: "flex" }} item>
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              sx={{ backgroundColor: "blue" }}
              label="Birth date"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={(newDate) => {
                newDate = JSON.stringify(newDate).split("T")[0].substring(1);
                setAge(differenceInYears(new Date(), new Date(date)));
                setDate(newDate);
              }}
              renderInput={(params) => {
                return <TextField {...params} fullWidth />;
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid sx={{ my: 5, width: "90%" }} item>
          <SelectSkills selectedSkills={skills} setSelectedSkills={setSkills} />
        </Grid>
        {!edit && (
          <Grid item sx={{ width: "90%" }}>
            <Button
              onClick={handleSubmit}
              size="large"
              color="primary"
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
        )}
        {edit && (
          <>
            <Grid item sx={{ mt: 2, width: "90%" }}>
              <Button
                onClick={handleEdit}
                size="large"
                color="primary"
                variant="contained"
                fullWidth
              >
                Edit
              </Button>
            </Grid>
            <Grid item sx={{ mt: 2, width: "90%" }}>
              <Button
                onClick={handleDelete}
                size="large"
                color="error"
                variant="contained"
                fullWidth
              >
                Delete
              </Button>
            </Grid>
          </>
        )}
      </Grid>
      <SnackMessage setOpen={setOpenSnack} open={openSnack} />
    </Paper>
  );
}

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackMessage({ open, setOpen }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please fill the fields correctly
        </Alert>
      </Snackbar>
    </div>
  );
}
