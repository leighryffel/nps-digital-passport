import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoginForm({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
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
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
      <Typography id="sign-in-header" component="h1" variant="h5">
        Sign In
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          variant="filled"
          style={{ borderRadius: "50px" }}
          className="input-text-field"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <div>
          {errors.map((err) => (
            <Typography align="center" variant="h6" key={err}>
              <strong>{err}!</strong>
            </Typography>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default LoginForm;
