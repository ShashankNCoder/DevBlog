import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from './components/index.js';
import { lazy, Suspense } from 'react';
import Contact from "./pages/Contact";
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';

// Lazy load components
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const AllPost = lazy(() => import('./pages/AllPost'));
const EditPost = lazy(() => import('./pages/EditPost'));
const Post = lazy(() => import('./pages/Post'));

// Lazy load additional pages
const Profile = lazy(() => import('./pages/Profile'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Home /></Suspense>
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/all-posts',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><AllPost /></Suspense>
        },
        {
          path: '/edit-post/:slug',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><EditPost /></Suspense>
        },
        {
          path: '/post/:slug',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Post /></Suspense>,
        },
        {
          path: '/contact',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Contact /></Suspense>,
        },
        {
          path: '/profile',
          element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Profile /></Suspense>,
        },
      ],
    },
  ],
  {
    // Add scroll restoration configuration
    scrollBehavior: "auto",
    scrollRestoration: "auto"
  }
);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);