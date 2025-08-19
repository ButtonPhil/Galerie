import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavbarComponent.jsx';
import EternellesPage from './page/EternellesPage.jsx';
import ProfilePage from './page/ProfilePage.jsx';
import AjoutArticlePage from './page/AjoutArticlePage.jsx';
import GaleriePage from './page/GaleriePage.jsx';






function app() {

    return (

        <>
            <Router>

                <NavBar />

                <Routes>

                    <Route path='/Eternelles' element={< EternellesPage/>} />
                    <Route path='/Galerie' element={<GaleriePage />} />
                    <Route path='/Profile' element={<ProfilePage />} />
                    <Route path='/AjoutArticle' element={<AjoutArticlePage />} />

                </Routes>

            </Router>

        </>
    )




}

export default app;