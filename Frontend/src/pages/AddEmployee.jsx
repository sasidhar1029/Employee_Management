import axios from "axios";
import { useState } from "react";
import Success from "./Success";
import {useNavigate} from "react-router-dom"
function AddEmployee() {
 const navigate = useNavigate();
  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const api = "http://localhost:8080/insertEmp";

  const addEmployee = async () => {

    // Name validation
    if (!empName.trim()) {
      alert("Employee name is required");
      return;
    }

    // Name format validation
    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(empName)) {
      alert("Employee name should contain only letters");
      return;
    }

    // Salary validation
    if (!empSalary) {
      alert("Employee salary is required");
      return;
    }

    // Salary should be greater than 0
    if (Number(empSalary) <= 0) {
      alert("Salary must be greater than 0");
      return;
    }

    try {

      await axios.post(api, {
        EmpName: empName,
        EmpSalary: empSalary
      });

    

      setEmpName("");
      setEmpSalary("");
      navigate("/success");
    } catch (error) {

      console.log(error);
      alert("Failed to add employee");

    }
  };

  return (
    <div className="card">

      <h2 className="page-title">
        Add Employee
      </h2>

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