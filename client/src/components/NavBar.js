import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

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
    <Navbar>
      <Link to="/">
        <h1>NPS Digital Passport</h1>
      </Link>
      <Link to="/passport">
        <button className="nav-button">View Passport</button>
      </Link>
      <Link to="/profile">
        <button className="nav-button">Update Profile</button>
      </Link>
      <button className="nav-button" onClick={handleLogoutClick}>
        Log Out
      </button>
    </Navbar>
  );
}

export default NavBar;
