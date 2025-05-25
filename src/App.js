import { useState } from "react";
import NewJoinerForm from "./pages/Newjoiner";
import TaskLists from "./pages/TaskLists";

function App() {
  const [employees, setEmployees] = useState([]);

  function handleGenerateEmployee(employee) {
    setEmployees((currEmp) => [...currEmp, employee]);
  }

  return (
    <div className="mainbody">
      {employees < 1 && <NewJoinerForm onGenerate={handleGenerateEmployee} />}

      {employees < 1 ? (
        <h2 className="title">Fill Out the employee form to generate task</h2>
      ) : (
        employees.map((employee) => (
          <TaskLists key={employee.adid} employee={employee} />
        ))
      )}
    </div>
  );
}

export default App;
