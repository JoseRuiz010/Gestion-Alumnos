import React, { useEffect } from 'react'
import { ArmarDatos, getAlumnos, getCursos, getEvaluaciones, getEvaluacionesAlumnos, getMaterias, getProfesores } from '../services/CargarData'

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
    }, [])

    return (
        <div>ScreenAlumnos</div>
    )
}
