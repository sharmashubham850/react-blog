import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addUser } from "../actions/userActions";
import { loginUser } from "../actions/authActions";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      username,
      phone,
      password,
      thumbnail: "avatar.jpg",
    };
    console.log("New User: ", user);

    dispatch(addUser(user)); // Dispatch add user action
    dispatch(loginUser(user)); // Dispatch login user action
    history.push("/"); // Redirect to homepage
  };

  return (
    <div className="container">
      <form className="form w-50  my-4" onSubmit={handleRegister}>
        <h3>Sign Up</h3>
        <div className="form-group my-3">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control mt-1"
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control mt-1"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control mt-1"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className="form-control mt-1"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control mt-1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            className="form-control mt-1"
            placeholder="Enter Password Again"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <small className={`text-danger d-${error ? "block" : "none"}`}>
            Error
          </small>
        </div>
        <small className={`text-danger d-${error ? "block" : "none"}`}>
          Error
        </small>
        <button type="reset" className="btn btn-secondary mt-3 me-4">
          Reset
        </button>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
}
