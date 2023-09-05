import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useSelector } from "react-redux";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/blog");
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);

  return (
    <div>
      {blogs &&
        isLoggedIn &&
        blogs.map((blog) => (
          <div key={blog._id}>
            {console.log(blog.user._id)}
            <Card
              title={blog.title}
              description={blog.description}
              image={blog.image}
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog.user._id}
            />
          </div>
        ))}
    </div>
  );
};

export default Blogs;
