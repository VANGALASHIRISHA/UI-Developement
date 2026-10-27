const StepCard = ({ step, title, details }) => {
  return (
    <div
      style={{
        borderLeft: "5px solid #2563eb",
        padding: "15px",
        margin: "15px 0",
        background: "#f8fafc",
      }}
    >
      <h4>
        Step {step}: {title}
      </h4>
      <p>{details}</p>
    </div>
  );
};

export default StepCard;