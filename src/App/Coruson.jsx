import useClipboard from "../Utils/CopyToClipboard";
import Notification from "../Utils/Notification";

export default function Coruson({ employee }) {
  const copyCoruson = `Hi Jaya,\n\nFor your kind assistance please on the creation of Coruson profile for below new joiner: \n\nForename: ${employee.firstName}\nLastname: ${employee.lastName}\nEmail Address: ${employee.email}\nDepartment: ${employee.department}\nOKTAID: ${employee.adid}\nCountry: ${employee.country}\n\nThank you!`;
  const { copyToClipboard, isVisible } = useClipboard();
  return (
    <>
      <div className="copy-panel">
        {copyCoruson.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < copyCoruson.split("\n").length - 1 && <br />}
          </span>
        ))}
      </div>
      <div className="btn-Copy">
        <button
          className="copy-btn"
          onClick={(e) => {
            e.stopPropagation(); // 👈 Prevent toggle collapse
            copyToClipboard(copyCoruson);
          }}
        >
          COPY
        </button>
        <Notification message="Copied ✅" isVisible={isVisible} />
      </div>
    </>
  );
}
