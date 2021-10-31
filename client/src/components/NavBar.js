import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Icon } from '@iconify/react/';

function NavBar() {
    return (
        <Navbar className="navbar">
            <Navbar.Brand style={{ fontFamily: "Shadows Into Light" }}>Mālama Trails</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link>
                    <Icon icon="iconoir:profile-circled" />
                </Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
