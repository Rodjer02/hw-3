import { BiSearchAlt } from "react-icons/bi";

export default function SearchBlock({ query, setQuery, setWeather }) {
  const api = {
    key: "a2c742989f875b477d2ae959c6f9ffcf",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const search = (evt) => {
    if (evt.key === "Enter" || evt.button === 0) {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
  return (
    <div className="search-box" style={{ position: "relative" }}>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
      <BiSearchAlt
        onClick={search}
        style={{
          position: "absolute",
          top: "27%",
          right: "10px",
          width: "25px",
          height: "25px",
        }}
      />
    </div>
  );
}
