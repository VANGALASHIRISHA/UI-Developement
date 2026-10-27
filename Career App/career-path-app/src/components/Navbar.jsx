import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ SAFE read
  const studentRaw = localStorage.getItem("student");
  const student = studentRaw ? JSON.parse(studentRaw) : null;

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/login", { replace: true });
  };

  return (
    <nav style={{ padding: "15px", background: "#1e3a8a", color: "white" }}>
      <h2>Career Path</h2>

      {student && (
        <>
          <p>Welcome, {student.email}</p>

          <div>
            <Link to="/" style={{ color: "white", marginRight: "10px" }}>
              Home
            </Link>
            <Link to="/after-10th" style={{ color: "white", marginRight: "10px" }}>
              After 10th
            </Link>
            <Link to="/after-inter" style={{ color: "white", marginRight: "10px" }}>
              After Inter
            </Link>

            <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
              Logout
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
