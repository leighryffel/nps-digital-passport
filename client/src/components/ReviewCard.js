import React, { useState } from "react";
import { Button } from "@mui/material";

function ReviewCard({ review, change, setChange, park, user }) {
  const [toggleMemoryEdit, setToggleMemoryEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const { id, text } = review;

  const updateMemoryForm = (
    <form>
      <textarea
        rows="4"
        cols="25"
        placeholder={text}
        onChange={(e) => setEditText(e.target.value)}
      ></textarea>
      <br></br>
      <Button onClick={handleEditSubmit}>Update Your Memory</Button>
    </form>
  );

  function handleEditClick() {
    setToggleMemoryEdit(!toggleMemoryEdit);
  }

  function handleEditSubmit() {
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
      <p className="review-text" key={id}>{text}</p>
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
    </>
  );
}

export default ReviewCard;
