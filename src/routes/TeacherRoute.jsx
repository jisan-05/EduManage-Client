import { Navigate } from "react-router-dom";
import useRole from './../hook/useRole';
import LoadingSpinner from "../Shared/LoadingSpinner";

// eslint-disable-next-line react/prop-types
const TeacherRoute = ({ children }) => {
    const [role, isLoading] = useRole();

    if (isLoading) return <LoadingSpinner />;
    if (role === "teacher") return children;
    return <Navigate to="/dashboard" replace="true" />;
};

export default TeacherRoute;
