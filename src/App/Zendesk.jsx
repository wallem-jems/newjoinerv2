import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";
export default function Zendesk({ employee }) {
  const copyZendesk = `For enabling ng Zendesk. thank you\n\nDisplay Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.email}`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <>
      <div className="copy-panel">
        {copyZendesk.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyZendesk.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button
          className="copy-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent toggle collapse
            copyToClipboard(copyZendesk);
          }}
        >
          COPY
        </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </>
  );
}
