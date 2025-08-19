import { useEffect, useState } from "react";
import { clientList, deleteClient, getProfile } from "../service/clientService";
import Figure from 'react-bootstrap/Figure';
import { Button, ListGroup, Table } from "react-bootstrap";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';




const ProfilePage = () => {

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    const [pays, setPays] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();

    const [client, setClient] = useState([]);
    const [admin, setAdmin] = useState(false);

    const token = localStorage.getItem('token');


    const fetchProfile = async (idClient) => {

        try {

            const profil = await getProfile(idClient)
            // console.log(profil);

            setNom(profil.data.nom)
            setPrenom(profil.data.prenom)
            setAdresse(profil.data.adresse)
            setPays(profil.data.pays)
            setEmail(profil.data.email)
            setPassword(profil.data.password)
            setImage(profil.data.imageClient)

        } catch (error) {

            console.error(error);

        }

    }

    const fetchList = async () => {

        try {

            const response = await clientList();
            setClient(response.data.client);
            console.log(response.data);

        } catch (error) {

            console.error("Error fetching data: ", error);

        }

    };

    // supprimer un employer directement avec un bouton 

    const handleDelete = async (idClient) => {

        try {

            await deleteClient(idClient)
            location.reload()

        } catch (error) {

            console.error("Erreur lors de la suppression", error);
            // console.log(error);

        }

    }

    const handleAjout = () => {

        navigate('/AjoutArticle');

    }

    useEffect(() => {

        fetchProfile();
        fetchList();

        if (token) {

            const decodedToken = jwtDecode(token);
            console.log(decodedToken);

            if (decodedToken.Role === 1) {

                setAdmin(true);

            }

            console.log("Admin status:", admin);

        }

    }, []);




    return (

        <>

            <div>

                <h1>Votre Profil</h1>

            </div>

            {admin && (

                <div>
                    <Button onClick={handleAjout}>Ajouter un article</Button>
                </div>

            )}

            <div>

                <Figure>

                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={image}
                    />

                </Figure>

            </div>

            <div>

                <ListGroup className="list-group-flush">

                    <ListGroup.Item>{nom}</ListGroup.Item>
                    <ListGroup.Item>{prenom}</ListGroup.Item>
                    <ListGroup.Item>{adresse}</ListGroup.Item>
                    <ListGroup.Item>{pays}</ListGroup.Item>
                    <ListGroup.Item>{email}</ListGroup.Item>
                    <ListGroup.Item>{password}</ListGroup.Item>

                </ListGroup>

            </div>

            {admin && (

                <Table striped bordered hover>

                    <thead>

                        <tr>

                            <th>id</th>
                            <th>nom</th>
                            <th>prenom</th>
                            <th>adresse</th>
                            <th>pays</th>
                            <th>email</th>

                        </tr>

                    </thead>

                    <tbody>

                        {client.map((client) => (

                            <tr key={client.idClient}>
                                <td>{client.nom}</td>
                                <td>{client.prenom}</td>
                                <td>{client.adresse}</td>
                                <td>{client.pays}</td>
                                <td>{client.email}</td>

                                <td>

                                    <Button variant="danger" onClick={() => handleDelete(client.idClient)}>

                                        Supprimer

                                    </Button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            )}

        </>

    )

}

export default ProfilePage;