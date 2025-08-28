// import { useState } from "react";
// import { Modal } from "react-bootstrap";










// function ModalModifierClient(props) {

//     const [nom, setNom] = useState();
//     const [prenom, setPrenom] = useState();
//     const [adresse, setAdresse] = useState();
//     const [pays, setPays] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();


//     const fetchProfile = async (idClient) => {

//         try {

//             const profil = await getProfile(idClient)
//             // console.log(profil);

//             setNom(profil.data.nom)
//             setPrenom(profil.data.prenom)
//             setAdresse(profil.data.adresse)
//             setPays(profil.data.pays)
//             setEmail(profil.data.email)
//             setPassword(profil.data.password)
//             setImage(profil.data.imageClient)

//         } catch (error) {

//             console.error(error);

//         }

//     }












//     return (

//         <>

//             <Modal
//                 show={props.show}
//                 onHide={props.onHide}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered >

//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Inscription
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form onSubmit={handleSubmit}>
//                         <Row className="mb-3">
//                             <Form.Group as={Col} md="4" controlId="validation">
//                                 <Form.Label>Nom</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="text"
//                                     placeholder={nom}
//                                     value={clientData.nom} onChange={(e) => setClientData({ ...clientData, nom: e.target.value })}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col} md="4" controlId="validation">
//                                 <Form.Label>Prenom</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="text"
//                                     placeholder={prenom}
//                                     value={clientData.prenom} onChange={(e) => setClientData({ ...clientData, prenom: e.target.value })}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col} md="4" controlId="validation">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="email"
//                                     placeholder={email}
//                                     value={clientData.email} onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
//                                 />
//                             </Form.Group>
//                             {/* <Form.Group as={Col} md="4" controlId="validation">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control
//                                     required
//                                     type="password"
//                                     placeholder="Password"
//                                     value={clientData.password} onChange={(e) => setClientData({ ...clientData, password: e.target.value })}
//                                 />
//                             </Form.Group> */}
//                         </Row>
//                         <Row className="mb-3">
//                             <Form.Group as={Col} md="6" controlId="validation">
//                                 <Form.Label>Adresse</Form.Label>
//                                 <Form.Control type="text" placeholder={adresse} value={clientData.adresse} onChange={(e) => setClientData({ ...clientData, adresse: e.target.value })} required />
//                             </Form.Group>
//                             <Form.Group as={Col} md="3" controlId="validation">
//                                 <Form.Label>Pays</Form.Label>
//                                 <Form.Control type="text" placeholder={pays} value={clientData.pays} onChange={(e) => setClientData({ ...clientData, pays: e.target.value })} required />
//                             </Form.Group>
//                         </Row>
//                         <Modal.Footer>
//                             <Button type="submit">Valider l'inscription</Button>
//                             <Button onClick={props.onHide}>Close</Button>
//                         </Modal.Footer>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     );
// }





// export default ModalModifierClient;