import { useEffect, useState } from 'react';
import { Container, PostForm } from '../components/index';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug: postId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (postId) {
            const posts = JSON.parse(localStorage.getItem('posts') || '[]');
            const post = posts.find(p => p.id === postId);
            if (post) {
                setPosts(post);
            } else {
                navigate('/');
            }
        } else {
            navigate('/');
        }
    }, [postId, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost