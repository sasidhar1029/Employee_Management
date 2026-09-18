import { useLocation, useNavigate } from "react-router-dom";

import "./EmployeeNotFound.css";

function EmployeeNotFound() {

  const navigate = useNavigate();
  const location = useLocation();

  const message =
    location.state?.message ||
    "The employee you are looking for does not exist.";


  return (

    <div className="not-found-page">

      <div className="not-found-card">

        {/* 404 */}

        <div className="not-found-number">
          404
        </div>


        {/* TITLE */}

        <h1>
          Employee Not Found
        </h1>


        {/* MESSAGE */}

        <p>
          {message}
        </p>


        <p className="not-found-description">
          The employee may have been deleted, or the
          employee ID you entered does not exist.
        </p>


        {/* BUTTON */}

        <button
          className="not-found-button"
          onClick={() => navigate("/employees")}
        >
          ← Back to Employee List
        </button>

      </div>

    </div>
  );
}

export default EmployeeNotFound;