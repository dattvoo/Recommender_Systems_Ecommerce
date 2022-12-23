import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const NotLoggedInRoutes = () => {
    const user = useSelector(state => state.user);
    return (
        user ? <Navigate to="/" /> : <Outlet />
    )
}
