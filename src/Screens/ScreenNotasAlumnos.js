import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HeaderDatosPersonales } from '../Components/HeaderDatosPersonales';
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
            <HeaderDatosPersonales {...alumno} />
            <div className="mt-1 card rounded-box place-items-center">
                <TablaNotaAlumnos filtro={getNotasAlumnosXMateria(id)} mostrarNombre={false} />
            </div>
        </div>
    )
}

