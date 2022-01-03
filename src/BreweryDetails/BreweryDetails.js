import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import "./BreweryDetails.css";
import { useState, useEffect } from "react";

export const BreweryDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState(undefined);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries/${params.companyId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [params.companyId]);

  let content = <p>Loading....</p>;
  if (details) {
    if (details.message) {
      content = (
        <Card
          sx={{
            maxWidth: 500,
            backgroundColor: "#045a68",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, color: "#fff" }}
              color="text.secondary"
              gutterBottom
            >
              {details.message}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": { backgroundColor: "white" },
              }}
              variant="contained"
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
          </CardActions>
        </Card>
      );
    } else {
      content = (
        <Card
          sx={{
            maxWidth: "80vw",
            minWidth: "40vw",
            minHeight: "50vh",
            backgroundColor: "#045a68",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={{ color: "#fff", textAlign: "left" }}
              variant="h5"
              component="div"
            >
              Name: {details.name} <br></br>
              City: {details.city} <br></br>
              brewery_type: {details.brewery_type} <br></br>
              State: {details.state} <br></br>
              City: {details.city} <br></br>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                "&:hover": { backgroundColor: "white" },
              }}
              variant="contained"
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
          </CardActions>
        </Card>
      );
    }
  }
  return <div className="breweryDetails">{content}</div>;
};
