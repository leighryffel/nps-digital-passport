import React, { useState } from "react";

function ReviewCard({ review, change, setChange, park, user }) {
  const [toggleMemoryEdit, setToggleMemoryEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const { id, text } = review;

  const updateMemoryForm = (
    <form>
      <textarea
        id="edit-review-text-area"
        rows="5"
        placeholder={text}
        onChange={(e) => setEditText(e.target.value)}
      ></textarea>
      <br></br>
      <button className="edit-review" onClick={handleEditSubmit}>
        Update Your Memory
      </button>
    </form>
  );

  function handleEditClick() {
    setToggleMemoryEdit(!toggleMemoryEdit);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    const newMemory = {
      user_park_id: park.id,
      user_id: user.id,
      text: editText,
    };
    setToggleMemoryEdit(!toggleMemoryEdit);
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMemory),
    }).then(() => setChange(!change));
  }

  function handleDelete() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then(() => setChange(!change));
  }

  return (
    <>
      <div>
        <p className="review-text" key={id}>
          {text}{" "}
          <em>
            Posted{" "}
            {review.created_at.substring(5, 10) +
              "-2022 at " +
              review.created_at.substring(11, 16)}
          </em>
        </p>
      </div>
      {toggleMemoryEdit ? (
        updateMemoryForm
      ) : (
        <button className="edit-review" onClick={handleEditClick}>
          Edit Memory
        </button>
      )}
      <button className="edit-review" onClick={handleDelete}>
        X
      </button>
      <hr></hr>
    </>
  );
}

export default ReviewCard;
