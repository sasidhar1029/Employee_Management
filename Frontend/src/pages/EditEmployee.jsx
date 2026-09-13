import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  // Get employee by ID
  const getEmployee = async () => {
    try {

      const response = await axios.get(
        `http://localhost:8080/getEmployeeById/${id}`
      );

      setEmpName(response.data.EmpName);//by using this we can get the employee name and salary 
      //from the response and set it to the state
      setEmpSalary(response.data.EmpSalary);

    } catch (error) {

      console.log(error);
      alert("Failed to get employee");

    }
  };

  // Get employee when page opens
  useEffect(() => {
    getEmployee();
  }, [id]);


  // Update employee
 const updateEmployee = async () => {

  // 1. Check employee name
  if (!empName.trim()) {
    alert("Employee name is required");
    return;
  }

  // 2. Check employee name format
  const namePattern = /^[A-Za-z ]+$/;

  if (!namePattern.test(empName)) {
    alert("Employee name should contain only letters");
    return;
  }

  // 3. Check salary
  if (!empSalary) {
    alert("Employee salary is required");
    return;
  }

  // 4. Check salary should be greater than 0
  if (Number(empSalary) <= 0) {
    alert("Salary must be greater than 0");
    return;
  }

  // 5. Send update request
  try {

    await axios.put(
      `http://localhost:8080/updateEmployee/${id}`,
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
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />

      </div>


      <div className="form-group">

        <label>Employee Salary</label>

        <input
          className="form-input"
          type="number"
          value={empSalary}
          onChange={(e) => setEmpSalary(e.target.value)}
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