import React, { useEffect, useState } from "react";

function UserProfile({ user }) {
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bucketListParks, setBucketListParks] = useState([]);
  const [userParks, setUserParks] = useState([]);

  function handleUpdateClick() {
    setToggleUpdateForm(!toggleUpdateForm);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  function handleImageChange(e) {
    setImageUrl(e.target.value);
  }

  function handleSubmit() {
    let newUserInfo = {};
    if (imageUrl === "" && location === "") {
      newUserInfo = {
        location: user.location,
        image_url: user.image_url,
      };
    } else if (imageUrl === "") {
      newUserInfo = {
        location: location,
        image_url: user.image_url,
      };
    } else if (location === "") {
      newUserInfo = {
        location: user.location,
        image_url: imageUrl,
      };
    } else {
      newUserInfo = {
        location: location,
        image_url: imageUrl,
      };
    }
    console.log(newUserInfo);
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfo),
    });
  }

  useEffect(() => {
    fetch("/bucket_list_parks")
      .then((res) => res.json())
      .then(setBucketListParks);
  }, []);

  useEffect(() => {
    fetch("/user_parks")
      .then((res) => res.json())
      .then(setUserParks);
  }, []);

  const filteredBucketParks = bucketListParks.filter(
    (park) => park.user.username === user.username
  );

  const bucketListNames = filteredBucketParks.map((park) => (
    <li key={park.id}>{park.name}</li>
  ));

  const filteredUserParks = userParks.filter(
    (park) => park.user.username === user.username
  );

  return (
    <div id="user-profile">
      <h1>Account Information</h1>
      <div id="user-information">
        <img id="user-avatar" alt="avatar" src={user.image_url} />
        <ul>
          <li>
            <strong>Username: </strong> {user.username}
          </li>
          <br></br>
          <li>
            <strong>Location: </strong> {user.location}
          </li>
          <br></br>

          <li>
            <strong>On Your Bucket List: </strong>
          </li>
          {bucketListParks.length > 0 ? (
            <ul className="bucket-list-item">{bucketListNames}</ul>
          ) : null}
          <br></br>

          <li>
            <strong>Number of Parks Visited:</strong>{" "}
            {filteredUserParks.length > 0 ? filteredUserParks.length : 0} / 62
            parks!
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
            <br></br>
            <label>
              <strong>Update Avatar URL:</strong>
            </label>
            <input
              type="text"
              placeholder="Insert URL"
              onChange={handleImageChange}
            />
            <button id="submit-profile-changes" type="submit">
              Submit Changes
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
