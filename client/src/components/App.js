import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import NavBar from "./NavBar";
import ParksList from "./ParksList";
import MapView from "./MapView";
import UserProfile from "./UserProfile";
import Passport from "./Passport";
import PassportReview from "./PassportReview";

function App() {
  const [user, setUser] = useState(null);
  const [parks, setParks] = useState([]);
  const [selectedPark, setSelectedPark] = useState({});

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

  let imgNum = Math.floor(Math.random() * 12);

  if (!user) return <LoginPage onLogin={setUser} imgNum={imgNum} />;

  return (
    <div>
      <NavBar setUser={setUser} />
      <Switch>
        <Route path="/profile">
          <UserProfile user={user} />
        </Route>
        <Route path="/mapview">
          <MapView parks={parks} />
        </Route>
        <Route path="/passport">
          <Passport
            user={user}
            selectedPark={selectedPark}
            setSelectedPark={setSelectedPark}
          />
        </Route>
        <Route path="/review">
          <PassportReview
            selectedPark={selectedPark}
            setSelectedPark={setSelectedPark}
            user={user}
          />
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
