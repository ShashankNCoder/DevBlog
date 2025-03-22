import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from './components/index.js';
import { lazy, Suspense } from 'react';
import Contact from "./pages/Contact";
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load components
const Login = lazy(() => import('./components/Login'));
const Signup = lazy(() => import('./components/Signup'));
const AllPost = lazy(() => import('./pages/AllPost'));
const AddPost = lazy(() => import('./pages/AddPost'));
const EditPost = lazy(() => import('./pages/EditPost'));
const Home = lazy(() => import('./pages/Home'));
const Post = lazy(() => import('./pages/Post'));

// Lazy load additional pages
const Features = lazy(() => import('./pages/Features'));
const About = lazy(() => import('./pages/company/About'));
const Careers = lazy(() => import('./pages/company/Careers'));
const PressKit = lazy(() => import('./pages/company/PressKit'));
const Account = lazy(() => import('./pages/Account'));
const Profile = lazy(() => import('./pages/Profile'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const Help = lazy(() => import('./pages/support/Help'));
const CustomerSupport = lazy(() => import('./pages/support/CustomerSupport'));
const TermsAndConditions = lazy(() => import('./pages/legals/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/legals/PrivacyPolicy'));
const Licensing = lazy(() => import('./pages/legals/Licensing'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
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
                element: (
                    <ProtectedRoute>
                        <AllPost />
                    </ProtectedRoute>
                )
            },
            {
                path: '/add-post',
                element: (
                    <ProtectedRoute>
                        <AddPost />
                    </ProtectedRoute>
                )
            },
            {
                path: '/edit-post/:slug',
                element: (
                    <ProtectedRoute>
                        <EditPost />
                    </ProtectedRoute>
                )
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
                path: '/features',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Features /></Suspense>,
            },
            {
                path: '/company/about',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><About /></Suspense>,
            },
            {
                path: '/company/careers',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Careers /></Suspense>,
            },
            {
                path: '/company/press',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><PressKit /></Suspense>,
            },
            {
                path: '/account',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Account /></Suspense>,
            },
            {
                path: '/profile',
                element: (
                    <AuthLayout authentication>
                        <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}>
                            <Profile />
                        </Suspense>
                    </AuthLayout>
                ),
            },
            {
                path: '/edit-profile',
                element: (
                    <AuthLayout authentication>
                        <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}>
                            <EditProfile />
                        </Suspense>
                    </AuthLayout>
                ),
            },
            {
                path: '/support/help',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Help /></Suspense>,
            },
            {
                path: '/support/customer-support',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><CustomerSupport /></Suspense>,
            },
            {
                path: '/legals/terms',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><TermsAndConditions /></Suspense>,
            },
            {
                path: '/legals/privacy',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><PrivacyPolicy /></Suspense>,
            },
            {
                path: '/legals/licensing',
                element: <Suspense fallback={<div className="flex items-center justify-center h-full"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div></div>}><Licensing /></Suspense>,
            },
        ],
    },
]);

// Remove this line as it's causing the error
// <Route path="/contact" element={<Contact />} />

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);