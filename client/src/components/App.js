import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import ParksList from "./ParksList";
import UserProfile from "./UserProfile";
import Passport from "./Passport";
import PassportReview from "./PassportReview";
import Footer from "./Footer";

function App() {
  const [user, setUser] = useState(null);
  const [parks, setParks] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?limit=160&q=designation%3D%22National%20Park%22&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  if (!user) return <LoginPage onLogin={setUser} />;

  return (
    <div>
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/profile">
          <UserProfile user={user} />
        </Route>
        <Route path="/passport">
          <Passport
            user={user}
          />
        </Route>
        <Route path="/review">
          <PassportReview
            user={user}
          />
        </Route>
        <Route path="/">
          <div>
            <ParksList
              user={user}
              parks={parks}
              change={change}
              setChange={setChange}
            />
          </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
