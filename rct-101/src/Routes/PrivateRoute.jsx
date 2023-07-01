import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const { isAuth } = useContext(AuthContext)
    console.log("Auth here...", isAuth)

    if (!isAuth) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute;
