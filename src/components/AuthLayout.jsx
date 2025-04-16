import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({ children }) {
    const navigate = useNavigate()

    return <>{children}</>
}