import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

export const PublicRoute = ({ children }) => {
    const { usuario } = useContext(GlobalContext);


    return (usuario ?
        <Navigate to={'/'} /> :
        children
    )
}
