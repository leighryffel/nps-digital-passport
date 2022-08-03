import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import appLogo from "../images/appLogo.png";
import AppBar from "@mui/material/AppBar";

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
    <>
      <AppBar style={{ background: "#42234e", margin: "0em 0em 1em 0em" }}>
        <div className="toolbar">
          <div className="Logo">
            {" "}
            <img alt="logo" style={{ width: "2.5em" }} src={appLogo} />
          </div>
          <Typography id="nav-title" variant="h4">
            <strong>NPS Digital Passport</strong>
          </Typography>
          <div>
            <Link
              id="nav-link-1"
              style={{ color: "white", margin: "5em 5em", align: "right" }}
              to="/"
            >
              Browse Parks
            </Link>
            <Link
              id="nav-link-2"
              style={{ color: "white", margin: "5em 5em", align: "right" }}
              to="/passport"
            >
              View Passport
            </Link>
            <Link
              id="nav-link-3"
              style={{ color: "white", margin: "5em 5em", align: "right" }}
              to="/profile"
            >
              Your Profile
            </Link>
            <Button
              id="nav-link-4"
              style={{ color: "white", align: "right" }}
              onClick={handleLogoutClick}
            >
              Log Out
            </Button>
          </div>
        </div>
      </AppBar>
    </>
  );
}

export default NavBar;
