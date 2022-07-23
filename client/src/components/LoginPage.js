import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoginPage({ onLogin, createBucketList }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      <LoginForm onLogin={onLogin} />
      <SignupForm createBucketList={createBucketList} onLogin={onLogin} />
    </div>
  );
}

export default LoginPage;
