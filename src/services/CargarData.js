 import { cursos, evaluaciones, evaluacionesAlumnos } from "../Data/DatosAlumnos"

export const getAlumnos = () => {
    return (cursos[0].alumnos)
}


export const getNotasAlumnosXMateria = (id) => {
    const notasXMateria = [];
    cursos[0].materias.map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: cursos[0].alumnos.filter(a => {
                    if (id === "") {
                        return a;
                    } else {
                        return a.id === id;
                    }
                }).map(a => (
                    {
                        alumnoNombre: a,
                        evaluaciones: evaluacionesAlumnos.filter(eva => (
                            eva.alumno.id === a.id && eva.materia.id === m.id
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
    cursos[0].materias.filter(m => m.id === id).map(m =>{

        notasXMateria.push(
            {
                materia: m,
                alumno:cursos[0].alumnos.map(a => (
                    {
                        alumnoNombre: a,
                        evaluaciones: evaluacionesAlumnos.filter(eva => (
                            eva.alumno.id === a.id && eva.materia.id === m.id
                        ))
                    }
                ))
            }
        )


    })
    return notasXMateria;
}

export const getAlumnosByID = (id) => {

    return cursos[0].alumnos.find(a => a.id === id)
}
export const agregarAlumnoApi = (alumno) => {

    return cursos[0].alumnos.push(alumno);
}

export const getProfesores = () => {
    return(cursos[0].materias.flatMap(({profesores,nombre,id})=>profesores.flatMap(p=>({...p,nombreMateria:nombre,idMateria:id}))))
}
export const getCursos = () => {
    return (cursos)
}
export const getMaterias = () => {
    return (cursos[0].materias)
}
export const getMateriasById = (id) => {
    return (cursos[0].materias.find(m=>m.id===id));
}
export const getEvaluaciones = () => {
    return (evaluaciones)
}
export const getEvaluacionesAlumnos = () => {
    return (evaluacionesAlumnos)
}

export const ArmarDatos = () => {

    
}