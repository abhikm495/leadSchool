import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import SearchResult from "./components/searchResult/SearchResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
