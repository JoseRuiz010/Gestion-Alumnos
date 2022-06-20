import React from 'react'
import { useParams } from "react-router-dom";
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';
 
import { getNotasFilterByMateria } from '../services/CargarData'
 
const AlumnosPorMateria = () => {
    const { id } = useParams();
    return (
        <div className='w-full p-2 '>
            <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)} mostrarNombre={true} />
        </div>
    )
}

export default AlumnosPorMateria