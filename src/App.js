import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./components/Post/Post";
import PostContainer from "./components/PostContainer/PostContainer";

function App() {
  return (
    <>
      <PostContainer />
    </>
  );
}

export default App;
