import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./EmployeeDetails.css";

function EmployeeDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);


  const getEmployee = async () => {

    try {

      const response = await axios.get(
        `http://localhost:8080/getEmployeeById/${id}`
      );

      setEmployee(response.data);
      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

      if (error.response?.status === 404) {

        navigate("/employee-not-found", {
          state: {
            message:
              error.response?.data?.message ||
              `Employee with ID ${id} does not exist`
          }
        });

        return;
      }

      alert("Failed to get employee details");
    }
  };


  useEffect(() => {

    getEmployee();

  }, [id]);


  if (loading) {

    return (
      <div className="details-loading">
        <div className="loader"></div>
        <p>Loading employee...</p>
      </div>
    );
  }


  if (!employee) {
    return null;
  }


  return (

    <div className="details-page">

      <div className="profile-card">

        {/* PROFILE HEADER */}

        <div className="profile-header">

          <div className="profile-avatar">
            {employee.EmpName?.charAt(0).toUpperCase()}
          </div>

          <h1>
            {employee.EmpName}
          </h1>

          <p>
            Employee ID: {employee.EmpId}
          </p>

        </div>


        {/* DIVIDER */}

        <div className="divider"></div>


        {/* INFORMATION */}

        <div className="information-section">

          <h2>
            Employee Information
          </h2>


          <div className="information-row">

            <span>
              Employee ID
            </span>

            <strong>
              {employee.EmpId}
            </strong>

          </div>


          <div className="information-row">

            <span>
              Employee Name
            </span>

            <strong>
              {employee.EmpName}
            </strong>

          </div>


          <div className="information-row">

            <span>
              Employee Salary
            </span>

            <strong className="salary">
              ₹{employee.EmpSalary}
            </strong>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="divider"></div>


        {/* ACTIONS */}

        <div className="details-actions">

          <button
            className="back-button"
            onClick={() => navigate("/employees")}
          >
            ← Back to Employee List
          </button>


          <button
            className="edit-button"
            onClick={() =>
              navigate(`/edit/${employee.EmpId}`)
            }
          >
            Edit Employee
          </button>

        </div>

      </div>

    </div>
  );
}

export default EmployeeDetails;