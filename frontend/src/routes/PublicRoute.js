import {Navigate} from "react-router-dom";

function PublicRoute({children}) {
    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to="/main" replace />;
    }
    return children;
}

export default PublicRoute;