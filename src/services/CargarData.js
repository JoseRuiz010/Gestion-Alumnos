import { cursos, evaluaciones, evaluacionesAlumnos, usuarios } from "../Data/DatosAlumnos"
import { uid } from 'uid';


let curso;
let usuario;

const actualizarUsuario = () => {
    usuarios.find(u => u.id === usuario.id).curso = curso
}

export const ValidarLogin = (user) => {
    console.log(user);
    usuario = usuarios.find(u => u.username === user.username & u.password === user.password)
    console.log('====================================');
    console.log(usuario);
    console.log('====================================');

    if (usuario) {
        curso = usuario.curso
    }

    return usuario
}



export const getAlumnos = () => {
    return (curso.alumnos)
}


export const getNotasAlumnosXMateria = (id) => {
    const notasXMateria = [];
    curso.materias.map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: curso.alumnos.filter(a => {
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
    curso?.materias.filter(m => m.id === id).map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: curso.alumnos.map(a => (
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
    console.log(id, idEvaluacion);
    curso.materias.filter(m => m.id === id).map(m => {

        notasXMateria.push(
            {
                materia: m,
                alumno: curso.alumnos.map(a => (
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
    console.log(notasXMateria);
    return (notasXMateria[0].alumno.map(a => a.evaluaciones.filter(eff => eff.evaluacion.id === idEvaluacion)));
    // return notasXMateria;
}


export const CargarNotaMateria = (notas, idMateria, idEvaluacion) => {
    const notasXMateria = [];
    let idAlumnos = []
    console.log("H");
    idAlumnos = (Object.keys(notas))
    console.log("idev", idEvaluacion);
    let materia = getMateriasById(idMateria);
    let evaluacion = getEvaluacionesByIdByMateria(idEvaluacion, idMateria);
    let alumnos = idAlumnos.map(a => getAlumnosByID(a))
    let notasDeAlu = idAlumnos.map(a => notas[a])

    idAlumnos.map((a, i) => {
        evaluacionesAlumnos.push(
            {
                id: uid(9),
                evaluacion: evaluacion,
                alumno: alumnos[i],
                materia: materia,
                nota: parseInt(notasDeAlu[i])
            }
        )
        console.log({
            id: uid(9),
            evaluacion: evaluacion,
            alumno: alumnos[i],
            materia: materia,
            nota: parseInt(notasDeAlu[i])
        });
    })

    console.log(notasXMateria);
    actualizarUsuario();
}

export const actualizarNotas = (notas, idMateria, idEvaluacion) => {
    console.log(idMateria);
    console.log(idEvaluacion);
    console.log(notas);
    let idAlumnos = (Object.keys(notas));
    console.log(idAlumnos.includes("bffaf5f41d"), "bffaf5f41");
    evaluacionesAlumnos.map((e, i) => {

        if (e.materia.id === idMateria & e.evaluacion.id == idEvaluacion & idAlumnos.includes(e.alumno.id)) {
            e.nota = parseInt(notas[e.alumno.id])
            console.log(e);
            return e
        }
        return e
    })
    actualizarUsuario();
}


export const getAlumnosByID = (id) => {

    return curso.alumnos.find(a => a.id === id)
}
export const agregarAlumnoApi = (alumno) => {

    return curso.alumnos.push(alumno);
}

export const getProfesores = () => {
    return (curso?.materias?.flatMap(({ profesores, nombre, id }) => profesores.flatMap(p => ({ ...p, nombreMateria: nombre, idMateria: id }))))
}
export const getCursos = () => {
    return (cursos)
}
export const getMaterias = () => {
    return (curso.materias)
}
export const getMateriasById = (id) => {
    return (curso.materias.find(m => m.id === id));
}
export const agregarEvaluacion = (idMateria, newEvaluacion) => {
    console.log('====================================');
    console.log(curso.materias.find(m => m.id === idMateria));
    console.log('====================================');
    (curso.materias.find(m => m.id === idMateria).evaluaciones.push({ ...newEvaluacion, id: (Date.now() + Math.random()).toString() }))
    actualizarUsuario();

}
export const getEvaluaciones = () => {
    return (evaluaciones)
}
export const getEvaluacionesById = (id) => {
    return (evaluaciones.find(m => m.id === id))
}
export const getEvaluacionesByIdByMateria = (idEv, idMateria) => {
    const materia = getMateriasById(idMateria);
    const evaluaciones = materia.evaluaciones
    console.log(materia);
    console.log(evaluaciones.find(m => m.id == idEv));
    return evaluaciones.find(m => m.id == idEv)
    //return (.evaluaciones.find(m => m.id === idEv))
    //curso.materias.evaluaciones
}
export const getEvaluacionesAlumnos = () => {
    return (evaluacionesAlumnos)
}

export const ArmarDatos = () => {


}