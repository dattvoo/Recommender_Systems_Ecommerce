import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../pages/Home/Header'
import { Login } from '../../pages/Login'
import { Content5 } from '../content5'
import { Footer } from '../footer'

export const Layout = (props) => {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === "/login" ? <Login /> : (
                <> <Header />
                    {props.children}
                    <Content5 />
                    <Footer /></>
            )}
        </>
    )
}
