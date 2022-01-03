import React from "react";
import Breweries from "./Breweries/Breweries";
import { Search } from "./Search/Search";

function Home(props) {
  return (
    <>
      <Search onSubmit={props.onSubmit} />
      <Breweries data={props.data} />
    </>
  );
}

export default Home;
