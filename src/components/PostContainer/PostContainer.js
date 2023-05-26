import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PostContainer.css";
import { getPosts } from "../../Services/PostService";
import Post2 from "../Post/Post";
import Search from "../Search/Search";

export default function PostContainer() {
  let queryStr;
  let posts;
  const [pageCount, setCount] = useState(5);

  const [SearchText, setSearchText] = useState("");

  posts = useSelector((state) => {
    return state.posts.posts;
  });

  const postDispatcher = useDispatch();

  useEffect(() => {
    postDispatcher(getPosts(""));
  }, []);

  function SearchQuery(query) {
    setSearchText(query);
  }

  if (SearchText.length > 0) {
    posts = posts.slice(0, pageCount).filter((post) => {
      return post.title.includes(SearchText) || post.body.includes(SearchText);
    });
  }
  const postList = posts.map((post) => {
    return <Post2 key={post.id} title={post.title} body={post.body} />;
  });

  const Posts = postList.slice(0, pageCount);

  return (
    <>
      <Search SearchQuery={SearchQuery} />

      {Posts.length > 0 && Posts}
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(pageCount + 5);

          postDispatcher(getPosts(""));
        }}
      >
        Load More
      </button>
    </>
  );
}
