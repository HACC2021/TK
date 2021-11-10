import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Icon } from '@iconify/react/';
import AuthContext from '../store/auth-context';

function NavBar() {

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const logoutHandler = () => {
        authCtx.logout();
    };

    return (
        <Navbar className="navbar">
            <Navbar.Brand className="navbar-brand"><Link to='/'>Mālama Trails</Link></Navbar.Brand>
            <Nav.Item className="navbar-item">
                <Link to='/trails'>Explore</Link>
            </Nav.Item>

            <Navbar.Toggle />
            {isLoggedIn ? 
            <Navbar.Collapse className="justify-content-end">
                <Nav.Item className="navbar-item">
                    <Link to='/profile'><Icon icon="iconoir:profile-circled" /></Link>
                </Nav.Item>
                <Nav.Item className="navbar-item">
                    <button onClick={logoutHandler}>Logout</button>
                </Nav.Item>
            </Navbar.Collapse>
            :
            <Navbar.Collapse className="justify-content-end">
                <Nav.Item className="navbar-item">
                    <Link to='/login'>Login</Link>
                </Nav.Item>
            </Navbar.Collapse>
            }
        </Navbar>
    )
}

export default NavBar
