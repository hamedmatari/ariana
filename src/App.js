import { Container, Typography } from "@mui/material";
import React from "react";
import InfoTable from "./components/InfoTable";

import "./App.css";
function App() {
  return (
    <Container>
      <Typography sx={{ my: 3, flexGrow: 1 }} variant="h5">
        Users information
      </Typography>
      <InfoTable />
    </Container>
  );
}

export default App;
