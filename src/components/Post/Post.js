import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postActions } from "../../Reducers/reducers";
import { getPosts } from "../../Services/PostService";
import "./Post.css";

import { useState } from "react";
import { Collapse, Card, Button } from "reactstrap";

export default function Post2(props) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="post">
        <h3
          className="title"
          onClick={() => {
            toggleCollapse();
          }}
        >
          {props.title}
        </h3>
        <p className="body" hidden={isOpen}>
          {props.body}
        </p>
      </div>
    </>
  );
}

// function Post(props) {
//   return (
//     <>
//       <Post2 />
//       <div id="accordion">
//         <div className="card">
//           <div className="card-header">
//             <a className="card-link" dataToggle="collapse" href="#collapseOne">
//               {props.title}
//             </a>
//           </div>
//           <div
//             id="collapseOne"
//             className="collapse show"
//             data-parent="#accordion"
//           >
//             <div className="card-body">{props.body}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
