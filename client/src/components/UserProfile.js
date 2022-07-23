import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h1>Update Your Profile!</h1>
      <button>Create A Bucket List</button>
      <div className="user-info">
        <img className="avatar" alt="avatar" src={user.image_url} />
        <h2>Your Information:</h2>
        <ul>
          <li>Username: {user.username}</li>
          <li>Location: {user.location}</li>
          {/* <li>
            Bucket List Parks:
            {user.bucket_list.bucket_list_parks.count > 0
              ? user.bucket_list.bucket_list_parks.count
              : "0"}
          </li> */}
          <li>Number of Parks Visited: {user.user_parks.count}!</li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
