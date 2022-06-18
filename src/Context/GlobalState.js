import React, { useReducer } from 'react'
import { GlobalContext } from './GlobalContext'
import { GlobalReducer } from './GlobalReducer'
const initialState = {
    stateNewAlumno: false,
    isOpenNavbar: false,
    generarDatos: true,
    alumnos: []
}
export const GlobalStateProvider = ({ children }) => {
    const [stateGlobal, dispatch] = useReducer(GlobalReducer, initialState)


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

    return (
        <GlobalContext.Provider value={{
            stateNewAlumno: stateGlobal.stateNewAlumno,
            isOpenNavbar: stateGlobal.isOpenNavbar,
            generarDatos: stateGlobal.generarDatos,
            changeStateNewAlumno,
            changeIsOpenNavbar,
            DatosGenerados
        }} >
            {children}
        </GlobalContext.Provider>
    )
}
