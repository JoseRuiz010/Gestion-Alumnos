import { cursos, evaluaciones, evaluacionesAlumnos } from "../Data/DatosAlumnos"
import { uid } from 'uid';
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
    cursos[0].materias.filter(m => m.id === id).map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: cursos[0].alumnos.map(a => (
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
export const getNotasFilterByMateriaYEvaluacion = (id, idEvaluacion) => {
    const notasXMateria = [];
    cursos[0].materias.filter(m => m.id === id).map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: cursos[0].alumnos.map(a => (
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
    return (notasXMateria[0].alumno.map(a => a.evaluaciones.filter(eff => eff.evaluacion.id === idEvaluacion)));
    // return notasXMateria;
}


export const CargarNotaMateria = (notas, idMateria, idEvaluacion) => {
    const notasXMateria = [];
    let idAlumnos = []
    console.log("H");
    idAlumnos = (Object.keys(notas))

    let materia = getMateriasById(idMateria);
    let evaluacion = getEvaluacionesById(idEvaluacion);
    let alumnos = idAlumnos.map(a => getAlumnosByID(a))
    let notasDeAlu = idAlumnos.map(a => notas[a])

    // console.log(materia);
    // console.log(evaluacion);
    // console.log(alumnos);
    // console.log(notasDeAlu);

    idAlumnos.map((a, i) => {
        evaluacionesAlumnos.push(
            {
                id: uid(9),
                evaluacion: evaluacion,
                alumno: alumnos[i],
                materia: materia,
                nota:parseInt(notasDeAlu[i])
            }
        )
    })

    console.log(notasXMateria);
    /*
    ,
    */


}


















export const getAlumnosByID = (id) => {

    return cursos[0].alumnos.find(a => a.id === id)
}
export const agregarAlumnoApi = (alumno) => {

    return cursos[0].alumnos.push(alumno);
}

export const getProfesores = () => {
    return (cursos[0].materias.flatMap(({ profesores, nombre, id }) => profesores.flatMap(p => ({ ...p, nombreMateria: nombre, idMateria: id }))))
}
export const getCursos = () => {
    return (cursos)
}
export const getMaterias = () => {
    return (cursos[0].materias)
}
export const getMateriasById = (id) => {
    return (cursos[0].materias.find(m => m.id === id));
}
export const getEvaluaciones = () => {
    return (evaluaciones)
}
export const getEvaluacionesById = (id) => {
    return (evaluaciones.find(m => m.id === id))
}
export const getEvaluacionesAlumnos = () => {
    return (evaluacionesAlumnos)
}

export const ArmarDatos = () => {


}