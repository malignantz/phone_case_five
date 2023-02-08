import { Navigate } from "react-router-dom";
//import { useAuth0 } from "@auth0/auth0-react";
//import { useEffect } from 'react-dom';

function RequireAuthComponent({ children, redirectTo, isAuth }) {
  //let { isAuthenticated } = useAuth0();
  return isAuth ? children : <Navigate to={redirectTo} />;
}

export default RequireAuthComponent;
