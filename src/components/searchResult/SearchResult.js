// SearchResult.js
import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.css";
import { getApiConfiguration } from "../../store/homeSlice";

const SearchResult = () => {
  const dispatch = useDispatch();
  const { query } = useParams();
  const { data, loading } = useFetch(`/${query}`);
  dispatch(getApiConfiguration(data));
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="backgroundImage">
      <div className="App ">
        {loading && <div className="loader"></div>}

        {!loading && data && data.message && (
          <div className="error-container">
            <p className="error-message">
              POSTAL CODE does not exist. Please enter a valid postal code.
            </p>
            <button className="error-button" onClick={handleBackButtonClick}>
              Go Back to Home
            </button>
          </div>
        )}

        {!loading && data && !data.message && (
          <div className="info">
            <h1>Country: {data.country}</h1>
            <p>Country Abbreviation: {data["country abbreviation"]}</p>
            <p>Post Code: {data["post code"]}</p>
            <h2>Places:</h2>
            <ul>
              {data?.places?.map((place, index) => (
                <li key={index}>
                  <strong>Place Name:</strong> {place["place name"]},{" "}
                  <strong>State:</strong> {place.state},{" "}
                  <strong>Latitude:</strong> {place.latitude},{" "}
                  <strong>Longitude:</strong> {place.longitude}
                </li>
              ))}
            </ul>
            <button onClick={handleBackButtonClick}>Go Back to Home</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
