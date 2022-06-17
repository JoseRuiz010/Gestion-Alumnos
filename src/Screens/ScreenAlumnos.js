import React, { useEffect } from 'react'
import { TablaAlumnos } from '../Components/TablasAlumnos';
import { ArmarDatos, getAlumnos, getCursos, getEvaluaciones, getEvaluacionesAlumnos, getMaterias, getNotasAlumnosXMateria, getProfesores } from '../services/CargarData'

export const ScreenAlumnos = () => {
    useEffect(() => {
        const alumnos = getAlumnos();
        console.log(ArmarDatos());
        console.log(alumnos);
        console.log(getProfesores());
        console.log(getCursos());
        console.log(getMaterias());
        console.log(getEvaluaciones());
        console.log(getEvaluacionesAlumnos());
        console.log('====================================');
        console.log(getNotasAlumnosXMateria());
        console.log('====================================');
    }, [])

    return (
        <div>ScreenAlumnos

            <div className='p-3'>
                <TablaAlumnos obtenerAlumnos={getAlumnos} />
            </div>
        </div>
    )
}
