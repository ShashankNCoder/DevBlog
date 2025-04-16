import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            status: post?.status || "active",
            hashtags: post?.tags?.join(' ') || "",
            videoUrl: post?.videoUrl || ""
        },
    });

    const navigate = useNavigate();
    const submit = async (data) => {
        try {
            const posts = JSON.parse(localStorage.getItem('posts') || '[]');
            
            // Handle image
            let imageUrl = '';
            if (data.image?.[0]) {
                imageUrl = URL.createObjectURL(data.image[0]);
            }

            if (post) {
                // Update existing post
                const updatedPosts = posts.map(p => {
                    if (p.id === post.id) {
                        return {
                            ...p,
                            title: data.title,
                            content: data.content,
                            status: data.status,
                            featuredImage: imageUrl || p.featuredImage,
                            videoUrl: data.videoUrl,
                            tags: data.hashtags.split(' ').filter(tag => tag.length > 0)
                        };
                    }
                    return p;
                });
                localStorage.setItem('posts', JSON.stringify(updatedPosts));
                navigate(`/post/${post.id}`);
            } else {
                // Create new post
                const newPost = {
                    id: uuidv4(),
                    title: data.title,
                    content: data.content,
                    status: data.status,
                    featuredImage: imageUrl || 'https://picsum.photos/800/400?random=' + Date.now(),
                    videoUrl: data.videoUrl,
                    author: 'Guest Author',
                    views: 0,
                    createdAt: new Date().toISOString(),
                    tags: data.hashtags.split(' ').filter(tag => tag.length > 0)
                };
                posts.push(newPost);
                localStorage.setItem('posts', JSON.stringify(posts));
                navigate(`/post/${newPost.id}`);
            }
        } catch (error) {
            console.error("Error handling post:", error);
        }
    };



    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2 ">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Hashtags :"
                    placeholder="Enter hashtags separated by spaces"
                    className="mb-4"
                    {...register("hashtags")}
                />
                <RTE 
                    label="Content :" 
                    name="content" 
                    control={control} 
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                <Input
                    label="Video URL :"
                    placeholder="Enter video URL (YouTube, Vimeo, etc.)"
                    className="mb-4"
                    {...register("videoUrl")}
                />
                {post && (
                    <div className="w-full mb-4 ">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Button 
                    type="submit" 
                    bgColor={post ? "bg-green-500 hover:bg-white" : "bg-blue-500 hover:bg-white"} 
                    className="text-white hover:text-black transition-colors duration-300"
                >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}