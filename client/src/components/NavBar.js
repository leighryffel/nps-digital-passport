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
    <AppBar className="navigation">
      <CssBaseline />
      <Toolbar>
        <Typography className="logo" variant="h4">
          NPS Digital Passport
        </Typography>
        <div id="nav-links">
          <Link to="/">Home</Link>
          <Link to="/passport">View Passport</Link>
          <Link to="/profile">Your Profile</Link>
          <Button className="nav-button" onClick={handleLogoutClick}>
            Log Out
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
