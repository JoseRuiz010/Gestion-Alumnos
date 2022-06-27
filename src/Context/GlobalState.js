import React, { useReducer } from 'react'
import { agregarAlumnoApi } from '../services/CargarData'
import { GlobalContext } from './GlobalContext'
import { GlobalReducer } from './GlobalReducer'
const initialState = {
    stateNewAlumno: false,
    isOpenNavbar: false,
    generarDatos: true,
    alumnos: [],
    materias: null,
    usuario: null
}
export const GlobalStateProvider = ({ children }) => {
    const [stateGlobal, dispatch] = useReducer(GlobalReducer, initialState)

    const onLogin = (user) => {
        dispatch({
            type: "login",
            payload: user
        });
    }
    const onLogout = () => {
        dispatch({
            type: "logout",
        });
    }

    const changeStateNewAlumno = () => {
        dispatch({
            type: "changeStateNewAlumnos",
        })
    }
    const changeIsOpenNavbar = () => {
        dispatch({
            type: "changeIsOpenNavbar",
        })
    }
    const DatosGenerados = () => {
        dispatch({
            type: "DatosGenerados",
        })
    }
    const agregarAlumno = (alumno) => {
        agregarAlumnoApi(alumno);
        dispatch({
            type: "agregarAlumno",
            payload: alumno
        });
    }
    const agregarMateria = (alumno) => {
        dispatch({
            type: "agregarAlumno",
            payload: alumno
        })
    }
    const cargarMaterias = (materias) => {



        dispatch({
            type: "cargarMaterias",
            payload: materias
        })
    }
    const cargarAlumnos = (alumnos) => {
        dispatch({
            type: "cargarAlumnos",
            payload: alumnos
        })
    }


    return (
        <GlobalContext.Provider value={{
            stateNewAlumno: stateGlobal.stateNewAlumno,
            isOpenNavbar: stateGlobal.isOpenNavbar,
            generarDatos: stateGlobal.generarDatos,
            alumnos: stateGlobal.alumnos,
            materias: stateGlobal.materias,
            usuario: stateGlobal.usuario,
            changeStateNewAlumno,
            changeIsOpenNavbar,
            DatosGenerados,
            agregarAlumno,
            agregarMateria,
            cargarMaterias,
            cargarAlumnos,
            onLogin,
            onLogout
        }} >
            {children}
        </GlobalContext.Provider>
    )
}
