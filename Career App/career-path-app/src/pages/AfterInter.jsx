import { Link } from "react-router-dom";

const AfterInter = () => {
  return (
    <div className="home-container">
      <h1>After Intermediate</h1>
      <p>Select your stream to know career options</p>

      <div className="card-grid">
        <Link to="/intermediate/mpc" className="card">MPC</Link>
        <Link to="/intermediate/bipc" className="card">BiPC</Link>
        <Link to="/intermediate/cec" className="card">CEC</Link>
        <Link to="/intermediate/mec" className="card">MEC</Link>
        <Link to="/intermediate/hec" className="card">HEC</Link>
      </div>
    </div>
  );
};
export default AfterInter;