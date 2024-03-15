import { Navigate, useLocation } from "react-router-dom";
import { RoutePath } from "../config/routeConfig";

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const location = useLocation()

    const userData = {}

    if(!userData) { 
        return (
            <Navigate to={RoutePath.LOGIN_PAGE} state={{from: location}} replace />
        )
    }

    return children
}
