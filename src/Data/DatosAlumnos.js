import { uid } from 'uid';
export const alumnos = [
    {
        id: uid(9),
        nombre: "Jose",
        apellido: "Ruiz ",
        telefono: "381463721",
        email: "jose@gmail.com ",
        legajo: "44588 ",
        direccion: "Tucuman, Leales"
    },
    {
        id: uid(9),
        nombre: "Carlos",
        apellido: "Ruiz",
        telefono: "3816234808",
        email: "carlos@gmail.com",
        legajo: "455588",
        direccion: "Leales"
    },
    {
        id: uid(9),
        nombre: "Nicolas",
        apellido: "Zurita",
        telefono: "3814569874",
        email: "nico@gmail.com",
        legajo: "43599",
        direccion: "San Miguel de Tucuman"
    },
    {
        id: uid(9),
        nombre: "Hector",
        apellido: "Figueroa",
        telefono: "3814631258",
        email: "hector@gmail.com",
        legajo: "47866",
        direccion: "Lules"
    },
]

export const profesores = [
    {
        id: uid(9),
        nombre: "Zulema",
        apellido: "Romano",
        telefono: "381463721",
        email: "Zulema@gmail.com ",
        legajo: "123456 ",
        direccion: "Tucuman, Leales"
    },
    {
        id: uid(9),
        nombre: "Alicia",
        apellido: "Gomez",
        telefono: "381463721",
        email: "Alicia@gmail.com ",
        legajo: "1223456 ",
        direccion: "Tucuman, Leales"
    },
    {
        id: uid(9),
        nombre: "Marcelo",
        apellido: "Garcia",
        telefono: "381463721",
        email: "marcelo@gmail.com ",
        legajo: "1223456 ",
        direccion: "Tucuman, Leales"
    },
]

export const cursos = [
    {
        id: uid(9),
        descripcion: "Primer Año",
        alumnos: [],
        materia: []
    },
    {
        id: uid(9),
        descripcion: "Segundo Año",
        alumnos: [],
        materia: []
    }
]

export const materias = [
    {
        id: uid(9),
        nombre: "Matematica 1",
        icono: "https://cdn-icons-png.flaticon.com/512/2941/2941603.png",
        profesores: [],
        evaluaciones: []
    },
    {
        id: uid(9),
        nombre: "Lengua",
        icono: "https://ele.chaco.gob.ar/pluginfile.php/920081/course/section/225460/lengua-y-literatura.png",
        profesores: [],
        evaluaciones: []
    },
    {
        id: uid(9),
        nombre: "Fisica",
        icono: "https://i.pinimg.com/736x/e5/ea/be/e5eabe46c0467ab80a05bde5988dd35e.jpg",
        profesores: [],
        evaluaciones: []
    }
]

export const evaluaciones = [
    {
        id: uid(9),
        descripcion: "Primer Parcial",
    },
    {
        id: uid(9),
        descripcion: "Segundo Parcial",
    },
    {
        id: uid(9),
        descripcion: "Tercer Parcial",
    },
]

export const evaluacionesAlumnos = [

]