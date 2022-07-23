import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import ParksList from "./ParksList";
import MapView from "./MapView";
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

  function createBucketList() {
    fetch("/bucket_lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: user.id }),
    });
  }

  if (!user)
    return <LoginPage onLogin={setUser} createBucketList={createBucketList} />;

  return (
    <div className="app">
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/profile">
          <UserProfile user={user} />
        </Route>
        <Route path="/mapview">
          <MapView parks={parks} />
        </Route>
        <Route path="/passport">
          <Passport user={user} />
        </Route>
        <Route path="/">
          <div>
            <ParksList user={user} parks={parks} />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
