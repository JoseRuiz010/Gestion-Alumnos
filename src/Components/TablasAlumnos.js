import React, { useContext, useEffect, useState } from 'react'
import { getAlumnos } from '../services/CargarData';
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from '../Context/GlobalContext';
import { MensajeError } from './formularioAlumno/MensajeError';
export const TablaAlumnos = ({ obtenerAlumnos }) => {

    const { alumnos, cargarAlumnos } = useContext(GlobalContext)
    const [loading, setLoading] = useState(false)
    const navegacion = useNavigate();

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            cargarAlumnos(obtenerAlumnos)
            setLoading(false)
        }, 3000);
    }, [alumnos])

    if (loading) return (<progress class="progress  mt-10"></progress>)

    return (
        <div className="overflow-x-auto ">

            {alumnos.length < 1 ? <MensajeError mensaje={" No hay alumnos asignados"} /> :
                (<table className="table w-full">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Legajo</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            alumnos.map((a, i) => (

                                <tr key={a.id + i} onClick={() => navegacion(`/alumnos/${a.id}`)} className='hover hover:cursor-pointer'>
                                    <th>#{i + 1}</th>
                                    <td>{a.nombre}</td>
                                    <td>{a.apellido}</td>
                                    <td>{a.legajo}</td>
                                    <td>{a.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>)
            }
        </div>
    )
}
