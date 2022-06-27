import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CardDatosPErsonales } from '../Components/CardDatosPErsonales';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { getProfesores } from '../services/CargarData';

export const Screenprofesores = () => {

    const [profesores, setProfesores] = useState();

    useEffect(() => {
        setProfesores(getProfesores())
    }, [])



    return (
        <div className='flex flex-wrap gap-5 align-middle justify-center mt-8'>
            {!profesores ? <MensajeError mensaje={" No hay Profesores asignados"} /> :
                profesores.map((profesor) => (
                    <CardDatosPErsonales {...profesor} />
                ))
            }

        </div>
    )
}
