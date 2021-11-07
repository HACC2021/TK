import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../store/auth-context';

function ProtectedRoute({ path, component }) {

    const authCtx = useContext(AuthContext);

    if (authCtx.isLoggedIn) {
        return <Route path={path} component={component} />
    }

    return <Redirect to='/login' />;
}

export default ProtectedRoute;
