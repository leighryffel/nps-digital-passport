import React from "react";

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
      <h1>Navigation Bar</h1>
      <button onClick={handleLogoutClick}>Log Out</button>
    </div>
  );
}

export default NavBar;
