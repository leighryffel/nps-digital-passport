import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <Link to="/">
        <h1>NPS Digital Passport</h1>
      </Link>
      <Link to="/passport">
        <button>View Passport</button>
      </Link>
      <Link to="/profile">
        <button>Update Profile</button>
      </Link>
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}

export default NavBar;
