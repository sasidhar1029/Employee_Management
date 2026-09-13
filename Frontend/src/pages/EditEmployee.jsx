import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const updateEmployee = async () => {

    if (!empName || !empSalary) {
      alert("Please enter employee name and salary");
      return;
    }

    try {

      await axios.put(
        `http://localhost:8080/updateEmp/${id}`,
        {
          EmpName: empName,
          EmpSalary: empSalary
        }
      );

      alert("Employee updated successfully!");

      navigate("/employees");

    } catch (error) {

      console.log(error);
      alert("Failed to update employee");

    }
  };

  return (

    <div className="card">

      <h2 className="page-title">
        Edit Employee
      </h2>

      <div className="form-group">

        <label>Employee Name</label>

        <input
          className="form-input"
          type="text"
          placeholder="Enter employee name"
          value={empName}
          onChange={(e) =>
            setEmpName(e.target.value)
          }
        />

      </div>

      <div className="form-group">

        <label>Employee Salary</label>

        <input
          className="form-input"
          type="number"
          placeholder="Enter employee salary"
          value={empSalary}
          onChange={(e) =>
            setEmpSalary(e.target.value)
          }
        />

      </div>

      <button
        className="btn btn-primary"
        onClick={updateEmployee}
      >
        Update Employee
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => navigate("/employees")}
      >
        Cancel
      </button>

    </div>

  );
}

export default EditEmployee;