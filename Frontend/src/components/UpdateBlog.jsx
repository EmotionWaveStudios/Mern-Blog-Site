import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlog = () => {
  const [blog, setBlog] = useState();
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const id = useParams().id;
  console.log(id);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const fetchBlog = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchBlog().then((data) => {
      setBlog(data.blog);
      setInput({
        title: data.blog.title,
        description: data.blog.description,
      });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:5000/api/blog/update/${id}`, {
        title: input.title,
        description: input.description,
      })
      .catch((err) => console.log(err));
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
          <h2>Update Blog</h2>
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
                value={input.title}
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
                value={input.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <button type="submit">Update Blog</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
