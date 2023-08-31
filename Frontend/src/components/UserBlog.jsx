import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const UserBlog = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log("user", user);
  return (
    <div>
      {user &&
        user.blogs.map((blog) => (
          <Card
            key={blog._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            id={blog._id}
            isUser={true}
          />
        ))}
    </div>
  );
};

export default UserBlog;
