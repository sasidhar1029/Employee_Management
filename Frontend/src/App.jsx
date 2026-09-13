import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

import AddEmployee from "./pages/AddEmployee";
import EmployeeList from "./pages/EmployeeList";
import EditEmployee from "./pages/EditEmployee";

function App() {

  return (
    <BrowserRouter>

      <div className="app">

        <header className="header">
          <h1>Employee Management System</h1>
        </header>


        <nav className="navbar">

          <Link to="/">
            Home
          </Link>

          <Link to="/add">
            Add Employee
          </Link>

          <Link to="/employees">
            Employee List
          </Link>

        </nav>


        <main className="container">

          <Routes>

            <Route
              path="/"
              element={
                <div className="card home-card">

                  <h2>
                    Welcome to Employee Management System
                  </h2>

                  <p>
                    Manage your employees easily using our CRUD application.
                  </p>

                </div>
              }
            />


            <Route
              path="/add"
              element={<AddEmployee />}
            />


            <Route
              path="/employees"
              element={<EmployeeList />}
            />


            <Route
              path="/edit/:id"
              element={<EditEmployee />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;