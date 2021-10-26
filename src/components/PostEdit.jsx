import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { editPost } from "../actions/postActions";

export default function PostEdit() {
  const posts = useSelector((state) => state.posts);

  const { postId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const getPostById = (postId) => {
    return posts.find((post) => post.id === postId);
  };

  const post = getPostById(parseInt(postId));
  const [postTitle, setPostTitle] = useState(post.title);
  const [postBody, setPostBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    post.title = postTitle;
    post.body = postBody;

    dispatch(editPost(parseInt(postId), post)); // Dispatch edit post action
    history.push("/posts"); // Redirect to /posts
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <div className="container">
      <form className="form my-4" onSubmit={handleSubmit}>
        <h3>Edit Post</h3>
        <div className="form-group my-3">
          <label htmlFor="postId">Post Id</label>
          <input
            type="text"
            id="postId"
            className="form-control"
            value={post.id}
            disabled
          />
        </div>
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
          Submit
        </button>
      </form>
    </div>
  );
}
