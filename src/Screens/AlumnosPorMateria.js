import React from 'react'
import { useParams } from "react-router-dom";
const AlumnosPorMateria = () => {
    const { id } = useParams();
    return (
        <div>AlumnosPorMateria {id}</div>
    )
}

export default AlumnosPorMateria