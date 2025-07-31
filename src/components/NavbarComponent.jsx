import { Navbar, Container, NavLink, Button, } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import ModalInscription from './ModalInsciption.jsx';


function NavBar() {

    const [openModalInscription, setOpenModalInscription] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let userRole = '';

    if (token) {

        userRole = jwtDecode(token).userRole;
        // console.log(userRole);

    }

    // const logout = () => {

    //     localStorage.removeItem('token');
    //     navigate('/')

    // }

    // const login = () => {

    //     navigate('/login')

    // }

    const handleInscription = () => {
        setOpenModalInscription(true);
    };

    const handleCloseModalInscription = () => {
        setOpenModalInscription(false);
    };


    return (

        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>

                <Navbar.Brand href="/Eternelles">Acceuil</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Button color="inherit" onClick={handleInscription}>Inscription</Button>

                        {/* {token ? (
                            <>

                                <NavLink href="/profilPage">Profile</NavLink>
                                <NavLink href="/EmployPage">Liste Employer</NavLink>
                                <NavLink href="/ListProductsPage">Liste Produits</NavLink>
                                <Button variant='danger' onClick={logout}>Déconnexion</Button>

                            </>

                        ) : (

                            <Button variant='primary' onClick={login}>Déconnexion</Button>

                        )} */}

                        <ModalInscription show={openModalInscription} onHide={handleCloseModalInscription} />

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )

}

export default NavBar;