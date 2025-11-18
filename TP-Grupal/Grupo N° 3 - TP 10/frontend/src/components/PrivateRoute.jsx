// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

export default function PrivateRoute({ children }) {
  const isLogged = useAuthStore((state) => Boolean(state.user));

  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
}
