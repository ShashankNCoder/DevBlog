import React from 'react';
import {useState} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux';
import {useForm} from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: { errors }} = useForm()
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const login = async(data) => {
        setError("")
        try {
            const mockUserData = {
                id: '1',
                name: 'Demo User',
                email: data.email
            }
            dispatch(authLogin(mockUserData))
            navigate('/', { replace: true })
        } catch (error) {
            setError('An error occurred during login')
        }
    }

    const places = [
        { 
            title: 'India Gate', 
            desc: 'A war memorial honoring Indian soldiers who died in World War I...', 
            img: 'https://www.theindia.co.in/blog/wp-content/uploads/2021/12/India-Gate-min.jpg' 
        },
        { 
            title: 'Red Fort', 
            desc: 'A UNESCO World Heritage site and a symbol of Mughal grandeur...', 
            img: 'https://www.tripplannersindia.com/assets/blog/images/Historicalplacesinindia/Red.webp' 
        },
        { 
            title: 'Nalanda University', 
            desc: "One of the world's oldest universities, a renowned center for Buddhist learning in ancient India...", 
            img: 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-1553764,resizemode-75,msid-111105122/news/india/nalanda-university-admission-process-courses-eligibility-fees-international-collaboration-and-campus-facilities.jpg' 
        },
        { 
            title: 'Iron Man Of India', 
            desc: 'Refers to Sardar Vallabhbhai Patel, known for unifying India post-independence...', 
            img: 'https://amritmahotsav.nic.in/writereaddata/Portal/Images/narmada.jpg' 
        },
        { 
            title: 'Ajanta Caves', 
            desc: 'Rock-cut Buddhist caves with exquisite paintings and sculptures dating back to the 2nd century BCE...', 
            img: 'https://cdn.britannica.com/70/153470-050-F4594C27/Ajanta-Caves-Maharashtra-India.jpg' 
        },
        { 
            title: 'Qutub Minar', 
            desc: 'The tallest brick minaret in the world, built by Qutb-ud-din Aibak in the 12th century...', 
            img: 'https://cdn2.advanceinfotech.org/bharatdirectory.in/1200x675/business/19/qutab-minar-2-1675766793.webp' 
        },
        { 
            title: 'Havamahal', 
            desc: 'The "Palace of Winds," designed with 953 small windows to allow cool air circulation...', 
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0d/e3/4b/img-20180921-184349-largejpg.jpg?w=1200&h=1200&s=1' 
        },
        { 
            title: 'Nandhi Hills', 
            desc: 'A picturesque hill station near Bangalore, known for its sunrise views and ancient temples...', 
            img: 'https://www.fourwheeldriveindia.com/public/storage/media/blog/72706.jpg' 
        }
    ];

    return (
        <div className='flex items-center justify-center w-full min-h-screen py-20 overflow-x-hidden w-full py-8 min-h-screen bg-gradient-to-br from-gray-400 via-gray-300 to-gray-300'>
            <div className='absolute w-full overflow-x-hidden pointer-events-none'>
                <div className='flex gap-4 animate-scroll' style={{ animation: 'scroll 40s linear infinite' }}>
                    {places.map((item, index) => (
                        <div key={index} className='flex-none w-72 h-48 bg-gradient-to-r from-blue-500/30 to-bg-gradient-to-br from-white via-sky-50 to-sky-100-500/30 rounded-xl backdrop-blur-sm border border-white/20 p-4 relative overflow-hidden'>
                            <div className='absolute inset-0 z-0'>
                                <img src={item.img} alt={item.title} className='w-full h-full object-cover opacity-50' />
                            </div>
                            <div className='relative z-10'>
                                <h3 className='text-xl font-semibold text-[#303f9f] mb-2'>{item.title}</h3>
                                <p className='text-[#616161]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`mx-auto w-full max-w-lg bg-blue-100/30 backdrop-blur-md rounded-xl p-10 border border-white/20 shadow-lg transition-all duration-200 hover:shadow-xl relative z-10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px] text-primary">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight text-foreground">Welcome back!</h2>
                <p className="mt-2 text-center text-base text-foreground/80">
                    Don&apos;t have an account?&nbsp;
                    <Link to="/signup" className="font-medium text-primary hover:text-primary/80 transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-destructive mt-8 text-center font-medium bg-destructive/10 p-3 rounded-lg">{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <div>
                            <Input
                                label="Email"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                            />
                            {errors.email && (
                                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                            {errors.password && (
                                <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isLoading}
                        >
                            <span className="text-white">
                                {isLoading ? "Signing in..." : "Sign in"}
                            </span>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login