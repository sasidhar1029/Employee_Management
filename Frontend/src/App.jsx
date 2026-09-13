import axios from 'axios'
import './App.css'
import {useState} from 'react'
function App() {

  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState();

  const api = "http://localhost:8080/insertEmp";

  const addEmployee = async () => {

    try {

      await axios.post(api, {
        EmpName: empName,
        EmpSalary: empSalary
      });

      alert("Employee added successfully!");

    } catch (error) {

      console.log(error);
      alert("Failed to add employee");

    }
    setEmpName("");
    setEmpSalary();
  };

  return (
    <>
      <h1>Employee Management</h1>
      <input
        type="text"
        placeholder="Employee Name"
        value={empName}
        onChange={(e) => setEmpName(e.target.value)}
      />
      <br />  <br/>
      <input
        type="number"
        placeholder="Employee Salary"
        value={empSalary}
        onChange={(e) => setEmpSalary(e.target.value)}
      />      <br/>
      <br/>
      <button onClick={addEmployee} className="btn btn-primary">
        Add Employee
      </button>
    </>
  );
}

export default App;