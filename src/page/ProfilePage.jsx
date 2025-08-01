import { useEffect, useState } from "react";
import { getProfile } from "../service/clientService";
import Figure from 'react-bootstrap/Figure';








const profilPage = () => {

    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    const [pays, setPays] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [image, setImage] = useState();

    const fetchProfile = async () => {

        try {

            const profil = await getProfile()
            setNom(profil.data.nom)
            setPrenom(profil.data.prenom)
            setAdresse(profil.data.adresse)
            setPays(profil.data.pays)
            setEmail(profil.data.email)
            setPassword(profil.data.password)
            setImage(profiler.data.imageClient)

        } catch (error) {

            console.error(error);

        }

    }

    useEffect(() => {

        fetchProfile();

    }, []);

    return (

        <>

            <div>

                <h1>Votre Profil</h1>

            </div>

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

        </>

    )

}

export default profilPage;