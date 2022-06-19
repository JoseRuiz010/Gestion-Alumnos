import React, { useContext, useEffect, useState } from 'react'
import { getAlumnos } from '../services/CargarData';
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from '../Context/GlobalContext';
export const TablaAlumnos = ({ obtenerAlumnos }) => {

    const { alumnos, cargarAlumnos } = useContext(GlobalContext)

    const navegacion = useNavigate();

    useEffect(() => {
        cargarAlumnos(obtenerAlumnos)
    }, [alumnos])

    if (!alumnos) return (<div>Cargando....</div>)

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

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
            </table>
        </div>
    )
}
