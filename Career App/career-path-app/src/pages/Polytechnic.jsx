import { Link } from "react-router-dom";

const Polytechnic = () => {
  return (
    <div className="page">
      <h1>Polytechnic (Diploma)</h1>

      <p>
        Polytechnic courses provide technical education after 10th.
        Duration is usually 3 years.
      </p>

      <h2>Popular Diploma Branches</h2>
      <ul>
        <li>Diploma in Civil Engineering</li>
        <li>Diploma in Mechanical Engineering</li>
        <li>Diploma in Electrical Engineering</li>
        <li>Diploma in Electronics & Communication</li>
        <li>Diploma in Computer Engineering</li>
      </ul>

      <h2>After Polytechnic</h2>
      <ul>
        <li>Jobs in Private Companies</li>
        <li>Government Jobs</li>
        <li>Higher Studies (B.Tech via ECET)</li>
        <li>Self Employment</li>
      </ul>

      <Link className="back-link" to="/after-10th">
        ⬅ Back to After 10th
      </Link>
    </div>
  );
};

export default Polytechnic;