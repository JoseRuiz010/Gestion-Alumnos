import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { HeaderDatosPersonales } from '../Components/HeaderDatosPersonales';
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';
 
import { getMateriasById, getNotasFilterByMateria } from '../services/CargarData'
 
const AlumnosPorMateria = () => {
    const { id } = useParams();
    const [materia, setmateria] = useState()
    useEffect(() => {
      setmateria(getMateriasById(id))
     }, [id])
    if(!materia) return (<div>Cargando...</div>)
     const {profesores}=materia
     
    return (
        <div className='w-full p-2 '>
            <HeaderDatosPersonales {...profesores[0]}/>
            <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)} mostrarNombre={true} />
        </div>
    )
}

export default AlumnosPorMateria