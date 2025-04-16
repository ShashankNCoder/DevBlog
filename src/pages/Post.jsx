import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { FaHeart, FaShare, FaComment, FaBookmark } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Post() {
  const [post, setPost] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const { slug: postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = () => {
      if (postId) {
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        const foundPost = posts.find(p => p.id === postId);
        if (foundPost) {
          setPost(foundPost);
          setLikes(foundPost.likes || 0);
          setComments(foundPost.comments || []);
          setIsLiked(foundPost.isLiked || false);
          setIsBookmarked(foundPost.isBookmarked || false);
          // Ensure transition happens after post is loaded
          requestAnimationFrame(() => {
            setIsTransitioned(true);
          });
        } else {
          navigate('/');
        }
      }
    };

    loadPost();
    return () => {
      setPost(null);
      setIsTransitioned(false);
    };
  }, [postId, navigate]);

  const deletePost = () => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = posts.filter(p => p.id !== post.id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    navigate("/");
  };

  if (!post) return null;

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = posts.map(p => {
      if (p.id === postId) {
        return { ...p, likes: newLikes, isLiked: !isLiked };
      }
      return p;
    });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setLikes(newLikes);
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: 'Check out this post!',
        url: window.location.href,
      });
    }
  };

  const handleBookmark = () => {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const updatedPosts = posts.map(p => {
      if (p.id === postId) {
        return { ...p, isBookmarked: !isBookmarked };
      }
      return p;
    });
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="w-full py-8">
      <Container>
        <motion.article 
          layoutId={`post-card-${postId}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg relative"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div 
              layoutId={`post-image-${postId}`}
              className="md:w-1/3 relative"
              initial={{ x: 0 }}
              animate={{ 
                x: isTransitioned ? -20 : 0,
                transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }
              }}
            >
              <motion.img
                layoutId={`post-image-content-${postId}`}
                src={post.featuredImage}
                alt={post.title}
                className="rounded-xl w-full h-auto object-cover shadow-md"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: isTransitioned ? 0.95 : 1,
                  transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] }
                }}
              />
            </motion.div>

            <motion.div 
              layoutId={`post-content-${postId}`}
              className="md:w-2/3"
              initial={{ x: 100, opacity: 0 }}
              animate={{ 
                x: isTransitioned ? 0 : 100,
                opacity: isTransitioned ? 1 : 0
              }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="mb-6">
                <motion.h1 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-bold mb-4 text-gray-800"
                >
                  {post.title}
                </motion.h1>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-6 text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 cursor-pointer hover:text-red-500 transition-colors"
                    onClick={handleLike}
                  >
                    <FaHeart className={`text-2xl ${isLiked ? 'text-red-500' : ''}`} />
                    <span className="font-semibold">{likes}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors"
                    onClick={handleShare}
                  >
                    <FaShare className="text-2xl" />
                    <span className="font-semibold">Share</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 cursor-pointer hover:text-purple-500 transition-colors"
                    onClick={() => setShowCommentForm(!showCommentForm)}
                  >
                    <FaComment className="text-2xl" />
                    <span className="font-semibold">{comments.length} comments</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={handleBookmark}
                  >
                    <FaBookmark className={`text-2xl ${isBookmarked ? 'text-yellow-500' : ''}`} />
                    <span className="font-semibold">Save</span>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="prose max-w-none prose-img:rounded-xl prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 hover:prose-a:text-blue-500"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </motion.div>
          </div>
        </motion.article>
      </Container>
    </div>
  );
}
