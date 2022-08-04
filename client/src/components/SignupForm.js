import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SignupForm({ onLogin }) {
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
        location: data.get("location"),
        image_url: data.get("avatar"),
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
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
      <Typography id="sign-up-header" component="h1" variant="h5">
        Create an Account
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          variant="filled"
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
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          name="password-confirm"
          label="Password Confirmation"
          type="password"
          id="password-confirmation"
          autoComplete="password-confirmation"
        />
        <TextField
          variant="filled"
          margin="normal"
          fullWidth
          name="location"
          label="Where are you located?"
          id="location"
          autoComplete="location"
        />
        <TextField
          variant="filled"
          margin="normal"
          fullWidth
          name="avatar"
          label="Choose a Profile Picture (URL)"
          id="avatar"
          autoComplete="avatar"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Account
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

export default SignupForm;
