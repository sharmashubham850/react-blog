import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import PostCreate from "./components/PostCreate";
import PostDelete from "./components/PostDelete";
import PostEdit from "./components/PostEdit";
import PostList from "./components/PostList";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar /> {/* Using Redux store */}
        <Route path="/" exact>
          <Home /> {/* Using Redux store */}
        </Route>
        <Route path="/posts" exact>
          <PostList /> {/* Using Redux store */}
        </Route>
        <Route path="/posts/edit/:postId">
          <PostEdit /> {/* Using Redux store */}
        </Route>
        <Route path="/posts/delete/:postId">
          <PostDelete /> {/* Using Redux store */}
        </Route>
        <Route path="/posts/create">
          <PostCreate /> {/* Using Redux store */}
        </Route>
        <Route path="/user/login">
          <LoginForm /> {/* Using Redux store */}
        </Route>
        <Route path="/user/register">
          <RegisterForm /> {/* Using Redux store */}
        </Route>
      </BrowserRouter>
    </main>
  );
}
