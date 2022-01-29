import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deletePost } from "../actions/postActions";

export default function PostDelete() {
  const { postId } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(parseInt(postId)));
    history.push("/posts");
  };

  const handleCancel = (e) => {
    history.goBack();
  };

  return (
    <div className="container">
      <h3 className="my-4">Are you sure you want to delete this Post ?</h3>
      <button className="btn btn-light me-4" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
