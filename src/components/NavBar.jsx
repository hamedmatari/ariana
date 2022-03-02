import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const NavBar = () => {
  // const currentTab = routeMatch?.pattern?.path;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            ARIANA LAB
          </Typography>
          <HorizontalRuleIcon style={{ transform: "rotate(90deg)" }} />

          <Link style={{ textDecoration: "none" }} to="/chart">
            <Button sx={{ color: "white", display: "block", mx: 2 }}>
              Charts
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/adduser">
            <Button sx={{ color: "white", display: "block", mx: 2 }}>
              Add
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button sx={{ color: "white", display: "block", mx: 2 }}>
              Tabel
            </Button>
          </Link>

          {/* <Tabs>
            <Tab label="Charts" to="/chart" component={Link} />
            <Tab label="ADD" to="/adduser" component={Link} />
            <Tab label="Table" component={Link} />
          </Tabs> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
