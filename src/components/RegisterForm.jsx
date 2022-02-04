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

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors(errors);
    console.log(errors);

    if (errors) return;
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
    history.replace("/"); // Redirect to homepage
  };

  // TODO
  const handleReset = () => {
    setName("");
    setEmail("");
    setUsername("");
    setPhone("");
    setPassword("");
    setPassword2("");
  };

  const validate = () => {
    const errors = {};

    if (name.trim() === "") errors.name = "Name is required";
    if (email.trim() === "") errors.email = "Email is required";
    if (username.trim() === "") errors.username = "Username is required";
    if (phone.trim() === "") errors.phone = "Phone is required";
    if (password.trim() === "") errors.password = "Password is required";
    if (password2.trim() === "")
      errors.password2 = "Repeat Password is required";

    return errors;
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
            className={`form-control mt-1 ${errors.name && "is-invalid"}`}
            placeholder="Enter Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={`form-control mt-1 ${errors.email && "is-invalid"}`}
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className={`form-control mt-1 ${errors.username && "is-invalid"}`}
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <small className="text-danger">{errors.username}</small>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className={`form-control mt-1 ${errors.phone && "is-invalid"}`}
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone}</small>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className={`form-control mt-1 ${errors.password && "is-invalid"}`}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>
        <div className="form-group my-3">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            className={`form-control mt-1 ${errors.password2 && "is-invalid"}`}
            placeholder="Enter Password Again"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          {errors.password2 && (
            <small className="text-danger">{errors.password2}</small>
          )}
        </div>

        <button
          type="reset"
          className="btn btn-secondary mt-3 me-4"
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </div>
  );
}
