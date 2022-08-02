import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  const [imgNum, setImgNum] = useState(0);

  const imgArray = [
    "https://media.cntraveler.com/photos/5ea78aee149c56000808d317/master/w_2580%2Cc_limit/Crater-Lake-National-Park-GettyImages-1158150928.jpg",
    "https://media.cntraveler.com/photos/5949abf31bb4381cb15c1b77/master/w_2580%2Cc_limit/Arches-GettyImages-643292956.jpg",
    "https://media.cntraveler.com/photos/5949abf424f1965a3e97eb5a/master/w_2580%2Cc_limit/Badlands-GettyImages-554443341.jpg",
    "https://media.cntraveler.com/photos/5e1380ce5a0316000864edde/master/w_2580%2Cc_limit/Bryce-Canyon-National-Park-GettyImages-921951796.jpg",
    "https://media.cntraveler.com/photos/5ea78b108f0528000854df1b/master/w_2580%2Cc_limit/Glacier-National-Park-GettyImages-487522016.jpg",
    "https://media.cntraveler.com/photos/5ea78af7f7f62f00085493ce/master/w_2580%2Cc_limit/Glacier-Bay-GettyImages-555743985.jpg",
    "https://media.cntraveler.com/photos/5c744bbbff54753046216f13/master/w_2580%2Cc_limit/Grand-Canyon-National-Park_GettyImages-152836923.jpg",
    "https://media.cntraveler.com/photos/5bb4e2816477eb358f142ca4/master/w_2580%2Cc_limit/Great-Sand-Dunes-GettyImages-1034057512.jpg",
    "https://media.cntraveler.com/photos/5ea78b1e149c56000808d31a/master/w_2580%2Cc_limit/Joshua-Tree-National-Park-GettyImages-758302569.jpg",
    "https://media.cntraveler.com/photos/5ea78b22149c56000808d31b/master/w_2580%2Cc_limit/Kenai-Fjords-National-Park-GettyImages-543126005.jpg",
    "https://media.cntraveler.com/photos/5949ac0584b37669f9731899/master/w_2580%2Cc_limit/zion-GettyImages-514653655.jpg",
    "https://media.cntraveler.com/photos/5949ac021bb4381cb15c1b87/master/w_1920%2Cc_limit/Sequoia-GettyImages-131984902.jpg",
  ];

  useEffect(() => {
    setImgNum(Math.floor(Math.random() * 12));
  }, []);

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${imgArray[imgNum]})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Grid item align="center">
            <Typography id="login-page-header" variant="h4" sx={{ mt: 5 }}>
              National Parks Digital Passport
            </Typography>
            {showLogin ? (
              <LoginForm onLogin={onLogin} />
            ) : (
              <SignupForm onLogin={onLogin} />
            )}
            <Button onClick={() => setShowLogin(!showLogin)}>
              {showLogin
                ? "Don't have an account? Sign Up"
                : "Have an account? Sign In"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
