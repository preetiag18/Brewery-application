import React, { useState } from "react";
import Button from "@mui/material/Button";

import "./Search.css";

export const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            props.onSubmit(e.target.value);
          }
        }}
        className="search-input"
      />
      <Button
        size="small"
        sx={{
          backgroundColor: "#045a68",
          "&:hover": { backgroundColor: "#045a68" },
        }}
        variant="contained"
        onClick={() => props.onSubmit(searchText)}
      >
        Search Brewery
      </Button>
    </div>
  );
};
