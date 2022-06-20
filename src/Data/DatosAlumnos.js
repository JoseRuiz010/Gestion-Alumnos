import { uid } from 'uid';
export const alumnos = [
    {
        id:"356511af6",
        nombre: "Jose",
        apellido: "Ruiz ",
        telefono: "381463721",
        email: "jose@gmail.com ",
        legajo: "44588",
        direccion: "Tucuman, Leales"
    },
    {
        id:"bffaf5f41",
        nombre: "Carlos",
        apellido: "Ruiz",
        telefono: "3816234808",
        email: "carlos@gmail.com",
        legajo: "455588",
        direccion: "Leales"
    },
    {
        id: "ffaf5f417",
        nombre: "Nicolas",
        apellido: "Zurita",
        telefono: "3814569874",
        email: "nico@gmail.com",
        legajo: "43599",
        direccion: "San Miguel de Tucuman"
    },
    {
        id:"d57237114",
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


export const evaluaciones = [
    {
        id:"qwer784",
        descripcion: "Primer Parcial",
    },
    {
        id:"asdfrt14",
        descripcion: "Segundo Parcial",
    },
    {
        id:"asdfg12",
        descripcion: "Tercer Parcial",

    },
    {
        id:"asdfg1ssd2",
        descripcion: "cuarto Parcial",
    },
]
 
export const materias = [
    {
        id:"aaa951a8c",
        nombre: "Matematica 1",
        icono: "https://cdn-icons-png.flaticon.com/512/2941/2941603.png",
        profesores: [],
        evaluaciones: evaluaciones
    },
    {
        id: "241cc2935",
        nombre: "Lengua",
        icono: "https://ele.chaco.gob.ar/pluginfile.php/920081/course/section/225460/lengua-y-literatura.png",
        profesores: [],
        evaluaciones: evaluaciones
    },
    {
        id: "41cc29356",
        nombre: "Fisica",
        icono: "https://i.pinimg.com/736x/e5/ea/be/e5eabe46c0467ab80a05bde5988dd35e.jpg",
        profesores:[],
        evaluaciones: evaluaciones
    }
]

export const cursos = [
    {
        id: "uid(9)123",
        descripcion: "Primer Año",
        alumnos: alumnos,
        materias: materias
    },
    {
        id: "iuhnuid(9)",
        descripcion: "Segundo Año",
        alumnos: [],
        materia: []
    }
]
export const evaluacionesAlumnos = [
{
    id: "1",
    evaluacion:evaluaciones[0],
    alumno: alumnos[0],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "2",
    evaluacion:evaluaciones[1],
    alumno: alumnos[0],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "3",
    evaluacion:evaluaciones[2],
    alumno: alumnos[0],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "4",
    evaluacion:evaluaciones[0],
    alumno: alumnos[0],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "5",
    evaluacion:evaluaciones[1],
    alumno: alumnos[0],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "6",
    evaluacion:evaluaciones[2],
    alumno: alumnos[0],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "7",
    evaluacion:evaluaciones[0],
    alumno: alumnos[0],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "8",
    evaluacion:evaluaciones[1],
    alumno: alumnos[0],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "9",
    evaluacion:evaluaciones[2],
    alumno: alumnos[0],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
// Alumno ############################################
{
    id: "10",
    evaluacion:evaluaciones[0],
    alumno: alumnos[1],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "11",
    evaluacion:evaluaciones[1],
    alumno: alumnos[1],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "12",
    evaluacion:evaluaciones[2],
    alumno: alumnos[1],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "13",
    evaluacion:evaluaciones[0],
    alumno: alumnos[1],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "14",
    evaluacion:evaluaciones[1],
    alumno: alumnos[1],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "15",
    evaluacion:evaluaciones[2],
    alumno: alumnos[1],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "16",
    evaluacion:evaluaciones[0],
    alumno: alumnos[1],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "17",
    evaluacion:evaluaciones[1],
    alumno: alumnos[1],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "18",
    evaluacion:evaluaciones[2],
    alumno: alumnos[1],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
// Alumno ############################################
{
    id: "19",
    evaluacion:evaluaciones[0],
    alumno: alumnos[2],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "20",
    evaluacion:evaluaciones[1],
    alumno: alumnos[2],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "21",
    evaluacion:evaluaciones[2],
    alumno: alumnos[2],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "22",
    evaluacion:evaluaciones[0],
    alumno: alumnos[2],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "23",
    evaluacion:evaluaciones[1],
    alumno: alumnos[2],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "24",
    evaluacion:evaluaciones[2],
    alumno: alumnos[2],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "25",
    evaluacion:evaluaciones[0],
    alumno: alumnos[2],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "26",
    evaluacion:evaluaciones[1],
    alumno: alumnos[2],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "27",
    evaluacion:evaluaciones[2],
    alumno: alumnos[2],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
// Alumno ############################################
{
    id: "28",
    evaluacion:evaluaciones[0],
    alumno: alumnos[3],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "29",
    evaluacion:evaluaciones[1],
    alumno: alumnos[3],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "30",
    evaluacion:evaluaciones[2],
    alumno: alumnos[3],
    materia: materias[0],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "31",
    evaluacion:evaluaciones[0],
    alumno: alumnos[3],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "32",
    evaluacion:evaluaciones[1],
    alumno: alumnos[3],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "33",
    evaluacion:evaluaciones[2],
    alumno: alumnos[3],
    materia: materias[1],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "34",
    evaluacion:evaluaciones[0],
    alumno: alumnos[3],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "35",
    evaluacion:evaluaciones[1],
    alumno: alumnos[3],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
{
    id: "36",
    evaluacion:evaluaciones[2],
    alumno: alumnos[3],
    materia: materias[2],
    nota: Math.floor(Math.random() * (10 - 1) + 1)
},
// Alumno ############################################

]