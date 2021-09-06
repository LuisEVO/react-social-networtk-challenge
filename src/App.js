import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './components/Post';
import { loadPosts } from './store/actions/posts.actions';

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])
  
  return (
    <div className="container pt-5">
      <div className="row">
        { posts.map(post => (<Post key={post.id} post={post} />)) }
      </div>
    </div>
  );
}

export default App;
