import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((user) => onLogin(user))
          .then(history.push("/"));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div id="login-form">
      <h2>Login</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button type="submit">Login</button>
          <div>
            {errors.map((err) => (
              <p key={err}>
                <strong>
                  <em>{err}!</em>
                </strong>
              </p>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
