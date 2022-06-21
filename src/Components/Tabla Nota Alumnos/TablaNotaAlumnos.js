import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { HeaderDatosPersonales } from '../HeaderDatosPersonales';
import { HeaderNotaAlumnos } from './HeaderNotaAlumnos';
import { TablaNotaAlumnosCuerpo } from './TablaNotaAlumnosCuerpo';

export const TablaNotaAlumnos = ({ filtro, mostrarNombre }) => {
    const { id } = useParams();
    const [notasAlumnos, setnotasAlumnos] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        setnotasAlumnos(filtro);
    }, [id, filtro])

    if (!notasAlumnos) return (<div>Cargando...</div>)

    return (
        <div className='mx-auto w-full md:w-10/12'>

            {
                notasAlumnos.map(evaluaciones => (
                    <div key={evaluaciones} className='shadow-lg p-2' >
                        <HeaderNotaAlumnos materia={evaluaciones.materia.nombre} />
                        {
                            <TablaNotaAlumnosCuerpo evaluaciones={evaluaciones.alumno} materia={evaluaciones.materia} mostrarNombre={mostrarNombre} />
                        }
                    </div>
                ))
            }


        </div>
    )
}



