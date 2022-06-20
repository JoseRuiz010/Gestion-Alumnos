import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TablaNotaAlumnos } from '../Components/Tabla Nota Alumnos/TablaNotaAlumnos';
 import { getAlumnosByID, getNotasAlumnosXMateria } from '../services/CargarData';

export const ScreenNotasAlumnos = () => {
    const { id } = useParams();
    const [alumno, setalumno] = useState();

    useEffect(() => {
        setalumno(getAlumnosByID(id));
    }, [])


    if (!alumno) return (<div>Cargando...</div>)
    return (
        <div className="flex pb-7 flex-col mt-3 px-2 w-full max-w-7xl mx-auto  ">
            <div className="grid mb-3 grid-cols-2 w-full mx-auto md:grid-cols-3 p-3 md:w-10/12 gap-2 card bg-base-200 rounded-box">

                <div className='mx-auto'>
                    <h1><span className='font-bold'>Nombre: </span>{alumno.nombre + " " + alumno.apellido}</h1>
                </div>
                <div className='mx-auto'>
                    <h1> <span className='font-bold'>Legajo:</span> {alumno.legajo}</h1>
                </div>
                <div className='mx-auto'>
                    <h1><span className='font-bold'>Email:</span> {alumno.email}</h1>
                </div>
            </div>
            <hr />

            <div className="mt-1 card rounded-box place-items-center">
                <TablaNotaAlumnos filtro={getNotasAlumnosXMateria(id)} mostrarNombre={false} />
            </div>
        </div>
    )
}

