import { Link } from "react-router-dom";

const Vocational = () => {
  return (
    <div className="page">
      <h1>Vocational Courses</h1>

      <p>
        Vocational courses focus on skill-based education and practical training.
      </p>

      <h2>Popular Vocational Courses</h2>
      <ul>
        <li>Automobile Technology</li>
        <li>Fashion Designing</li>
        <li>Hotel Management</li>
        <li>Retail Management</li>
        <li>Computer Applications</li>
      </ul>

      <h2>Career Opportunities</h2>
      <ul>
        <li>Skill-Based Jobs</li>
        <li>Self Employment</li>
        <li>Higher Studies</li>
        <li>Entrepreneurship</li>
      </ul>

      <Link className="back-link" to="/after-10th">
        ⬅ Back to After 10th
      </Link>
    </div>
  );
};

export default Vocational;