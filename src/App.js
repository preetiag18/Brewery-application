import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { BreweryDetails } from "./BreweryDetails/BreweryDetails";

import "./App.css";

function App() {
  const [breweriesData, setBreweriesData] = useState(undefined);

  const getInitialListOfBreweries = () =>
    fetch("https://api.openbrewerydb.org/breweries")
      .then((res) => res.json())
      .then((data) => setBreweriesData(data));

  useEffect(() => {
    getInitialListOfBreweries();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={breweriesData}
                onSubmit={(searchedText) => {
                  if (searchedText === "") {
                    getInitialListOfBreweries();
                  } else {
                    setBreweriesData(undefined);
                    fetch(
                      `https://api.openbrewerydb.org/breweries/search?query=${searchedText}`
                    )
                      .then((res) => res.json())
                      .then((data) => setBreweriesData(data));
                  }
                }}
              />
            }
          />
          <Route path=":companyId" element={<BreweryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
