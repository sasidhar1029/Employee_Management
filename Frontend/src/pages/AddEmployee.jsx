import axios from "axios";
import { useState } from "react";

function AddEmployee() {

  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const api = "http://localhost:8080/insertEmp";

  const addEmployee = async () => {

    if (!empName || !empSalary) {
      alert("Please enter employee name and salary");
      return;
    }

    try {

      await axios.post(api, {
        EmpName: empName,
        EmpSalary: empSalary
      });

      alert("Employee added successfully!");

      setEmpName("");
      setEmpSalary("");

    } catch (error) {

      console.log(error);
      alert("Failed to add employee");

    }
  };

  return (

    <div className="card">

      <h2 className="page-title">Add Employee</h2>

      <div className="form-group">

        <label>Employee Name</label>

        <input
          className="form-input"
          type="text"
          placeholder="Enter employee name"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />

      </div>

      <div className="form-group">

        <label>Employee Salary</label>

        <input
          className="form-input"
          type="number"
          placeholder="Enter employee salary"
          value={empSalary}
          onChange={(e) => setEmpSalary(e.target.value)}
        />

      </div>

      <button
        className="btn btn-success"
        onClick={addEmployee}
      >
        Add Employee
      </button>

    </div>

  );
}

export default AddEmployee;