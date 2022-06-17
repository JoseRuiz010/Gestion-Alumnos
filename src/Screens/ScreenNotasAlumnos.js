import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { TablaNotaAlumnos } from '../Components/TablaNotaAlumnos';
import { getNotasAlumnosXMateria } from '../services/CargarData';

export const ScreenNotasAlumnos = ({filtro}) => {
    const { id } = useParams();
 
    return (
        <div>
            <TablaNotaAlumnos filtro={getNotasAlumnosXMateria(id)}/>
        </div>
    )
}

