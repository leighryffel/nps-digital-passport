import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function PassportStamp({ park }) {
  const history = useHistory();

  const handleViewStamp = (data) => {
    history.push("/review", { data: data });
  };

  return (
    <div className="stamp-card">
      <div>
        <img
          className="stamp-image"
          src={park.image_url}
        />
        <h1>{park.name}</h1>
        <Button onClick={() => handleViewStamp(park)}>Log a Memory</Button>
      </div>
    </div>
  );
}

export default PassportStamp;
