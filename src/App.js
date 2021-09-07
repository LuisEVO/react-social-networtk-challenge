import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Error from './components/Error';
import Loading from './components/Loading';
import Post from './components/Post';
import { loadPosts } from './store/actions/posts.actions';

function App() {
  const dispatch = useDispatch()
  const {loading, posts, error} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])
  
  return (
    <div className="container pt-5">
      { loading && <Loading /> }
      { error && <Error tryAgain={() => dispatch(loadPosts())} /> }
      <div className="row">
        { posts.map(post => (<Post key={post.id} post={post} />)) }
      </div>
    </div>
  );
}

export default App;
