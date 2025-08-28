import { Navbar, Container, NavLink, Button, } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import ModalInscription from './ModalInsciption.jsx';
import ModalLogin from './ModalLogin.jsx';



function NavBar() {

    const [openModalInscription, setOpenModalInscription] = useState(false);
    const [openModalLogin, setOpenModalLogin] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    let userRole = '';

    if (token) {

        userRole = jwtDecode(token).userRole;
        // console.log(userRole);

    }

    const logout = () => {

        localStorage.removeItem('token');
        navigate('/Eternelles')

    }

    const handleInscription = () => {

        setOpenModalInscription(true);

    };

    const handleCloseModalInscription = () => {

        setOpenModalInscription(false);

    };

    const handleLogin = () => {

        setOpenModalLogin(true);

    };

    const handleCloseModalLogin = () => {

        setOpenModalLogin(false);

    };

    const handleGalerie = () => {

        navigate('/Galerie');

    }

    const handleProflil = () => {

        navigate('/Profile');

    }


    return (

        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>

                <Navbar.Brand href="/Eternelles">Acceuil</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">


                        <NavLink onClick={handleInscription}>Inscription</NavLink>
                        <NavLink onClick={handleLogin}>login</NavLink>
                        <NavLink onClick={handleGalerie}>Galerie</NavLink>

                        {token ? (
                            <>
                                <NavLink onClick={handleProflil}>Profile</NavLink>
                                <Button variant='danger' onClick={logout}>Déconnexion</Button>

                            </>

                        ) : (

                            <Button variant='primary' onClick={handleLogin}>Déconnexion</Button>

                        )}

                        <ModalInscription show={openModalInscription} onHide={handleCloseModalInscription} />
                        <ModalLogin show={openModalLogin} onHide={handleCloseModalLogin} />

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    )

}

export default NavBar;