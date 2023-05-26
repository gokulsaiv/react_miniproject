import { Button } from "bootstrap";
import React, { useState } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../Services/PostService";
export default function Search(props) {
  const SeachDispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <h1>Posts</h1>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          id="btn"
          className="btn btn-primary"
          onClick={() => {
            props.SearchQuery(searchText);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
}
