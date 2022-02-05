import axios from "axios";

export async function getPosts() {
  try {
    const { data } = await axios.get("/api/posts");
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error: ", err.response);

    throw new Error(err);
  }
}

export async function getPostById(id) {
  try {
    const { data } = await axios.get(`/api/post/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    console.log("Error: ", err.response);

    throw new Error(err);
  }
}
// ---------------------------------------------------------------
// export function getPostsByUserId(userId) {
//   return posts.filter((post) => post.userId === userId);
// }

// export function createPost(post) {
//   post.id = posts[posts.length - 1].id + 1;
//   posts.push(post);
// }

// export function editPost(id, updatedPost) {
//   const postIndex = posts.findIndex((post) => post.id === id);
//   posts[postIndex] = updatedPost;
// }

// export function deletePost(id) {
//   const postIndex = posts.findIndex((post) => post.id === id);
//   posts.splice(postIndex, 1);
// }
