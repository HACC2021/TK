import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Icon } from '@iconify/react/';

function NavBar() {
    return (
        <Navbar className="navbar">
            <Navbar.Brand className="navbar-brand">Mālama Trails</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link className="navbar-item">
                    <Icon icon="iconoir:profile-circled" />
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
