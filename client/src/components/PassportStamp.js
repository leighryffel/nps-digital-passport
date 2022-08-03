import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function PassportStamp({ park }) {
  const [isHovered, setIsHovered] = useState(false);

  const history = useHistory();

  const handleViewStamp = (data) => {
    history.push("/review", { data: data });
  };

  const posterURL = `https://national-park-posters.com/pages/search-results-page?q=${park.name}`;

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseAway() {
    setIsHovered(false);
  }

  return (
    <Card
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseAway}
      sx={{ width: "15%", margin: "1em 1em 1em 1em" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={park.image_url}
          alt={park.name}
        />
        <CardContent>
          {!isHovered ? (
            <>
              <Typography id="stamp-title" variant="h6" component="div">
                {park.name}
              </Typography>
            </>
          ) : (
            <>
              <Typography id="stamp-title" variant="h6" component="div">
                <strong>{park.name}</strong>
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <hr></hr>
      <CardActions>
        <button className="stamp-button" onClick={() => handleViewStamp(park)}>
          Log a Memory
        </button>
        <a href={posterURL} target="_blank" rel="noreferrer">
          <button className="stamp-button">Order a Poster</button>
        </a>
      </CardActions>
    </Card>
  );
}

export default PassportStamp;
