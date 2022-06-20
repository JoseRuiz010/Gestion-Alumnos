import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const CardDatosPErsonales = ({ nombre,
    apellido,
    telefono,
    email,
    legajo,
    direccion,nombreMateria,idMateria}) => {
        const [avatar, setavatar] = useState()
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => setavatar(data.results[0].picture.large))
            
    }, [])
  return (
    <div className="card w-80  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={avatar} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-5">{nombre + " " + apellido}</h2>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Legajo: </span> <span>{legajo}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Telefono:</span> <span>{telefono}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Email:</span> <span>{email}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Direccion:</span><span>{direccion}</span></div>
                    {nombreMateria&&idMateria&& <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Materia:</span><Link to={`/materias/${idMateria}`}>{ nombreMateria}</Link></div>}
                </div>
            </div>
  )
}
