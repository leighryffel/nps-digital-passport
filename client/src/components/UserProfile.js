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
    });
  }

  return (
    <div id="user-profile">
      <h1>Account Information</h1>
      <div id="user-information">
        <img alt="avatar" src={user.image_url} />
        <ul>
          <li>
            <strong>Username:</strong> {user.username}
          </li>
          <li>
            <strong>Location:</strong> {user.location}
          </li>
          <li>
            <strong>Bucket List Parks:</strong> {user.bucket_count}
          </li>
          <li>
            <strong>Number of Parks Visited:</strong> {user.stamps_count}
          </li>
        </ul>
      </div>
      <div className="update-profile">
        <button onClick={handleUpdateClick}>Update Profile</button>
        {toggleUpdateForm ? (
          <form onSubmit={handleSubmit}>
            <label>
              <strong>Update Location:</strong>
            </label>
            <input
              type="text"
              placeholder="I'm located in..."
              onChange={handleLocationChange}
            />
            <label>
              <strong>Update Avatar URL:</strong>
            </label>
            <input
              type="text"
              placeholder="Insert URL"
              onChange={handleImageChange}
            />
            <button id="submit-profile-changes" type="submit">Submit Changes</button>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
