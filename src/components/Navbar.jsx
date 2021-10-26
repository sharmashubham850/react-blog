import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../actions/authActions";

export default function Navbar() {
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const dispatchLogout = () => {
    dispatch(logoutUser()); // Dispatching logout user action
    history.push("/"); // Redirect to homepage
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link active" to="/posts">
                All Posts
              </Link>
            </li>
            {loggedInUser ? (
              <>
                <li className="nav-item mx-2">
                  <Link className="nav-link" to="/posts/create">
                    Create Post
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <span
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={dispatchLogout}
                  >
                    Logout
                  </span>
                </li>
              </>
            ) : (
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/user/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
