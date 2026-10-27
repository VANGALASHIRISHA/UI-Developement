import { Link } from "react-router-dom";

const After10th = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Options After 10th</h2>
      <ul>
        <li><Link to="/polytechnic">Polytechnic</Link></li>
        <li><Link to="/iti">ITI</Link></li>
        <li><Link to="/vocational">Vocational</Link></li>
        <li><Link to="/paramedical">Paramedical</Link></li>
      </ul>
    </div>
  );
};
export default After10th;