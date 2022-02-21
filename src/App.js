import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import InfoTable from "./components/InfoTable";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.users.users);

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ my: 3, flexGrow: 1 }} variant="h5">
          {" "}
          Users information
        </Typography>
        <Box sx={{ mt: 3 }}>
          {/* <Button variant="contained">d</Button> */}

          <Link to="/AddUser">
            <IconButton aria-label="Example">
              <AddIcon />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <InfoTable />
    </Container>
  );
}

export default App;
