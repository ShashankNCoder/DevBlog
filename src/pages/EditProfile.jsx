import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Input } from '../components';
import { Loader2, Upload } from 'lucide-react';
import authService from '../appwrite/auth';
import storageService from '../appwrite/storage';
import { login } from '../store/authSlice';

function EditProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        github: '',
        twitter: '',
        linkedin: '',
        profileImageId: '',
        profileImageUrl: ''
    });

    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    useEffect(() => {
        if (userData) {
            setFormData({
                name: userData.name || '',
                bio: userData.bio || '',
                github: userData.github || '',
                twitter: userData.twitter || '',
                linkedin: userData.linkedin || '',
                profileImageId: userData.profileImageId || '',
                profileImageUrl: userData.profileImageUrl || ''
            });
            if (userData.profileImageUrl) {
                setImagePreview(userData.profileImageUrl);
            }
        } else {
            navigate('/login');
        }
    }, [userData, navigate]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            let profileData = { ...formData };

            if (selectedImage) {
                // Delete old profile image if exists
                if (userData.profileImageId) {
                    await storageService.deleteProfileImage(userData.profileImageId);
                }

                // Upload new profile image
                const { fileId, fileUrl } = await storageService.uploadProfileImage(selectedImage);
                profileData.profileImageId = fileId;
                profileData.profileImageUrl = fileUrl;
            }

            const updatedUser = await authService.updateUser({
                ...userData,
                ...profileData
            });
            
            if (updatedUser) {
                dispatch(login(updatedUser));
                navigate('/profile');
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!userData) return null;

    return (
        <div className="py-8">
            <Container>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-card rounded-lg shadow-lg p-6">
                        <h1 className="text-2xl font-bold text-foreground mb-6">Edit Profile</h1>

                        {/* Profile Image Upload */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">Profile Picture</label>
                            <div className="flex items-center space-x-4">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted flex items-center justify-center border-2 border-primary/20">
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <Upload className="w-8 h-8 text-muted-foreground" />
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        id="profile-image"
                                    />
                                    <label
                                        htmlFor="profile-image"
                                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                                    >
                                        <Upload className="w-4 h-4 mr-2" />
                                        Upload Photo
                                    </label>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Recommended: Square image, max 5MB
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {error && (
                            <div className="bg-destructive/15 text-destructive p-3 rounded-lg mb-6">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Bio</label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    placeholder="Tell us about yourself"
                                    className="w-full min-h-[100px] px-3 py-2 rounded-lg border bg-background text-foreground"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">GitHub Profile</label>
                                <Input
                                    name="github"
                                    value={formData.github}
                                    onChange={handleChange}
                                    placeholder="https://github.com/yourusername"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Twitter Profile</label>
                                <Input
                                    name="twitter"
                                    value={formData.twitter}
                                    onChange={handleChange}
                                    placeholder="https://twitter.com/yourusername"
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                                <Input
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    placeholder="https://linkedin.com/in/yourusername"
                                    className="w-full"
                                />
                            </div>

                            <div className="flex gap-4 justify-end">
                                <button
                                    type="button"
                                    onClick={() => navigate('/profile')}
                                    className="px-4 py-2 rounded-lg border hover:bg-muted transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        'Save Changes'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default EditProfile;