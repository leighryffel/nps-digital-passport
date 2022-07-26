import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function PassportStamp({ park }) {
  const history = useHistory();

  const handleViewStamp = (data) => {
    history.push("/review", { data: data });
  };

  const posterURL = `https://national-park-posters.com/pages/search-results-page?q=${park.name}`;

  return (
    <Card sx={{ maxWidth: 200, margin: "1em 1em 1em 1em" }}>
      <CardActionArea>
        <CardMedia
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
        <button onClick={() => handleViewStamp(park)}>Log a Memory</button>
        <br></br>
        <button href={posterURL} target="_blank">
          Order a Poster
        </button>
      </CardActions>
    </Card>
  );
}

export default PassportStamp;
