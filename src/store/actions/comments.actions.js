import axios from "axios"
import commentsTypes from "../types/comments.types"

export const loadComments = (postId) => {
  return (dispatch) => {
    dispatch(commentsLoading(postId))

    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res => dispatch(commentsSuccess(postId, res.data)))
    .catch(error => dispatch(commentsError(postId, error)))
  }
}


export const commentsLoading = (postId) => {
  return {
    type: commentsTypes.loading,
    payload: {postId}
  }
}

export const commentsSuccess = (postId, comments) => {
  return {
    type: commentsTypes.success,
    payload: {postId, comments}
  }
}

export const commentsError = (postId, error) => {
  return {
    type: commentsTypes.error,
    payload: {postId, error}
  }
}