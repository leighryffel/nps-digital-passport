import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
    if (text !== "") {
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
  }

  return (
    <div id="park-stamp-parent">
      <div id="park-stamp-child-1">
        <h1 className="review-text">{park.name}</h1>
        <img style={{ width: "100%" }} alt={park.name} src={park.image_url} />
        <h3 className="review-text">Your Memories</h3>
        {reviewList}
        <form>
          <textarea
            id="review-text-area"
            rows={5}
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <br></br>
          <button id="review-button" onClick={handleSubmit}>
            Submit Your Memory
          </button>
        </form>
      </div>
      <div id="park-stamp-child-2">
        <h1>All About {park.name}</h1>
        <p>{park.description}</p>
        <h2>Friends You Visited With:</h2>
      </div>
    </div>
  );
}

export default PassportReview;
