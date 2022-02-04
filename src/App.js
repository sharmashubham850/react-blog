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
        <Navbar />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts" exact>
          <PostList />
        </Route>
        <Route path="/posts/edit/:postId">
          <PostEdit />
        </Route>
        <Route path="/posts/delete/:postId">
          <PostDelete />
        </Route>
        <Route path="/posts/create">
          <PostCreate />
        </Route>
        <Route path="/user/login">
          <LoginForm />
        </Route>
        <Route path="/user/register">
          <RegisterForm />
        </Route>
      </BrowserRouter>
    </main>
  );
}
