import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { HeaderDatosPersonales } from '../Components/HeaderDatosPersonales';
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';

import { getMateriasById, getNotasFilterByMateria } from '../services/CargarData'

const AlumnosPorMateria = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [materia, setmateria] = useState()
    useEffect(() => {
        setmateria(getMateriasById(id))
    }, [id])
    if (!materia) return (<div>Cargando...</div>)
    const { profesores } = materia

    return (
        <div className='w-full p-2'>
            <HeaderDatosPersonales {...profesores[0]} />
            <div className="flex justify-around md:w-10/12  mx-auto">
                <button className="btn btn-outline btn-info m-3" onClick={() => navigate(`/materias/cargarNotas/${id}`)}>Cargar Notas</button>
                <button className="btn btn-outline btn-info m-3" onClick={() => navigate(`/materias/cargarNotas/${id}`)}>Agregar Evaluacion</button>
            </div>

            <TablaNotaAlumnos filtro={getNotasFilterByMateria(id)} mostrarNombre={true} />
        </div>
    )
}

export default AlumnosPorMateria