import { useSelector } from "react-redux";

export default function Home() {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  return (
    <div className="container">
      <h1 className="mt-3">
        Welcome {loggedInUser !== null ? loggedInUser.name : "Guest"}
      </h1>
    </div>
  );
}
