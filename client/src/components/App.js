import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import ParksList from "./ParksList";
import UserProfile from "./UserProfile";
import Passport from "./Passport";

function App() {
  const [user, setUser] = useState(null);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?limit=159&q=designation%3D%22National%20Park%22&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  // function addParkToBucketList() {
  //   console.log("Saved to BucketList database!");
  //   // line to add the park to the Park database
  //   fetch("POST")
  // }

  // function addParkToStamps() {
  //   console.log("Saved to UserParks database");
  //   // line to add the park to the Park database
  // }

  if (!user) return <LoginPage onLogin={setUser} />;

  return (
    <div>
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/profile">
          <UserProfile user={user} />
        </Route>
        <Route path="/passport">
          <Passport user={user} />
        </Route>
        <Route path="/">
          <div>
            <h1>Home Page</h1>
            <h2>
              <ParksList user={user} parks={parks} />
            </h2>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
