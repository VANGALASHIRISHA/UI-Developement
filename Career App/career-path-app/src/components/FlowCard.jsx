import { Link } from "react-router-dom";

const FlowCard = ({ title, description, link }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "15px",
        width: "250px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>

      <Link to={link} style={{ color: "blue" }}>
        View Details →
      </Link>
    </div>
  );
};

export default FlowCard;