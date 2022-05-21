import { Home } from './../../Containers/home';
import Inscription from './../Inscription/Inscription.js';
import Connexion from './../Connexion/Connexion'
import { ImcDataWeek } from './../../Containers/imc-data-week'
import { ImcDataMonth } from './../../Containers/imc-data-month'
import { ImcDataTrimester } from './../../Containers/imc-data-trimester'
import { ImcDataNew } from './../../Containers/imc-data-new';
import { Route, Routes } from 'react-router-dom';

export function RoutesImc() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/connexion" element={<Connexion />}></Route>
                <Route path="/registration" element={<Inscription />}></Route>
                <Route path="/week" element={<ImcDataWeek />}></Route>
                <Route path="/month" element={<ImcDataMonth />}></Route>
                <Route path="/trimester" element={<ImcDataTrimester />}></Route>
                <Route path="/addimc" element={<ImcDataNew />}></Route>
            </Routes>
        </>
    );
}
