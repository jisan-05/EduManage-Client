import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hook/useAuth';
import LoadingSpinner from '../Shared/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={{ from: location }} replace='true' />
}



export default PrivateRoutes
