import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h1>Update Your Profile!</h1>
      <div className="user-info">
        <img className="avatar" alt="avatar" src={user.image_url} />
        <h2>Your Information:</h2>
        <ul>
          <li>Username: {user.username}</li>
          <li>Location: {user.location}</li>
          <li>Bucket List Parks: {user.bucket_count}</li>
          <li>Number of Parks Visited: {user.stamps_count}</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
