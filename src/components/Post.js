import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadComments } from '../store/actions/comments.actions'
import { Comment } from './Comment'

export const Post = ({ post }) => {

  const dispatch = useDispatch()
  const comments = useSelector(state => post.id in state.comments.comments ? state.comments.comments[post.id] : [])

  return (
    <div className="mb-3">
      <div className="card mb-1">
        <div className="card-body">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button className="btn btn-link" onClick={() => dispatch(loadComments(post.id))}>Comentarios</button>
        </div>
      </div>
      <ul className="list-group">
        { comments.map(comment => <Comment key={comment.id} comment={comment} />) }
      </ul>
    </div>

  )
}
