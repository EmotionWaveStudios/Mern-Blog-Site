import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store";
const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  return (
    <header>
      <div>
        <h1>
          <Link to="/">My Blog</Link>
        </h1>
        {isLoggedIn && (
          <nav>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/user-blog">User Blog</Link>
            <Link to="/add-blog">Add Blog</Link>
          </nav>
        )}

        <div>
          {!isLoggedIn && (
            <>
              <button to="/auth">
                <Link to="/auth">Login</Link>
              </button>
              <button>
                <Link to="/auth">Signup</Link>
              </button>
            </>
          )}
          {isLoggedIn && (
            <button onClick={() => dispatch(authAction.logout())}>
              <Link to="/blogs">Logout</Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
