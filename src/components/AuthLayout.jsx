import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const location = useLocation()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && !authStatus) {
            // Save the attempted URL and redirect to login
            navigate('/login', { state: { from: location.pathname } })
        } else if (!authentication && authStatus) {
            // Redirect to all-posts if user is already authenticated
            navigate('/all-posts')
        }
        setLoader(false)
    }, [authStatus, navigate, authentication, location.pathname])

    if (loader) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
            </div>
        )
    }

    return <>{children}</>
}