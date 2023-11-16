import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [invalidPostalCode, setInvalidPostalCode] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      if (isValidPostalCode(query)) {
        setInvalidPostalCode(false);
        navigate(`/search/${query}`);
      } else {
        setInvalidPostalCode(true);
      }
    }
  };

  const isValidPostalCode = (code) => {
    const postalCodeRegex = /^\d{6}$/;
    return postalCodeRegex.test(code);
  };

  const handleSearchButtonClick = () => {
    if (query.length > 0) {
      if (isValidPostalCode(query)) {
        setInvalidPostalCode(false);
        navigate(`/search/${query}`);
      } else {
        setInvalidPostalCode(true);
      }
    }
  };

  return (
    <div className="backgroundImage">
      <div className="searchInput">
        <h2>Find Information by Postal Code</h2>
        <p>Enter a postal code to get information about the place:</p>
        <input
          type="text"
          placeholder="Enter postal code..."
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={searchQueryHandler}
          style={{ fontSize: "18px" }}
        />
        <button onClick={handleSearchButtonClick} style={{ fontSize: "18px" }}>
          Search
        </button>
        {invalidPostalCode && (
          <p style={{ color: "red", marginTop: "10px" }}>
            Please enter a valid postal code.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
