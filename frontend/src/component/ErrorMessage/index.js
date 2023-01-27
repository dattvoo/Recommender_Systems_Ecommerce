import React from 'react'
import "./style.css"
export const ErrorMessage = ({ errorMessage }) => {
    return (
        <p className="errorMessage">{errorMessage}</p>
    )
}
