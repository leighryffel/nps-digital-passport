import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div id="login-page">
      <h1>Welcome to the NPS Digital Passport!</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br></br>
          <p>
            Don't have an account?
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          <br></br>
          <p>
            Already have an account?
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
