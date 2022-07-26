import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setUser(null);
      }
    });
  }
  return (
    <AppBar style={{ background: "#42234e", margin: "0em 0em 1em 0em" }}>
      <CssBaseline />
      <Toolbar>
        <Typography className="logo" variant="h4">
          NPS Digital Passport
        </Typography>
        <div>
          <Link
            style={{ color: "white", margin: "5em 5em" }}
            id="nav-link"
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ color: "white", margin: "5em 5em" }}
            id="nav-link"
            to="/passport"
          >
            View Passport
          </Link>
          <Link
            style={{ color: "white", margin: "5em 5em" }}
            id="nav-link"
            to="/profile"
          >
            Your Profile
          </Link>
          {/* <Box flexGrow={0} /> */}
          <Button
            style={{ color: "white" }}
            className="nav-button"
            onClick={handleLogoutClick}
          >
            Log Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
