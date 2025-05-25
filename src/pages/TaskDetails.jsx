import { useState } from "react";
import "./TaskDetails.css";
import ActiveDirectory from "../App/ActiveDirectory";
import O365 from "../App/O365";
import Zendesk from "../App/Zendesk";
import LocalIT from "../App/LocalIT";
import SDP from "../App/SDP";
import SwireConnect from "../App/SwireConnect";
import Coruson from "../App/Coruson";
import K2 from "../App/K2";

export default function TaskDetails({ task, employee, onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="task-list">
      <div className="task-card">
        <div className="task-header" onClick={() => setIsOpen(!isOpen)}>
          <span>
            {task.taskName} - {isOpen ? "Hide" : "Show"} Details
          </span>
          <p className="task-description">{isOpen && task.taskDescription}</p>

          {isOpen && task.taskName === "Active Directory" && (
            <ActiveDirectory employee={employee} />
          )}

          {isOpen && task.taskName === "O365" && <O365 employee={employee} />}

          {isOpen && task.taskName === "Zendesk" && (
            <Zendesk employee={employee} />
          )}

          {isOpen && task.taskName === "Local IT" && (
            <LocalIT employee={employee} />
          )}

          {isOpen && task.taskName === "SDP" && <SDP employee={employee} />}
          {isOpen && task.taskName === "SwireConnect" && (
            <SwireConnect employee={employee} />
          )}
          {isOpen && task.taskName === "Coruson" && (
            <Coruson employee={employee} />
          )}
          {isOpen && task.taskName === "K2" && <K2 employee={employee} />}
        </div>
      </div>
    </div>
  );
}
