const Notification = ({ message, isVisible }) => {
  return (
    <div
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#4caf50",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        transition: "opacity 0.5s ease",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
