import React, { useEffect, useState } from 'react'
import { getAlumnos } from '../services/CargarData';
import { NavLink } from "react-router-dom";
export const TablaAlumnos = ({ obtenerAlumnos }) => {
    const [alumnos, setaAumnos] = useState();
    useEffect(() => {
        setaAumnos(obtenerAlumnos)
    }, [])

    if (!alumnos) return (<div>Cargando....</div>)

    return (
        <div class="overflow-x-auto">
            <table class="table   w-full">

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

                            <tr key={a.id} className='hover'>
                                <th>#{i + 1}</th>
                                <td><NavLink to={`/alumnos/${a.id}`}>{a.nombre}</NavLink></td>
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
