export const createPost = (post) => {
  return {
    type: "CREATE_POST",
    payload: { post },
  };
};

export const editPost = (postId, updatedPost) => {
  return {
    type: "EDIT_POST",
    payload: {
      postId,
      updatedPost,
    },
  };
};

export const deletePost = (postId) => {
  return {
    type: "DELETE_POST",
    payload: { postId },
  };
};
