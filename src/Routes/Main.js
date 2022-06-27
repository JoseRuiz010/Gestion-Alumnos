import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ScreenLogin from '../Screens/ScreenLogin'


import NavegacionPrincipal from './NavegacionPrincipal'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const Main = () => {
    return (
        <Routes>
            <Route path={'/login'}
                element={
                    <PublicRoute>
                        <ScreenLogin />
                    </PublicRoute>} />
            <Route path={'/*'}
                element={
                    <PrivateRoute>
                        <NavegacionPrincipal />
                    </PrivateRoute>
                } />
        </Routes>
    )
}
