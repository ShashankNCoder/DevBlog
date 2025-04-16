import React, { useState, useEffect, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer } from './components'
import { login, logout } from './store/authSlice'

function App() {
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    // Check for mock auth state in localStorage
    const mockAuthState = localStorage.getItem('mockAuthState')
    if (mockAuthState) {
      dispatch(login(JSON.parse(mockAuthState)))
    } else {
      dispatch(logout())
    }
  }, [])

  return (
    <div className='min-h-screen flex flex-col w-full bg-white text-foreground'>
      <Header />
      <main className='flex-grow w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App