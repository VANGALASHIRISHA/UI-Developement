import { Link } from "react-router-dom";

const SelectClass = () => {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Select Your Current Level</h2>
      <Link to="/after-10th">After 10th  </Link>
      <br /><br />
      <Link to="/after-inter">After Intermediate</Link>
    </div>
  );
};

export default SelectClass;