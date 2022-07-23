import React, { useState } from "react";
import { Container } from "react-bootstrap";

function SignupForm({ onLogin, createBucketList }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [location, setLocation] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        location: location,
        image_url: avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => onLogin(user));
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
      .then(createBucketList());
  }


  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="signup-username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <label htmlFor="password-confirmation">Confirm your password:</label>
          <input
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <br></br>
          <label htmlFor="location">Where are you located?</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <br></br>
          <label htmlFor="avatar">Upload a Profie Picture</label>
          <input
            type="test"
            id="avatar"
            name="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <br></br>
          <button type="submit">Sign Up</button>
          <div>
            {errors.map((err) => (
              <p key={err}>{err}</p>
            ))}
          </div>
        </form>
      </Container>
    </div>
  );
}

export default SignupForm;
