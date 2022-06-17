import { uid } from "uid"
import { alumnos, profesores, cursos, materias, evaluaciones, evaluacionesAlumnos } from "../Data/DatosAlumnos"

export const getAlumnos = () => {
    return (alumnos)
}


export const getNotasAlumnosXMateria = (id) => {
    const notasXMateria = [];
    materias.map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: alumnos.filter(a=>{
                    if(id===""){
                        return a;
                    }else{
                        return a.id===id;
                    }
                }).map(a => (
                    {
                        alumnoNombre: a,
                        evaluaciones: evaluacionesAlumnos.filter(eva => (
                            eva.alumno === a.id && eva.materia === m.id
                        ))
                    }
                ))
            }
        )


    })
    return notasXMateria;
}
export const getNotasFilterByMateria = (id) => {
    const notasXMateria = [];
    materias.filter(m=>m.id===id).map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: alumnos.map(a => (
                    {
                        alumnoNombre: a,
                        evaluaciones: evaluacionesAlumnos.filter(eva => (
                            eva.alumno === a.id && eva.materia === m.id
                        ))
                    }
                ))
            }
        )


    })
    return notasXMateria;
}

export const getAlumnosByID = (id) => {

    return alumnos.find(a => a.id === id)
}

export const getProfesores = () => {
    return (profesores)
}
export const getCursos = () => {
    return (cursos)
}
export const getMaterias = () => {
    return (materias)
}
export const getEvaluaciones = () => {
    return (evaluaciones)
}
export const getEvaluacionesAlumnos = () => {
    return (evaluacionesAlumnos)
}

export const ArmarDatos = () => {
    
    materias.map((m, i) => m.profesores.push(profesores[i]));
    materias.map((m, i) => m.evaluaciones.push(...evaluaciones));
    
    alumnos.map(a => (
        materias.map(m => (
            m.evaluaciones.map(e => (
                evaluacionesAlumnos.push(
                    {
                        id: uid(9),
                        evaluacion: e,
                        alumno: a.id,
                        materia: m.id,
                        nota: Math.floor( Math.random()*(10 - 1) + 1)
                    }
                )
            ))
        ))

    ))

}