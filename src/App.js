import React, { useState } from "react";
import LocationBlock from "./components/LocationBlock/LocationBlock";
import SearchBlock from "./components/SearchBlock/SearchBlock";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <SearchBlock
          query={query}
          setQuery={setQuery}
          setWeather={setWeather}
        />
        <LocationBlock weather={weather} />
      </main>
    </div>
  );
}

export default App;
