import { useNavigate } from "react-router-dom";

function Success(){
    const navigate=useNavigate();
    return(
       <div className="success">
        
        <p>Employee added successfully</p>
        <button onClick={()=>navigate(-1)}>Back to Employees</button>
       </div>
        
    );
}
export default Success;