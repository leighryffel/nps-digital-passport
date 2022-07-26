import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div id="login-page">
        <h1>National Parks Digital Passport</h1>
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
      <div className="login-footer">
        <h6>Created by Leigh Ryffel 2022</h6>
      </div>
    </div>
  );
}

export default LoginPage;
