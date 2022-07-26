import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
    <nav className="navigation">
      <Link to="/">
        <h1>NPS Digital Passport</h1>
      </Link>
      <Link to="/passport">
        <Button className="nav-button">View Passport</Button>
      </Link>
      <Link to="/profile">
        <Button className="nav-button">Your Profile</Button>
      </Link>
      <Button className="nav-button" onClick={handleLogoutClick}>
        Log Out
      </Button>
    </nav>
  );
}

export default NavBar;
