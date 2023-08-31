import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Card({ id, title, description, image, isUser }) {
  const navigate = useNavigate();
  console.log(isUser);

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleDelete = async () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      <img src={image} alt="image" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button onClick={() => navigate(`/blog-detail/${id}`)}>
          Read more
        </button>

        {isUser && (
          <div>
            <button onClick={() => navigate(`/update-blog/${id}`)}>
              Update
            </button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
