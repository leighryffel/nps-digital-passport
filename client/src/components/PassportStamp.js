import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function PassportStamp({ park }) {
  const history = useHistory();

  const handleViewStamp = (data) => {
    history.push("/review", { data: data });
  };

  const posterURL = `https://national-park-posters.com/pages/search-results-page?q=${park.name}`;

  return (
    <Card className="passport-stamp-card" sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          className="passport-stamp-image"
          component="img"
          height="100"
          image={park.image_url}
          alt={park.name}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {park.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          className="passport-stamp-button"
          onClick={() => handleViewStamp(park)}
        >
          Log a Memory
        </button>
        <br></br>
        <button
          className="passport-stamp-button"
          href={posterURL}
          target="_blank"
        >
          Order a Poster
        </button>
      </CardActions>
    </Card>
  );
}

export default PassportStamp;
