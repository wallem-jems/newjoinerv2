import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

export default function LocalIT({ employee }) {
  const copyLocalIT = `Display Name: ${employee.firstName} ${employee.lastName}\nEmail Address: ${employee.email}\nADID: ${employee.adid}\nPassword: ${employee.password} `;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <>
      <div className="copy-panel">
        {copyLocalIT.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyLocalIT.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button
          className="copy-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent toggle collapse
            copyToClipboard(copyLocalIT);
          }}
        >
          COPY
        </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </>
  );
}
