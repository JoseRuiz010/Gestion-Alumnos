import { uid } from "uid"
import { alumnos, profesores, cursos, materias, evaluaciones, evaluacionesAlumnos } from "../Data/DatosAlumnos"

export const getAlumnos = () => {
    return (alumnos)
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
        materias[0].evaluaciones.map(
            e => (
                evaluacionesAlumnos.push({
                    id: uid(9),
                    evaluacion: e.id,
                    alumno: a.id,
                    nota: "10"
                })
            )
        )

    ))


}