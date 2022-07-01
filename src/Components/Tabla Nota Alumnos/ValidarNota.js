import React from 'react'

export const ValidarNota = (EvaluacionDeMateria, evaluacion) => {

    let nota = "-";
    for (let j = 0; j < evaluacion.length; j++) {

        if (JSON.stringify(EvaluacionDeMateria) === JSON.stringify(evaluacion[j].evaluacion)) {

            nota = evaluacion[j].nota;

        }
    }

    return <td key={nota + Date.now() + Math.random()}>{nota}</td>
}
