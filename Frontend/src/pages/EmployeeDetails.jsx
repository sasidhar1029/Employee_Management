import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {

    const getEmployee = async () => {

      try {

        const response = await axios.get(
          `http://localhost:8080/getEmployeeById/${id}`
        );

        setEmployee(response.data);

      } catch (error) {

        console.log(error);
        alert("Failed to get employee details");

      }
    };

    getEmployee();

  }, [id]);

  if (!employee) {
    return <p>Loading...</p>;
  }

  return (
    <div className="card">

      <h2 className="page-title">
        Employee Details
      </h2>

      <div className="employee-details">

        <p>
          <strong>Employee ID:</strong> {employee.EmpId}
        </p>

        <p>
          <strong>Employee Name:</strong> {employee.EmpName}
        </p>

        <p>
          <strong>Employee Salary:</strong> ₹{employee.EmpSalary}
        </p>

      </div>

      <button
        className="btn btn-secondary"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

    </div>
  );
}

export default EmployeeDetails;