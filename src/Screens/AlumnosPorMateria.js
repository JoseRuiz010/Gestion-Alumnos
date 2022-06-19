import React from 'react'
import { useParams } from "react-router-dom";
import { ScreenNotasAlumnos } from './ScreenNotasAlumnos';
import { getNotasFilterByMateria } from '../services/CargarData'
import { TablaNotaAlumnos } from '../Components/TablaNotaAlumnos';

const AlumnosPorMateria = () => {
    const { id } = useParams();
    return (
        <div className='w-full p-2 '>
            <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)} mostrarNombre={true} />
        </div>
    )
}

export default AlumnosPorMateria