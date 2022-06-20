import React from 'react'
import { ValidarNota } from './ValidarNota';

export const NotasTabla = ({ evaluaciones, materia, mostrarNombre }) => {

    return (
        <>
            {
                evaluaciones.map((eva, i) => (
                    <tr key={i + Date.now()+eva.alumnoNombre.nombre} className='text-center'>
                        <th>#{i + 1}</th>
                        {mostrarNombre && <td>{eva?.alumnoNombre?.nombre}</td>}
                        {
                            materia.evaluaciones.map(materia => ValidarNota(materia, eva.evaluaciones))
                        }
                        <td>{
                            eva.evaluaciones.length > 0 ?
                                (eva?.evaluaciones?.filter(({ nota }) => nota !== 0).map(({ nota }) => nota).reduce((previous, current) => (current) += (previous)) / eva.evaluaciones.filter(({ nota }) => nota !== 0).length).toFixed(1)
                                : "No tiene notas"
                        }
                        </td>
                    </tr>

                ))
            }
        </>
    )
}
