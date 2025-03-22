import React, { useState } from 'react';
import { Container } from '../components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Edit, Calendar, Github, Twitter, Linkedin, Loader2, BookOpen } from 'lucide-react';

function Profile() {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [isLoading, setIsLoading] = useState(true);
    
    // Simulated data - In a real app, this would come from your backend
    const userStats = {
        posts: 12,
        comments: 48,
        likes: 156
    };
    
    const socialLinks = {
        github: userData.github || 'https://github.com',
        twitter: userData.twitter || 'https://twitter.com',
        linkedin: userData.linkedin || 'https://linkedin.com'
    };
    
    React.useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!userData) {
        navigate('/login');
        return null;
    }

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="py-8">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden">
                        {/* Header/Banner Section */}
                        <div className="h-32 bg-gradient-to-r from-blue-900 via-blue-700 to-black"></div>
                        
                        {/* Profile Info Section */}
                        <div className="p-6">
                            <div className="flex flex-col items-center -mt-20 mb-6">
                                <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center text-white text-4xl font-bold border-4 border-card overflow-hidden">
                                    {userData.profileImageUrl ? (
                                        <img src={userData.profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
                                    ) : userData.name ? (
                                        <span>{userData.name[0].toUpperCase()}</span>
                                    ) : (
                                        <User className="w-16 h-16" />
                                    )}
                                </div>
                                <h1 className="mt-4 text-2xl font-bold text-foreground">{userData.name}</h1>
                                <p className="text-muted-foreground">{userData.email}</p>
                            </div>

                            {/* Bio Section */}
                            <div className="mt-6 p-4 bg-muted rounded-lg">
                                <h3 className="font-semibold mb-2">About Me</h3>
                                <p className="text-muted-foreground">
                                    {userData.bio || "No bio available. Click 'Edit Profile' to add your bio."}
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6 flex justify-center space-x-4">
                                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>

                            {/* User Stats */}
                            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.posts}</p>
                                    <p className="text-sm text-muted-foreground">Posts</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.comments}</p>
                                    <p className="text-sm text-muted-foreground">Comments</p>
                                </div>
                                <div className="p-4 bg-muted rounded-lg">
                                    <p className="text-2xl font-bold text-primary">{userStats.likes}</p>
                                    <p className="text-sm text-muted-foreground">Likes</p>
                                </div>
                            </div>

                            {/* Profile Details */}
                            <div className="space-y-6 mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <User className="w-5 h-5 text-primary" />
                                            <h3 className="font-semibold">Account Info</h3>
                                        </div>
                                        <div className="mt-3 space-y-2">
                                            <p className="text-sm text-muted-foreground">Member since</p>
                                            <p className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(userData.$createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-muted rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Mail className="w-5 h-5 text-primary" />
                                            <h3 className="font-semibold">Contact Info</h3>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-sm text-muted-foreground">Email address</p>
                                            <p className="mt-1">{userData.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit Profile Button */}
                                <div className="flex justify-center mt-6">
                                    <button
                                        onClick={() => navigate('/edit-profile')}
                                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                                    >
                                        <Edit className="w-4 h-4" />
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Profile;