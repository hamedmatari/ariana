import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Container,
} from "@mui/material";

import { Link, matchPath, useLocation } from "react-router-dom";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

const NavBar = () => {
  const routeMatch = useRouteMatch(["/", "/chart", "/adduser"]);
  const currentTab = routeMatch?.pattern?.path;

  function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return null;
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              ARIANA LABS
              <HorizontalRuleIcon
                style={{ marginTop: "4px", transform: "rotate(90deg)" }}
              />
            </Typography>

            <Tabs
              // indicatorColor="secondary"
              textColor="inherit"
              value={currentTab}
            >
              <Tab value="/chart" to="/chart" component={Link} label="Charts" />
              <Tab
                value="/adduser"
                to="/adduser"
                component={Link}
                label="Add user"
              />
              <Tab value="/" to="/" component={Link} label="Table" />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
