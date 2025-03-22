import React, { useState } from 'react'
import appwriteService from "../appwrite/config-appwrite"
import {Link} from 'react-router-dom'
import { Share2, Clock, User } from 'lucide-react'

function PostCard({$id, title, featuredImage, content, userId}) {
    const [imageLoading, setImageLoading] = useState(true)
    const [author, setAuthor] = useState('')
    
    // Calculate read time (assuming average reading speed of 200 words per minute)
    const getReadTime = (content) => {
        const words = content?.split(/\s+/)?.length || 0
        const minutes = Math.ceil(words / 200)
        return `${minutes} min read`
    }

    // Share post function
    const sharePost = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (navigator.share) {
            navigator.share({
                title: title,
                url: window.location.origin + `/post/${$id}`
            })
        }
    }

    React.useEffect(() => {
        if (userId) {
            appwriteService.getUser(userId).then(user => {
                setAuthor(user?.name || 'Anonymous')
            })
        }
    }, [userId])
    
    return (
      <Link to={`/post/${$id}`}>
          <div className='w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
              <div className='w-full aspect-video relative'>
                  {imageLoading && (
                      <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  )}
                  <img 
                      src={appwriteService.getFilePreview(featuredImage)}
                      alt={title}
                      className='w-full h-full object-cover'
                      onLoad={() => setImageLoading(false)}
                      style={{ opacity: imageLoading ? 0 : 1 }}
                  />
              </div>
              <div className="p-4">
                  <h2 className='text-xl font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors'>
                      {title}
                  </h2>
                  <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                              <User size={16} />
                              <span>{author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                              <Clock size={16} />
                              <span>{getReadTime(content)}</span>
                          </div>
                      </div>
                      <button 
                          onClick={sharePost}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          aria-label="Share post"
                      >
                          <Share2 size={16} />
                      </button>
                  </div>
              </div>
          </div>
      </Link>
    )
}

export default PostCard