import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setBlog((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        title: blog.title,
        description: blog.description,
        image: blog.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      <div>
        <div>
          <h2>Add Blog</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                autoComplete="title"
                required
                value={blog.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="desc">Desciption:</label>
              <input
                type="text"
                id="desc"
                name="description"
                autoComplete="desc"
                required
                value={blog.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                name="image"
                autoComplete="image"
                required
                value={blog.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Add Blog</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
