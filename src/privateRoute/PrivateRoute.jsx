import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
import Loading from "../components/Loading";


const PrivateRoute = ({ children }) => {
    const location = useLocation()
    console.log(location)
    
    const { user, loading } = useContext(authContext)

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children;
    } else{
        return <Navigate to="/login" state={location?.pathname}></Navigate>

    }
    
};

export default PrivateRoute;