import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const api = "http://localhost:8080/getAllEmployees";


  // GET ALL EMPLOYEES
  const getEmployees = async () => {

    try {

      const response = await axios.get(api);

      setEmployees(response.data);

    } catch (error) {

      console.log(error);
      alert("Failed to get employees");

    }
  };


  // DELETE EMPLOYEE
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


  // SEARCH EMPLOYEES
  const filteredEmployees = employees.filter((employee) =>
    employee.EmpName
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );


  // GET EMPLOYEES WHEN PAGE OPENS
  useEffect(() => {
    getEmployees();
  }, []);


  return (
    <div className="card">

      <h2 className="page-title">
        Employee List
      </h2>


      {/* SEARCH BOX */}
      <div className="search-container">

        <input
          className="search-input"
          type="text"
          placeholder="Search employee by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


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

          {filteredEmployees.length > 0 ? (

            filteredEmployees.map((employee) => (

              <tr key={employee.EmpId}>

                <td>{employee.EmpId}</td>

                <td>{employee.EmpName}</td>

                <td>₹{employee.EmpSalary}</td>

                <td>
                <button
    className="btn btn-primary"
    onClick={() => navigate(`/employees/${employee.EmpId}`)}
  >
    View
  </button>
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

            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="empty-message"
              >
                No employees found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;