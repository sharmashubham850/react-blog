import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginUser } from "../actions/authActions";

export default function LoginForm({ setUser }) {
  const users = useSelector((state) => state.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  // fetch a user by email and password
  const findUserByEmailAndPassword = (email, password) => {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = findUserByEmailAndPassword(email, password);

    if (user) {
      dispatch(loginUser(user)); // Dispatching login user action
      history.push("/"); // Redirect to Homepage
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <form className="form w-50  my-4" onSubmit={handleLogin}>
        <h3>Log In</h3>
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
        </div>

        {/* Error msg - Visible on Invalid credentials */}
        <small className={`text-danger mb-2 d-${error ? "block" : "none"}`}>
          Invalid Email or Password!!
        </small>

        <small className="text-muted d-block">
          Don't have an account? <Link to="/user/register">Sign Up</Link>
        </small>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
