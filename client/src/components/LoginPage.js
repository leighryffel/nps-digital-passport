import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <LoginForm onLogin={onLogin} />
      <SignupForm onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;
