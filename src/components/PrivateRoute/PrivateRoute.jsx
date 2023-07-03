import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const profile = useSelector(state => state.auth.profile)
  const location = useLocation()
  return profile ? children : <Navigate to='/login' state={ location} />
};
