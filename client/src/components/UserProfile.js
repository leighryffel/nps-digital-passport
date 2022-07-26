import React, { useState } from "react";
import { Button } from "@mui/material";

function UserProfile({ user }) {
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleUpdateClick() {
    setToggleUpdateForm(!toggleUpdateForm);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleSubmit(e) {
    console.log("submitting changes");
    const newUserInfo = {
      location: location,
      image_url: imageUrl,
    };
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    })
    // .then(() => setChange(!change));
  }

  return (
    <div>
      <h1>Account Information</h1>
      <div className="user-info">
        <img className="avatar" alt="avatar" src={user.image_url} />
        <ul>
          <li>Username: {user.username}</li>
          <li>Location: {user.location}</li>
          <li>Bucket List Parks: {user.bucket_count}</li>
          <li>Number of Parks Visited: {user.stamps_count}</li>
        </ul>
      </div>
      <Button onClick={handleUpdateClick}>Update Profile</Button>
      {toggleUpdateForm ? (
        <form onSubmit={handleSubmit}>
          <label>Update Location:</label>
          <input type="text" placeholder="I'm located in..." onChange={handleLocationChange} />
          <label>Update Avatar URL:</label>
          <input type="text" placeholder="Insert URL" onChange={handleImageChange} />
          <Button type="submit">Submit Changes</Button>
        </form>
      ) : null}
    </div>
  );
}

export default UserProfile;
