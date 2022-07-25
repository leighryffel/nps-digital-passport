import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ReviewCard from "./ReviewCard";

function PassportReview({ user }) {
  const history = useHistory();
  const park = history.location.state.data;
  const [text, setText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [change, setChange] = useState(false);
  const placeholder = `Write a memory about visiting ${park.name}`;

  useEffect(() => {
    fetch("/reviews")
      .then((res) => res.json())
      .then(setReviews);
  }, [change]);

  const filteredReviews = reviews.filter(
    (review) => review.user_park_id === park.id
  );

  const reviewList = filteredReviews.map((review) => (
    <ReviewCard
      key={review.id}
      review={review}
      change={change}
      setChange={setChange}
      placeholder={placeholder}
      park={park}
      user={user}
    />
  ));

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_park_id: park.id,
        user_id: user.id,
        text: text,
      }),
    })
      .then(() => setText(""))
      .then(() => setChange(!change));
  }

  return (
    <div>
      <h1>{park.name}</h1>
      <img alt={park.name} src={park.image_url} />
      <h3>Your Memories</h3>
      {reviewList}
      <br></br>
      <form>
        <textarea
          rows="10"
          cols="25"
          placeholder={placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br></br>
        <Button onClick={handleSubmit}>Submit Your Memory</Button>
      </form>
    </div>
  );
}

export default PassportReview;
