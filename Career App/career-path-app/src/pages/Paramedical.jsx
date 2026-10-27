import { Link } from "react-router-dom";

const Paramedical = () => {
  return (
    <div className="page">
      <h1>Paramedical Courses</h1>

      <p>
        Paramedical courses are related to healthcare and medical support services.
      </p>

      <h2>Popular Paramedical Courses</h2>
      <ul>
        <li>Diploma in Medical Laboratory Technology (DMLT)</li>
        <li>Diploma in X-Ray Technology</li>
        <li>Diploma in Operation Theatre Technology</li>
        <li>Nursing Assistant</li>
        <li>Physiotherapy Assistant</li>
      </ul>

      <h2>Career Options</h2>
      <ul>
        <li>Hospitals</li>
        <li>Diagnostic Labs</li>
        <li>Government Health Services</li>
        <li>Private Clinics</li>
      </ul>

      <Link className="back-link" to="/after-10th">
        ⬅ Back to After 10th
      </Link>
    </div>
  );
};

export default Paramedical;