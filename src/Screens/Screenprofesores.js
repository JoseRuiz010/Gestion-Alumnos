import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CardDatosPErsonales } from '../Components/CardDatosPErsonales';
import { getProfesores } from '../services/CargarData';

export const Screenprofesores = () => {
  
    const [profesores, setProfesores] = useState();
   
    useEffect(() => {
        setProfesores(getProfesores())
    }, [])

    if (!profesores) return (<div>Cargando...</div>)
   
    return (
        <div className='flex flex-wrap gap-5 align-middle justify-center mt-8'>
              {
                profesores.map((profesor)=>(
                    <CardDatosPErsonales {...profesor}/>        
                  ))
              }

        </div>
    )
}
