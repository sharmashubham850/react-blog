import axios from "axios";

export async function getAllUsers() {
  const { data } = await axios.get("/api/users");
  return data;
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`/api/user/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

// export function findByEmailAndPassword(email, password) {
//   return users.find(
//     (user) => user.email === email && user.password === password
//   );
// }

// export function addUser(user) {
//   user.id = users[users.length - 1].id + 1;
//   users.push(user);
// }
