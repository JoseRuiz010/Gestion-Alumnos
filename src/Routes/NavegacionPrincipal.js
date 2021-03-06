import React from 'react'
import {

    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../Components/Navbar';
import AlumnosPorMateria from '../Screens/AlumnosPorMateria';
import { ScreenAlumno } from '../Screens/ScreenAlumno';
import { ScreenAlumnos } from '../Screens/ScreenAlumnos';
import { ScreenCargarNotas } from '../Screens/ScreenCargarNotas';
import { ScreenHome } from '../Screens/ScreenHome';
import ScreenLogin from '../Screens/ScreenLogin';
import { ScreenNotasAlumnos } from '../Screens/ScreenNotasAlumnos';
import { Screenprofesores } from '../Screens/Screenprofesores';
const NavegacionPrincipal = () => {
    return (
        <>
            <Navbar />
            <Routes>
                {/* <Route path="/login" element={<ScreenLogin />} /> */}
                <Route path="/" element={<ScreenHome />} />
                <Route path="/alumnos" element={<ScreenAlumnos />} />
                <Route path="/alumnos/:id" element={<ScreenAlumno />} />
                <Route path="/alumnos/nota/:id" element={<ScreenNotasAlumnos />} />
                <Route path="/materias" element={<ScreenHome />} />
                <Route path="/materias/:id" element={<AlumnosPorMateria />} />
                <Route path="/materias/cargarNotas/:id" element={<ScreenCargarNotas />} />
                <Route path="/profesores" element={<Screenprofesores />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />

            </Routes>
        </>
    )
}

export default NavegacionPrincipal