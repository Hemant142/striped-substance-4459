import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    let {authState}=useContext(AuthContext)
    console.log(authState)
    if(authState[0]){
        return children
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute;
