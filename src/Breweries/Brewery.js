import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Brewery(props) {
  return (
    <Card
      sx={{
        flex: "0 0 25%",
        minWidth: 275,
        backgroundColor: "#045a68",
        color: "#fff",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, color: "#fff" }}
          color="text.secondary"
          gutterBottom
        >
          {props.name}
        </Typography>
        <Typography sx={{ color: "#fff" }} variant="h5" component="div">
          {props.brewery_type}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#fff" }} color="text.secondary">
          {props.city}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            "&:hover": { backgroundColor: "white" },
          }}
          variant="contained"
          onClick={props.onViewDetails}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
