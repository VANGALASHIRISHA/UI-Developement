import { Link } from "react-router-dom";

const ITI = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>ITI – Industrial Training Institute</h1>

      <p>
        ITI courses focus on technical and practical skills.
        They help students get jobs quickly or continue higher studies.
      </p>

      <h2>Popular ITI Trades</h2>

      <ul>
        <li>Electrician</li>
        <li>Fitter</li>
        <li>Mechanic Diesel</li>
        <li>Welder</li>
        <li>Plumber</li>
        <li>Turner</li>
        <li>COPA (Computer Operator)</li>
      </ul>

      <h2>Career Options After ITI</h2>

      <ul>
        <li>Private Technical Jobs</li>
        <li>Government Jobs</li>
        <li>Apprenticeship Training</li>
        <li>Self Employment</li>
        <li>Polytechnic (Lateral Entry)</li>
      </ul>

      <br />

      <Link to="/after-10th">⬅ Back to After 10th Options</Link>
    </div>
  );
};

export default ITI;