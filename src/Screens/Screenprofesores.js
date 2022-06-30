import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CardDatosPErsonales } from '../Components/CardDatosPErsonales';
import { MensajeError } from '../Components/formularioAlumno/MensajeError';
import { useFetch } from '../Hooks/useFetch';


export const Screenprofesores = () => {


    const { data = [], loading, error } = useFetch("/profesor/all");


    return (
        <div className='flex flex-wrap gap-5 align-middle justify-center mt-8'>
            {
                loading ? <div>Cargando...</div> :
                    data.length < 1 ? <MensajeError mensaje={" No hay Profesores asignados"} /> :
                        data.map((profesor) => (
                            <CardDatosPErsonales {...profesor} />
                        ))
            }
            {
                error && <MensajeError mensaje={error} />
            }


        </div>
    )
}
