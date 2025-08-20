import React, { useState } from "react";
import UrlShortenerPage from "./Component/UrlShortenerPage";
import UrlStatisticsPage from "./Component/UrlStatisticsPage";
import Navbar from "./Component/Navbar";
import "./App.css";

function App() {
  const [page, setPage] = useState("shortener");
  const [urls, setUrls] = useState([]);

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === "shortener" ? (
        <UrlShortenerPage urls={urls} setUrls={setUrls} />
      ) : (
        <UrlStatisticsPage urls={urls} />
      )}
    </div>
  );
}

export default App;
