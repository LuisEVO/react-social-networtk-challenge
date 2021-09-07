import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { loadComments } from '../store/actions/comments.actions'
import Comment from './Comment'
import { commentSelector } from '../store/selectors/comments.selector';
import Loading from './Loading';
import Error from './Error';

const Post = ({ post }) => {

  const dispatch = useDispatch()
  const {loading, comments, error} = useSelector(state => commentSelector(state, post.id))

  return (
    <div className="mb-3">
      <div className="card mb-1">
        <div className="card-body">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button className="btn btn-link" onClick={() => dispatch(loadComments(post.id))}>Comments</button>
        </div>
      </div>
      <ul className="list-group">
        { loading && <Loading /> }
        { error && <Error tryAgain={() => dispatch(loadComments(post.id))} /> }
        { comments.map(comment => <Comment key={comment.id} comment={comment} />) }
      </ul>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;