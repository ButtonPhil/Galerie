import { Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavbarComponent.jsx';
import EternellesPage from './page/EternellesPage.jsx';
import TableauPage from './page/TableauxPage.jsx';






function app() {

    return (

        <>
            <Router>

                <NavBar />

                <Routes>

                    <Route path='/Eternelles' element={< EternellesPage/>} />
                    <Route path='/Tableau' element={<TableauPage />} />

                </Routes>

            </Router>

        </>
    )




}

export default app;