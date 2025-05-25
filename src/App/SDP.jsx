import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";
export default function SDP({ employee }) {
  const copySDP = `For enabling ng SDP, thank you!\n\nDisplay Name: ${employee.firstName} ${employee.lastName}\nEmail: ${employee.emailAdd}\nJob Title: ${employee.jobTitle}\nDepartment: ${employee.department}\nManager: ${employee.manager}\nCountry: ${employee.country}\nZendesk: Created`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <>
      <div className="copy-panel">
        {copySDP.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copySDP.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button
          className="copy-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent toggle collapse
            copyToClipboard(copySDP);
          }}
        >
          COPY
        </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </>
  );
}
