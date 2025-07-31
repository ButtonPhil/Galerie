import { Route, Router, Routes } from 'react-router-dom';
import './App.css'





function app() {

    return (

        <>
            <Router>

                <Routes>

                    <Route path='/Eternelles' element={<Acceuil />} />

                </Routes>

            </Router>

        </>
    )




}

export default app;