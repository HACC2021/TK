import { useContext } from 'react';
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
            <Navbar.Brand className="navbar-brand" href="/">Mālama Trails</Navbar.Brand>

            <Navbar.Toggle />
            {isLoggedIn ? 
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="navbar-item">
                    <Icon icon="iconoir:profile-circled" />
                </Nav.Link>
                <Nav.Item className="navbar-item">
                    <button onClick={logoutHandler}>Logout</button>
                </Nav.Item>
            </Navbar.Collapse>
            :
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="navbar-item" href="/login">
                    Login
                </Nav.Link>
            </Navbar.Collapse>
            }
        </Navbar>
    )
}

export default NavBar
