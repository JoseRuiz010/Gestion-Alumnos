import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

export const PrivateRoute = ({ children }) => {
    const { usuario } = useContext(GlobalContext)

    return (usuario ?
        children
        :
        <Navigate to={'/login'} />
    )
}
