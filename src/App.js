import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InfoTable from "./components/InfoTable";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

function App() {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ my: 3, flexGrow: 1 }} variant="h5">
          {" "}
          Users information
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Link to="/AddUser">
            <IconButton aria-label="Example">
              <AddIcon />
            </IconButton>
          </Link>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/chart">
            <Button variant="contained">charts</Button>
          </Link>
        </Box>
      </Box>
      <InfoTable />
    </Container>
  );
}

export default App;
