import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  const api = "http://localhost:8080/getAllEmployees";

  const getEmployees = async () => {

    try {

      const response = await axios.get(api);

      setEmployees(response.data);

    } catch (error) {

      console.log(error);
      alert("Failed to get employees");

    }

  };

  const deleteEmployee = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await axios.delete(
        `http://localhost:8080/deleteEmployee/${id}`
      );

      alert("Employee deleted successfully!");

      getEmployees();

    } catch (error) {

      console.log(error);
      alert("Failed to delete employee");

    }

  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (

    <div className="card">

      <h2 className="page-title">
        Employee List
      </h2>

      <table className="employee-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.EmpId}>

              <td>{employee.EmpId}</td>

              <td>{employee.EmpName}</td>

              <td>₹{employee.EmpSalary}</td>

              <td>

                <Link to={`/edit/${employee.EmpId}`}>
                  <button className="btn btn-primary">
                    Edit
                  </button>
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteEmployee(employee.EmpId)
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default EmployeeList;