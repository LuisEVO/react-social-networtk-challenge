import React from 'react'

export const Comment = ({ comment }) => {
  return (
    <li class="list-group-item" key={comment.id}>
      <p className="fw-normal mb-0">{ comment.name }</p>
      <p className="fw-light mb-0">{ comment.body }</p>
      <p className="fst-italic mb-0"><a href="#">{comment.email}</a></p>
    </li>
  )
}
