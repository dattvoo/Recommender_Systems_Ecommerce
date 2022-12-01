import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../../pages/Home/Header'
import { Login } from '../../pages/Login'
import { Content5 } from '../content5'
import { Footer } from '../footer'

export const Layout = (props) => {
    // console.log(props.children.props.children[0].props.path);
    const { pathname } = useLocation();
    console.log("🚀 ~ file: index.js ~ line 10 ~ Layout ~ pathname", pathname)
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
