import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./error-page";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
import UserBlog from "./components/UserBlog";
import AddBlog from "./components/AddBlog";
import UpdateBlog from "./components/UpdateBlog";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/user-blog/",
        element: <UserBlog />,
      },
      {
        path: "/blog-detail/:id",
        element: <BlogDetail />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/update-blog/:id",
        element: <UpdateBlog />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
