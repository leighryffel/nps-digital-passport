import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function PassportStamp({ park }) {
  const history = useHistory();

  const handleViewStamp = (data) => {
    history.push("/review", { data: data });
  };

  const posterURL = `https://national-park-posters.com/pages/search-results-page?q=${park.name}`;

  return (
    <div className="stamp-card">
      <div>
        <img className="stamp-image" src={park.image_url} alt={park.name} />
        <h1>{park.name}</h1>
        <Button onClick={() => handleViewStamp(park)}>Log a Memory</Button>
        <Button href={posterURL} target="_blank">
          Order a Poster of {park.name}
        </Button>
      </div>
    </div>
  );
}

export default PassportStamp;
