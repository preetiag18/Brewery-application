import React from "react";
import Brewery from "./Brewery";
import { useNavigate } from "react-router-dom";

import "./Breweries.css";

function Breweries(props) {
  const navigate = useNavigate();
  return (
    <div className="breweries">
      {props.data === undefined ? (
        <div>Loading...</div>
      ) : props.data.length > 0 ? (
        props.data.map((item) => (
          <Brewery
            name={item.name}
            brewery_type={item.brewery_type}
            city={item.city}
            onViewDetails={() => navigate(`/${item.id}`)}
            key={item.id}
          />
        ))
      ) : (
        <div>No item found...</div>
      )}
    </div>
  );
}
export default Breweries;
