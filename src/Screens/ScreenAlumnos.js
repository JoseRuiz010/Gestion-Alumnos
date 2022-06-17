import React from 'react'
import { TablaAlumnos } from '../Components/TablasAlumnos';
import {getAlumnos, getNotasAlumnosXMateria } from '../services/CargarData'

export const ScreenAlumnos = () => {
    

    return (
        <div>ScreenAlumnos

            <div className='p-3'>
                <TablaAlumnos obtenerAlumnos={getAlumnos} />
            </div>
        </div>
    )
}
