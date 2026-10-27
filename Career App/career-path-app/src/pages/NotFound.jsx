import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" style={{ color: "blue" }}>
        Go to Home
      </Link>
    </div>
  );
};
export default NotFound;