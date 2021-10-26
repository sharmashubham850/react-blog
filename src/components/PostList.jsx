import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const loggedInUser = useSelector((state) => state.loggedInUser);

  // fetch a user by Id
  const findUserById = (id) => {
    return users.find((user) => user.id === id);
  };

  const renderedPosts = posts.map((post) => {
    const postUser = findUserById(post.userId);
    return (
      <div className="card my-3 w-75" key={post.id}>
        <div className="card-header">
          <img
            src={postUser.thumbnail}
            className="rounded-circle"
            width="50"
            alt="thumbnail"
          />
          <span className="ms-3">{postUser.name}</span>
        </div>
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p className="lead card-text my-3">{post.body}</p>
          {loggedInUser?.id === post.userId && (
            <>
              <Link
                to={`/posts/edit/${post.id}`}
                className="btn btn-secondary me-2"
              >
                Edit
              </Link>
              <Link
                to={`/posts/delete/${post.id}`}
                className="btn btn-danger mx-2"
              >
                Delete
              </Link>
            </>
          )}
        </div>
      </div>
    );
  });

  return <div className="container">{renderedPosts}</div>;
};

export default PostList;
