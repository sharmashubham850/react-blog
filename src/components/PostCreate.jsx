import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createPost } from "../actions/postActions";

export default function PostCreate() {
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { userId: loggedInUser.id, title: postTitle, body: postBody };
    dispatch(createPost(post));

    history.push("/posts");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="container">
      <form className="form my-4" onSubmit={handleSubmit}>
        <h3>Create Post</h3>

        <div className="form-group my-3">
          <label htmlFor="postTitle">Post Title</label>
          <input
            type="text"
            id="postTitle"
            className="form-control"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="postBody">Post Body</label>
          <textarea
            rows="5"
            id="postBody"
            className="form-control"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-light ms-auto mt-2 me-4"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary mt-2">
          Create
        </button>
      </form>
    </div>
  );
}
