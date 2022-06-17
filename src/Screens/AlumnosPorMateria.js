import React from 'react'
import { useParams } from "react-router-dom";
import { ScreenNotasAlumnos } from './ScreenNotasAlumnos';
import {  getNotasFilterByMateria } from '../services/CargarData'
import { TablaNotaAlumnos } from '../Components/TablaNotaAlumnos';

const AlumnosPorMateria = () => {
    const { id } = useParams();
    return (
        <div>AlumnosPorMateria {id}
        <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)}/>
        </div>
    )
}

export default AlumnosPorMateria