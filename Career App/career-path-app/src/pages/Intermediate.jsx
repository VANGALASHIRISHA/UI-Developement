import { Link } from "react-router-dom";

const Intermediate = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h1>After Intermediate – Career Paths</h1>
      <p>Select your stream to know the best career options</p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
        <div style={cardStyle}>
          <h3>MPC</h3>
          <p>Engineering, Technology, Defence, Science</p>
          <Link to="/mpc">View Options</Link>
        </div>

        <div style={cardStyle}>
          <h3>BiPC</h3>
          <p>Medical, Paramedical, Pharmacy, Nursing</p>
          <Link to="/bipc">View Options</Link>
        </div>

        <div style={cardStyle}>
          <h3>CEC</h3>
          <p>CA, CS, Law, Management, Government Jobs</p>
          <Link to="/cec">View Options</Link>
        </div>

        <div style={cardStyle}>
          <h3>MEC</h3>
          <p>BBA, MBA, Finance, Business Careers</p>
          <Link to="/mec">View Options</Link>
        </div>

        <div style={cardStyle}>
          <h3>HEC</h3>
          <p>BA, Journalism, Civil Services, Social Sciences</p>
          <Link to="/hec">View Options</Link>
        </div>

      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  width: "220px",
  borderRadius: "8px",
  textAlign: "center",
};

export default Intermediate;