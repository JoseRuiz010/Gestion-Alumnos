import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { getAlumnosByID } from '../services/CargarData';

export const ScreenAlumno = () => {
    const { id } = useParams();
    const [alumno, setalumno] = useState();
    const [avatar, setavatar] = useState()
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => setavatar(data.results[0].picture.large))
        id && setalumno(getAlumnosByID(id))
    }, [id])

    if (!alumno) return (<div>Cargando...</div>)
    const { nombre,
        apellido,
        telefono,
        email,
        legajo,
        direccion } = alumno
    return (
        <div className='flex align-middle justify-around mt-8'>

            <div className="card w-96  bg-base-100 shadow-xl">

                <figure className="px-10 pt-10">
                    <img src={avatar} alt="Shoes" class="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-5">{nombre + " " + apellido}</h2>
                    <span><Link to={`/alumnos/nota/${id}`}>Ver notas</Link> </span>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Legajo:</span> <span>{legajo}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Telefono:</span> <span>{telefono}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Email:</span> <span>{email}</span></div>
                    <div className='flex justify-start align-middle  w-10/12 px-4'> <span className='font-bold'>Direccion:</span> <span>{direccion}</span></div>

                </div>


            </div>

        </div>
    )
}
