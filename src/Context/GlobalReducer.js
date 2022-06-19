export const GlobalReducer = (globalState, action) => {
    switch (action.type) {
        case "changeStateNewAlumnos":
            return {
                ...globalState,
                stateNewAlumno: !globalState.stateNewAlumno
            }
        case "changeIsOpenNavbar":
            return {
                ...globalState,
                isOpenNavbar: !globalState.isOpenNavbar
            }
        case "DatosGenerados":
            return {
                ...globalState,
                generarDatos: false,
            }
        case "agregarAlumno":
            return {
                ...globalState,
                alumnos: [...globalState.alumnos, action.payload],
            }
        case "cargarAlumnos":
            return {
                ...globalState,
                alumnos: action.payload,
            }
        case "cargarMaterias":
            return {
                ...globalState,
                materias: action.payload,
            }

        default:
            return globalState;
    }
}