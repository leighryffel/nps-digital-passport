import React, { useState, useEffect } from "react";
import PassportStamp from "./PassportStamp";
import { Container, Row } from "react-bootstrap";

function Passport({ user }) {
  const [userParks, setUserParks] = useState([]);

  useEffect(() => {
    fetch("/user_parks")
      .then((res) => res.json())
      .then(setUserParks);
  }, []);

  const filteredUserParks = userParks.filter(
    (park) => park.user.username === user.username
  );

  const stampList = filteredUserParks.map((userPark) => (
    <PassportStamp park={userPark} key={userPark.id} />
  ));

  return (
    <div>
      <h1>
        {user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s
        Passport
      </h1>
      <h2>Your Stamps</h2>
      <Container>
        <Row>{stampList}</Row>
      </Container>
    </div>
  );
}

export default Passport;
