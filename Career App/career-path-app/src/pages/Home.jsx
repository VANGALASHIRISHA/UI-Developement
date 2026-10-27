import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Career Path Guidance</h1>
      <p>Complete career guidance for students after 10th & Intermediate</p>

      <div className="flow-grid">
        <Link to="/after-10th" className="flow-card">
          After 10th
        </Link>

        <Link to="/after-inter" className="flow-card">
          After Intermediate
        </Link>

        <Link to="/welfare&skills" className="flow-card">
          Welfare & Skills
        </Link>
      </div>
    </div>
  );
};

export default Home;