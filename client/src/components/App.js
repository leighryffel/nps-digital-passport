import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ParksList from "./ParksList";

function App() {
  const [count, setCount] = useState(0);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  useEffect(() => {
    fetch(
      `https://developer.nps.gov/api/v1/parks?limit=159&q=designation%3D%22National%20Park%22&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setParks(data.data));
  }, []);

  function addParkToBucketList() {
    console.log("Saved to BucketList database!");
    // line to add the park to the Park database
  }

  function addParkToStamps() {
    console.log("Saved to UserParks database");
    // line to add the park to the Park database
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route path="/">
            <div>
              <h1>Home Page</h1>
              <h2>
                <ParksList
                  parks={parks}
                  addParkToBucketList={addParkToBucketList}
                  addParkToStamps={addParkToStamps}
                />
              </h2>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
